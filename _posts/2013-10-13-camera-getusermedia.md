---
layout: post
title: プレゼン中に手元の実物を見せたいことありませんか？
description: ""
modified: 2013-10-13
tags: [Web Audio API, Web MIDI API, Web Music Developers JP, Web Music]
---
<div> </div>

プレゼンテーション中はスライドを表示してると思います。けど、そんな時に「実は、手元の実物を見せたい、、、」って思ったことはありまえんか？？<br>
僕は直前になるといろいろアイデアが浮かびプレゼン前に例えばデモを作ってることもありますf(^-^;) それと同じように、直前に「あっ、これ見せたほうが臨場感が伝わるよな。。。でも資料作成完了してて画像・動画は入れられないし、そもそも時間がない。。。(´・ω・｀)」という場合、「カメラを用意して、ケーブルを用意して、プレゼン中に切り替える？えっ、それ失敗したら悲惨だな〜」とか物理的にも、気分的にも大変ですよね。<br>
そんな場合、ネットにつながっているorお使いのコンピュータにWebサーバが動いている場合に使えるのが今回ご紹介するWeb Cameraとブラウザを使う方法です。


早速、それが<a href="http://goo.gl/kUJ98e" target="_blank">こちら</a>


<div class="post-image-center">
  <img src="{{ site.url }}/images/2013/10/20131013-camera-gum.png" width="80%">
</div>


使い方は超簡単の2Step。

1. Web CameraをPCに接続（PC内蔵のCameraも使えます）
2. [ココ](http://goo.gl/kUJ98e)にアクセス、表示されたウィンドウ内のどこかをクリック

以上です^^<br>
あとは見せたい実物をCameraで映すだけ！！<br>
PCに複数Cameraが接続されている場合はアドレスバーの右に出てくるカメラのマークをクリックすると選択できます。(Chrome)


<div class="post-image-center">
  <img src="{{ site.url }}/images/2013/10/20131013-gum-02.png" width="50%">
</div>



これWebRTCで定義されているgetUserMedia()というAPIを使っています。気になる方はソース見てみてくださいね〜


（Web CameraはiBuffaloの<a href="http://buffalo.jp/products/catalog/supply/multimedia/webcamera/320/bsw32km03/" target="_blank">BSW32KM03BK</a>を使ってます。）
