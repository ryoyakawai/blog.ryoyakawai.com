---
layout: post
title: GTUG Girls Meetup &#35;19 Web Audio APIを使ってみよう でハンズオンしてきた。
description: ""
modified: 2014-10-16
tags: [Web MIDI API, Web Music, Web Audio, Hnads-On, GTUG Girls]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

GTUG Girls Meetup #19  **「Web Audio APIを使ってみよう」** でハンズオンをしてきました。お題はWeb Audioです。ハンズオンということで、ハッカソンで初心者の方にやってもらっている<a href="https://github.com/ryoyakawai/WebMusicDevelopersJP/tree/master/codeLabs/WebAudioAPI" target="_blank">チュートリアル</a>をそのまま使おうと思ったのですが、せっかくだからもっと楽しくやれるようにできないか？と思ったのと聞いてくださるのが全員 Girls なのでいろいろ考えました。<br>
考えた結果 **「もうちょっと使いやすく」** という方向で進むことにして、見た目をキレイにしてみました。そして、できたのがこちら。

<div class="post-image-center">
  <a href="http://ryoyakawai.github.io/gtuggirls-webaudio/" target="_blank" class="post-image-center">
    <img class="image-bordered" src="{{ site.url }}/images/2014/10/20141016-gtug-girls-16.png" width="80%">
  </a>
</div>

内容は全く同じなんだけどガワをつけたら、よりそれっぽくなりました。機能的には、「メニューを選ぶとサンプルアプリを起動」、右上メニューの緑のボタンは「アプリのリロード」、青の鉛筆ボタンは「虫食いコード表示」、赤目玉ボタンは「完成したコード表示」という形にしました。また、アプリを表示すると左上に github のコードページへのリンクも表示するようにしています。(技術不足のためPrettyPrintでインデントを上手に表現できなかった為。。。)<br>
<br>
そしてWeb Audioの開発はWebサーバが動いていたほうが何かと便利だったりします。例えば音声ファイルの再生だったり、getUserMedia()でのマイク・カメラの利用には必須だったりしますが、誰しもが短時間で作れるわけではないので Chrome Dev Editor が俄然便利です。Chroem Apps（つまりChrome上で動作）であって、Webサーバもお手軽に立てられて、 github からもボタン1つで clone することが可能です。ハンズオンが終わってから <a href="//twitter.com/toyoshim">@toyoshim</a> さんに教えてもらって気がつきました。。。次に機会があるときは最初から Chrome Dev Editor を使うことにします。<br>
<br>
ということで結論、手っ取り早くWeb Audioを試したい方は Chrome をインストールして <a href="https://chrome.google.com/webstore/detail/chrome-dev-editor-develop/pnoffddplpippgcfjdhbmhkofpnaalpg" target="_blank">Chrome Dev Editor</a> を Chromeにインストール。そして <a href="https://github.com/ryoyakawai/gtuggirls-webaudio" target="_blank">https://github.com/ryoyakawai/gtuggirls-webaudio.git</a> を Clone しましょう！
