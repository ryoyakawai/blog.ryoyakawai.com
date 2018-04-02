---
layout: post
title: Second Web MIDI API Working Draft のサンプルコード レビュー
description: ""
modified: 2012-12-19
tags: [Advent Calender 2012, Web Music, Web MIDI API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>
<a href="https://adventar.org/calendars/22" taget="_blank">Web Music Developers JPのアドベントカレンダー</a>の12月20日の記事です！

**追記：Web MIDI APIの仕様は日に日に更新されています。2013年1月8日の段階で既にこの説明の説明からは変更されていますのでご注意ください。**


前回は「<a href="http://localhost:4000/2012/12/webmidi-workingdraft-review.html" target="_blank">Second Web MIDI API Working Draftのレビュー</a>」を行いました。今回は<a href="https://www.w3.org/TR/webmidi/" target="_blank">Web MIDI APIのWorkingDraft 第二版</a>の末尾にあるサンプルコードのレビューを行います。とてもシンプルで分かりやすいサンプルコードになっていてとても参考になると思います。

ではさっそくレビューにはいります。


## MIDI機器を取得
MIDI機器を扱う為の準備。

```javascript
var midi = null;  // global MIDIAccess object

function onMIDISuccess( midiAccess ) {
 console.log( "MIDI ready!" );
 midi = midiAccess;  // store in the global 
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

navigator.getMIDIAccess( onMIDISuccess, onMIDIFailure );
```

`getMIDIAccess`メソッド成功時のcallback関数を`onMIDISuccess`[3-6行目]とする。`onMIDISuccess`でGlobal変数midi[1行目]にインターフェイス`MIDIAccess`を代入[5行目]。`getMIDIAccess`メソッドがエラーとなった場合のcallback関数として`onMIDIFailure`[8-9行目]をと指定。


## MIDI機器のリストアップ
MIDI入力元、出力先を指定する為にリストアップ。

```javascript
function enumerateInputsAndOutputs( midiAccess ) {
 var inputs = midiAccess.enumerateInputs();
 var outputs = midiAccess.enumerateOutputs();
 var i;

 for (i=0; i<inputs.length; i++) {
  console.log(inputs[i]);
 }

 for (i=0; i<outputs.length; i++) {
  console.log(outputs[i]);
 }
}
```

インターフェイス`MIDIAccess`のメソッド`enumerateInputs`[2行目]/`enumerateOutputs`[3行目]を実行してMIDI機器のリストを取得して入力機器、出力機器を別々に`console.log`でデバッガのWebコンソールに出力[入力機器：6-8行目、出力機器：10-12行目]。


## MIDIの入力信号を処理
受け取ったMIDI信号を処理。

```javascript
function onMIDIMessage( event ) {
  var str = "MIDI message received at timestamp " + event.timestamp + "[" +
               event.data.length + " bytes]: ";
  for (var i=0; i<event.data.length; i++)
    str += "0x" + event.data[i].toString(16) + " ";
  console.log( str );
}

function startLoggingMIDIInput( midiAccess, indexOfPort ) {
  var input = midiAccess.getInput( indexOfPort );
  input.onmessage = onMIDIMessage;
}
```

インターフェイス`MIDIAccess`のメソッドgetInputで入力機器を指定して取得[9行目]し、MIDIメッセージを受信した場合のcallback関数(onmessage)を`onMIDIMessage`に指定[10行目]。
関数`onMIDIessage`は、MIDI入力を16進数変換して`console.log`でデバッガのWebコンソールに出力。


## MIDIの出力ポートからMIDI信号を出力
MIDI信号を送信。

```javascript
function sendMiddleC( midiAccess, indexOfPort ) {
  var output = midiAccess.getOutput( indexOfPort );
  output.send( [0x90, 60, 0x7f] );
   // note on, middle C, full velocity - omitting the timestamp means send immediately.
  output.send( [0x80, 60, 0x40], window.performance.now() + 1000.0 );
   // note off, middle C, release velocity = 64, 
   // timestamp = now + 1000ms.
}
```

インターフェイス`MIDIAccess`のメソッド`getOutput`で出力機器を指定して取得[2行目]し、即座(timestampなし)に[90 60 7f]を実行するようMIDIメッセージを送信[3行目]、次に1000ms後に[80 60 40]が実行されるようMIDIメッセージを送信[4行目]。

- `[90 60 7f]`:「MIDIポート1のC4を127の音量で発音する」というMIDIメッセージ
- `[80 60 40]`:「MIDIポート1のC4を64の速度(機器によって異なる)で発音を停止する」というMIDIメッセージ

(RunningStatusの送信は許可されていません。)


## MIDIの入力機器から受信したMIDIメッセージを出力機器へ送信するLoopback

```javascript
var midi = null;  // global MIDIAccess object
var output = null;

function echoMIDIMessage( event ) {
  if (output)
    output.send( event.data, event.timestamp );
}

function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  try { 
    var input = midiAccess.getInput( 0 );
    output = midiAccess.getOutput( 0 );
    input.onmessage = echoMIDIMessage;
  }
  catch (e) {
    console.log("Exception! Couldn't get i/o ports." + e );
  }
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

navigator.getMIDIAccess( onMIDISuccess, onMIDIFailure );
```
- インターフェイス`MIDIAccess`を代入するGlobal変数midiを初期化[1行目]。
- インターフェイス`MIDIAccess`のメソッドgetOutputで取得するインターフェイスMIDIOutputを代入するGlobal変数outputを初期化[2行目]。
- `getMIDIAccess`メソッド成功時のcallback関数を`onMIDISuccess`[9-19行目]とする[25行目]。
- `MIDISuccess`では、`getInput`で先頭ににリストアップされた入力機器を取得[12行目]、getOutputで先頭ににリストアップされた出力機器を取得[13行目]、MIDIメッセージを受信した場合のcallback関数として`echoMIDIMessage`を指定[14行目]。
- `echoMIDIMessage`では、選択した入力機器から受信したMIDIメッセージをそのまま選択した出力機器へ送信[6行目]。

というのがサンプルコードになります。
これでかなりイメージが湧くかな、と思います。

そして、Web MIDI APIの編集者の1人である<a href="//twitter.com/cwilso" target="_blank">Chris Wilson</a>さんが公開くださっているプラグインを使ったエミュレーションライブラリ(<a href="https://github.com/cwilso/WebMIDIAPIShim" target="_blank">Polyfill</a>)を実際に使って簡単なMIDI INのみのデモを作ってみましのた！！動作にはUSB-MIDIキーボードとJazz SoftのJazz-Pluginのインストールが必須となります。こんなに簡単にUSB-MIDI機器がブラウザにつながってしまう世の中になるのか〜、って思うとワクワクしちゃいます！

<a href="http://dl.dropbox.com/u/695740/WebMusicDevelopersJP/oscillator/index.html" target="_blank">デモはこちらです！</a>

それでは次回Web Music Developers JPのAdventCalenderの最終日は、MIDI OUTなデモが作成できたらな〜、と考えています！（作成できなかった場合、すみません。。。）

