---
layout: post
title: Web MIDI API が Chrome Canary にやってきた!!!!
description: ""
modified: 2013-06-01
tags: [Web MIDI API, Web Music, Web Audio API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

ついにMIDI機器をブラウザで扱える日を迎えました！！そうです、<a href="http://webaudio.github.io/web-midi-api/" target="_blank">Web MIDI API</a>です。W3C的にはもうすぐLC(Last Call:最終草案)の段階で、ここを迎えるには「2つ以上のブラウザに実装されている」ことが条件になってる1つをGoogleさんが90%以上(sendが未実装なので)超えてくださいました。感謝感謝です！！！
オリジナルの記事は<a href="https://plus.google.com/+ChrisWilson/posts/cs4J6sS9qmJ" target="_blank">こちら</a>！！


まずは仕様の変更点。


#### (0) 変更じゃないけど、まだflag付きです。
**chrome://flags/#enable-web-midi**<br>
をenableにしてください。しかしながら、send() は未実装です。

#### (1) requestMIDIAccess の引数が変更されました。

- 変更前 navigator.requestMIDIAccess( successCallback, failureCallback );
- 変更後 navigator.requestMIDIAccess({sysex:true/false}).then( successCallback, failureCallback );

SysExで楽器の情報をDumpできちゃので、それを明示的に指定するのが目的だと思われます。今後、{sysex:true} になってる場合、ユーザに許可を求めるダイアログが出るかもしれないです。

#### (2) event名 message が midimessage に変更されました。

#### (3) getInputs() -> getInput(id)、getOutputs() -> getOutput(id)が、1段階になりました。
inputs()、outputs() するとMIDI機器のリストが配列が返ってきて、配列のIDを指定することでそのMIDI機器を扱えるようになります。<br>
※ この変更で扱いが更に手軽になりました。

変更点は以上です。
<a href="//twitter.com/cwilso" target="_blank">Chris Wilson</a>氏の<a href="https://github.com/cwilso/WebMIDIAPIShim" target="_blank">Polifill</a>もこれらの変更に対応済みでした。

<br>
そして今回は「Web MIDI API！！」と騒いでる自分も何かできないか？？と考えた結果、需要があるか分かりませんが事始めにテストでも書いてみることにしました。というのも、先月 Test the Web Forward という「Web標準の仕様書を見て実際にテストを書いてContributeしちゃおう！！」という<a href="http://fumit.blogspot.jp/2013/06/test-web-forward-testtwf.html" target="_blank">イベント</a>に参加してきまして、その応用でもあります。このイベントで重要なのは「みんなでテストを書いてContributeすることで、ブラウザ間のInteroperabilityを高めよう」というところだと私は理解しました。

<br>
そしてWeb MIDI APIのテストはこれ <a href="https://dl.dropboxusercontent.com/u/695740/WebMusicDevelopersJP/WebMIDIAPITest/index.html" target="_blank">Web MIDI API Test</a><br>※スゴイモノではありませんのでびっくりしないでください(><)<br>
OSX の Chrome Canary以外で動作させるには、<a href="http://jazz-soft.net/" target="_blank">http://jazz-soft.net/</a> の Jazz-Plugin のインストールが必須です。


このテストを使って、以下の組み合わせで動作することを確認をしました。(全てPolyfillを使ってのテストになります)ここに書いてないのは試していないだけなので、情報をいただけるとありがたいです(・ω<)
 - OSX: Chrome(27.0.1453.116)、Firefox(22)、Safafi(6.0.5 (8536.30.1))、Opera(15.0.1147.132)
 - Windows8: IE10、Firefox(22)、Chrome(27.0.1453.110)
