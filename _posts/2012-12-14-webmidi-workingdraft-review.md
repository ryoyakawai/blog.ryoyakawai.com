---
layout: post
title: Second Web MIDI API Working Draft のレビュー
description: ""
modified: 2012-12-14
tags: [Advent Calender 2012, Web Music, Web MIDI API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>
<a href="https://adventar.org/calendars/22" taget="_blank">Web Music Developers JPのアドベントカレンダー</a>の12月15日の記事です！

**追記：Web MIDI APIの仕様は日に日に更新されています。2013年1月8日の段階で既にこの説明の説明からは変更されていますのでご注意ください。**


2012年12月11日にWeb MIDI APIのWorkingDraft 第二版になりました。サンプルコードも追加され、また編集者の一人である<a href="//twitter.com/cwilso" target="_blank">Chris Wilson</a>さんがプラグインを使った<a href="https://github.com/cwilso/WebMIDIAPIShim" target="_blank">エミュレーションライブラリ(Polyfill)</a>を公開してくださいました。仕様とサンプルを同時にレビューすると長くなりそうなので「仕様のレビュー」、「サンプルコードのレビュー」の2部構成で進めさせていただこうと思います。初回の今回は「仕様のレビュー」を行います。

さて、まずは「MIDI」と「Web MIDI API」についての簡単な説明です。
MIDIは「Musical Instrument Digital Interface」の略で、日本語にすると「電子楽器デジタルインターフェイス」、電子楽器の演奏データを機器間でデジタル転送するための世界共通規格です。そしてWeb MIDI APIです。HTML5のデバイスアクセスの仕様の1つとしてW3Cで策定が進められているウェブブラウザから”プラグインを使わずに”電子楽器へ直接接続を可能にする為のAPIです。とはいえ、最近のコンピュータでMIDIポートを搭載しているものはありませんので、基本的にはUSB-MIDIでの接続になります。Web MIDI APIの最終的な仕様は2013年の第3四半期に策定される予定になっています。

それではWeb MIDI APIの仕様のレビューをしていきます。
最初に全体的な構成です。(i)がinterface、(m)がmethodを示しています。また「->」の意味ですが、例えば「A -> return B」だとすると「Aを実行するとBがくる」という意味で使っています。

- (i)NavigatorMIDIAccess<br>- (m)getMIDIAccess -> return void
- (i)MIDIAccess
   <br>- (m)enumerateInputs -> return (i)MIDIPort
   <br>- (m)enumerateOutputs -> return (i)MIDIPort
   <br>- (m)getInput -> return (i)MIDIInput
   <br>- (m)getOutput -> return (i)MIDIOutput
- (i)MIDIPort
- (i)MIDIInput
- (i)MIDIOutput
   <br>- (m)send -> return void
-  (i)MIDIEvent

次に(i)のついているinterfaceを説明します。

#### NavigatorMIDIAccess
UserAgentのwindow.navigatorに属するObjectでMIDI機器へのアクセスを可能にします。

```javascript
interface NavigatorMIDIAccess {
      void getMIDIAccess(successCallback, optional errorCallback)
    }
```

#### MIDIAccess
UserAgentに接続されているMIDI機器のリストアップ、またアクセスを可能にします。

```javascript
interface MIDIAccess {
      sequence<MIDIPort> enumerateInputs();
      sequence<MIDIPort> enumerateOutputs();
      MIDIInput          getInput(MIDIPort or DOMString or short target);
      MIDIOutput         getOutput(MIDIPort or DOMString or short target);
}
```

#### MIDIPort
MIDIのInput/Outputポートで、名前、製造会社、MIDIポートのタイプ(input/output)、ユニークIDを提供します。

```javascript
interface MIDIPort: EventTarget {
      DOMString    fingerprint;
      DOMString    manufacturer;
      DOMString    name;
      MIDIPortType type; // input or output
      DOMString    version;
}
```

#### MIDIInput
MIDIPortに組み込まれていて、さらにMIDIメッセージハンドラをデバイスへ割当てることが可能です。onmessageにMIDIメッセージを取得した時の処理を関数として書きます。

```javascript
interface MIDIInput {
  attribute callback? onmessage;
}
```


#### MIDIOutput
MIDIPortに組み込まれていて、またMIDIメッセージをOutputポートへ送信するメソッドを提供します。

```javascript
interface MIDIOutput {
  void send(sequence<short> data, optional DOMHighResTimeStamp? timestamp);
}
```

#### MIDIEvent
MIDIInputのonmessage handlerに渡されたEventオブジェクトで、MIDI data byteに加えてtimestampも含まれています。

```javascript
interface MIDIEvent: Event {
  attribute DOMHighResTimeStamp timestamp;
  attribute Uint8Array          data;
}
```

最後に(m)のついているmethodの説明です。

#### `getMIDIAccess(successCallback, optional errorCallback)`

- successCallback: MIDI機器が取得できた場合のCallback
- -> (i)MIDIAccess を渡す
- errorCallback: なんらかの理由でMIDI機器を取得できなった場合のCallback
- enumerateInputs()
- 引数なし
- 利用可能なMIDI input port[(i)MIDIInput]のリストを配列で返す

#### enumerateOutputs()

- 引数なし
- 利用可能なMIDI output port[(i)MIDIInput]のリストを配列で返す


#### getInput(target)

- target: (i)MIDIPort、または、(i)MIDIPortのfingerprint[DOMString]、<br>または、 enumerateInputs()で取得したindex[short]

#### getOutput(target)
- target: (i)MIDIPort、または、(i)MIDIPortのfingerprint[DOMString]、
                        <br>または、enumerateOutputs()で取得したindex[short]

#### send(data, optional timestamp)
- data: 配列にしたshort
- timestamp: DOMHighResTimeStamp(暫定?)



といった仕様になっています。
これだけではイメージするのは難しいと思いますが、「サンプルコードのレビュー」も続けて書きますので、そちらも合わせてご覧になるともっとイメージが湧くと思います。

ということで今回はここまでということで！
