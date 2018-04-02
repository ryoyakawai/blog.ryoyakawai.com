---
layout: post
title: Web MIDI API：MacのChrome43でHotPlugが可能になります
description: ""
modified: 2015-02-25
tags: [Web MIDI API, Web Music, Chrome]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

<a href="/2015/02/webmidiapi-chrome-43-enable-hotplug-en.html" target="_blank">English Version</a>

Chrome43（今日配信されたCanaryで試せます）でWeb MIDI APIに新たな機能が追加になりました！（まだMacだけ）<br>
その機能はChromeを起動中にMIDI機器を抜いたり、挿したりした場合にEventが飛ぶという機能です。今まで、Chrome起動中にMIDI機器を挿しても認識してくれませんでしたので、とても便利になりますよね^^<br>
仕様的には <a href="http://webaudio.github.io/web-midi-api/#idl-def-MIDIAccess" target="_blank">MIDIAccess Interfaceのonstatechange</a> と、<a href="http://webaudio.github.io/web-midi-api/#idl-def-MIDIPort" target="_blank">MIDIPort Interfaceのonstatechange</a> です。<br>
MIDIAccessの方のコードを書いてみるとこんな感じ。３行目から５行目のところ。

```javascript
navigator.requestMIDIAccess({"sysex":true}).then(successCallback, errorCallback);
function successCallback(access) {
      access.onstatechange=function(event){
          console.log(event);
          // event.port に 接続/切断 されたMIDI機器が入っています。
      }
}
function errorCallback(msg) {
      console.log("[ERROR] ", msg);
}
```

<div class="post-image-center">
  <img class="image-bordered" src="{{ site.url }}/images/2015/02/20150225-midi-device-property.png" width="70%">
</div>

こんな感じのがconsoleに表示されます。 port には接続/切断されたMIDI機器の情報が入ってきます。port.state に 状態が入ってきてその意味はこんな感じになっています。

- disconnected：接続されていた機器が切断された状態
- connected：接続されたけど、データのやりとりはできません状態
- opened：接続され、データのやりとりができます状態

MIDIPort の方の同じように、onstatechangeにEventhandlerを書いてやると接続/切断で反応してくれます。<br>
<s>MIDIPort の onstatechange は requestMIDIAccess()を実行する前から接続されていた機器にしか Eventhandler をつけられませんので注意してください。 </s>MIDIPortのEventhandlerについてですが、MIDIAccessのinputs/outputsのIteratorは接続/切断がある毎に更新されていますので、正確には requestMIDIAccess() 実行後でもEventhandlerをつけることは可能でした。間違った説明をしてしまいすみませんでした。（更新：2015/2/25 23:30）<br>
<br>
ということで、また1つ便利になりました^^
