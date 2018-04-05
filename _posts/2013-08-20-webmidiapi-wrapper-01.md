---
layout: post
title: Web MIDI API Wrapper 公開したよ^^ (1)
description: ""
modified: 2013-08-20
tags: [Web MIDI API, Web Music]
---
<div> </div>


2013年7月1日にChrome CanaryにMIDI InputがやってきたWeb MIDI API。そろそろOutputも来るはずですが、今のところ<a href="http://jazz-soft.net/" target="_blank">Jazz-Plugin</a>をインストールして<a href="https://github.com/cwilso/WebMIDIAPIShim" target="_blank">Web MIDI API Shim</a>を使って動かします^^
でも「MIDIって難しいんでしょ？」という声が聞こえて聞こえてきそうなので、聞こえてくる前にWrapperなるものを作ってみました。

<div class="post-image-center">
<a href="https://github.com/ryoyakawai/WebMIDIAPIWrapper" target="_blank">Web MIDI API Wrapper</a>
</div>

Wrapperの話に入る前に「MIDIってなんぞ？」ってところを少し書きます。一言で言うと
「メーカの枠を超え、電子楽器と電子楽器を接続する為のプロトコル」なんです。
歴史は30年前のNAMM Show(National Association of Music Merchants Show)という楽器の見本市でお披露目され
(今年はちょうど30周年に加え<a href="http://www.midi.org/aboutus/news/grammy.php" target="_blank">テクニカルグラミー賞を受賞</a>)、その後電子楽器の接続のみならず照明機器のコントロール、通信カラオケ、携帯電話の着信音の制作など幅広く利用、応用されています。有名なのは、HollywoodにあるUniversal StudiosのWaterworldのアトラクションで、ライトと演出の同期、キュー出しにMIDIが使われています。そのアトラクションがこれ▼です。(12分00秒辺りが同期とか必要そう)
<div>
  <youtube-play contentid="GmkZYt2-GYY" size="80%" imgsrc="{{ site.url }}/images/2013/08/20130820-waterworld.png" start="0" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

Wrapperの説明に入ります。
今のところ、とりあえずMIDIを意識せずともアプリケーションを簡単に構築できるように、基本的な以下のメッセージに対応にしています。

- NoteOn：音を鳴らす
- NoteOff：音を止める
- PitchBend：ピッチを上下させる
- Sustain：ダンパーペダルの操作
- Modulation：揺らぎ
- AllSoundOff：残響、Sustainを含め即時に全ての音を止める
- ResetAllController：PitchBend、After-Touchなどのコントローラを初期値に戻す
- AllNoteOff：発音している音を全て止める

使い方はこんな感じです。 まずは WebMIDIAPI.js と WebMIDIAPIWrapper.js にリンクします。(今回は都合上、前準備だけになってしまいました。。。)

```html
<script src="[PathToJS]/WebMIDIAPI.js"></script>
<script src="[PathToJS]/WebMIDIAPIWrapper.js"></script>
```

次にConstructorを作ります。

```javascript
var wmaw = new WebMIDIAPIWrapper( false );
```

続いて MIDI Input 、 MIDI Output が指定されたときの EventHandler を指定します。 

```javascript
wmaw.setMidiInputSelect=function() {
  /* MIDI Input の選択リストを表示する EventHandler */
  /* 選択リストから MIDI Input が選択された時の EventHandler もここに書く*/
}
```

```javascript
wmaw.setMidiOutputSelect=function() {
  /* MIDI Output の選択リストを表示する EventHandler */
  /* 選択リストから MIDI Output が選択された時の EventHandler もここに書く*/
}
```

最後に Web MIDI API を Fire する。 

```javascript
wmaw.init();
```


これで MIDI Input、Output デバイスのリストが表示され、デバイスを選択できる状態になります。デバイスを選択した状態でMIDIメッセージを送れば音がなったりします。例えばこんな感じ▼

```javascript
wmaw.sendNoteOn(0, 0, 69, 60, 0);
wmaw.sendNoteOff(0, 0, 69, 60, 500);
```

これでA4の音が500msecの間、60の強さ(最大127)で鳴ります。

ここから！というところですが、この先を書くと長くなりそうなので今回はここまでにして、次回はMIDIメッセージの送信について書こうと思います！！

お楽しみに^^

