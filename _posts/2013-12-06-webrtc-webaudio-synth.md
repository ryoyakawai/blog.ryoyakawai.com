---
layout: post
title: WebRTC経由でシンセを鳴らしてみた
description: ""
modified: 2013-12-06
tags: [Web Audio API, Web MIDI API, WebRTC, Web Music]
---
<div> </div>

Web MIDI APIで「Webならでは」をやってみるのが夢で、その夢をやっと実現させました！！こんな感じです。


<div class="post-image-center">
  <img src="{{ site.url }}/images/2013/12/20131206-webrtc-webaudio.png" width="80%">
</div>

Computerを2台用意して、片側のComputerに接続されたMIDIコントローラを演奏すると、別のComputerに接続されているシンセが鳴り出すという仕組みです。ブラウザとMIDIコントローラ/シンセはWeb MIDI APIを使ってMIDIメッセージをやりとりをし、Computer間でのMIDIメッセージの通信にはWeb RTCのDataChannelを使用します。また、せっかくのWebRTCですのでお互いの映像・音声の送受信も行っています。<br>
動画を御覧ください▼

<div>
  <youtube-play contentid="Zd2LWO4BjFI" size="80%" imgsrc="{{ site.url }}/images/2013/12/20131206-webrtc-webaudio-webmidi.png" start="2" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

WebRTCの実装 <a href="http://peer.js/" target="_blank">peer.js</a> を使っています。驚くほど簡単にできてしまいました^^ 動画では一方通行ですが、双方向でもできるはずです。また遅延に関して、今回の2台のComputerは同一セグメントにぶら下がっていたこともあってか、体感できる遅延はありませんでした。（詳細な調査もしていませんが。。。）
「MIDIを使うのであれば、これでセッションできちゃうんじゃないのかな〜？」と感じた一瞬でした。ホント、ここまで簡単に実装できてしまう（動画編集のが時間かかってるw）とは夢にも思っていませんでしたので、自分自信が一番驚いています。<br>
<br>
今後は peer.js の部分をNTT Commさんから先日リリースされた <a href="http://nttcom.github.io/skyway/" target="_blank">SkyWay</a> にしてみようかと思います！！
