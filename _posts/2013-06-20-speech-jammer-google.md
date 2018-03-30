---
layout: post
title: SpeechJammer+つくった＆展示してきたよ!
description: ""
modified: 2013-07-20
tags: [Event, Web Audio API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

7月19日に GoogleJapan で行われた <a href="http://googledevjp.blogspot.jp/2013/07/demo-party-2013.html" target="_blank">DemoParty</a> に<a href="http://dl.dropboxusercontent.com/u/695740/speechJammerPlus/index.html" target="_blank">SpeechJammer+</a>というアプリケーションを展示させていただきました。以前 <a href="http://dl.dropboxusercontent.com/u/695740/IgNobelPrize/2012/index.html" target="_blank">SpeechJammer</a> というのを作って公開していたのですが、何かが起こったみたいでアクセスがとても伸びていまして、ならばもう少し楽しくできないか？？という発想で続編的なのをりました。


まず、SpeechJammer の説明です。2012年のイグノーベル賞アコースティック部門を受賞した<a href="https://sites.google.com/site/qurihara/top-english/speechjammer" target="_blank">アルゴリズム、および物理ガジェット</a>です。（注：アルゴリズムの発明者は産総研にいらっしゃる栗原一貴氏で私ではありません。）アルゴリズムは「集めた音を0.2秒後に再生をする」という極めてシンプルなものですが「集める音」を自分の会話の声として「0.2秒前の自分の会話が再生される」のを実際に体験すると、違和感を感じ会話をストップしたくなってしまいます。名前の由来もここにあると思います。ユースケースとしては「ちょっとおしゃべりな人に静かにしていただきたいときに使う」という感じになります。
ただ、「0.2秒前の自分の会話が再生される」というのに違和感はあるのですが、何か楽しさもあるんです、不思議と。そこで「もっと面白くできないかな〜？？しかもブラウザ上で。」と考えたところ「0.2秒前の会話にサウンドエフェクトをかけて再生してまえ！あと0.2秒前の映像も流してしまえ！」と思いつき実装をしてみました。個人的には理由はわかりませんが、暇つぶしに遊んでしまう、おもちゃ的な楽しさがあると感じています。


技術的には、マイク入力・カメラの扱いで getUserMedia() (WebRTC)、サウンドエフェクトには WebAudioAPI、あと細かいところですがノブには polymer/WebComponents (<a href="//twitter.com/agektmr" target="_blank">@agektmr</a>氏作)を使っています。（Web MIDI API も使いたかったのですがアイデア不足の為、今回は組み込めませんでした。。。orz）SpeechJammer+ のソースコードは github で公開しているので、気になる方はこちらからどうぞ！！  <br>
<a href="https://github.com/ryoyakawai/speechJammerPlus/" target="_blank">ソースコード></a><br>
そして、LiveDemoはこちらになります  <a href="http://dl.dropboxusercontent.com/u/695740/speechJammerPlus/index.html" target="_blank">LiveDemo</a><br>
ライブデモは <a href="https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&ved=0CC0QFjAA&url=http%3A%2F%2Fwww.google.co.jp%2Fintl%2Fja%2Fchrome%2Fbrowser&ei=JqXqUZS7MZDrlAXt6oCwBQ&usg=AFQjCNEU0qcH2Zlo56thVf_Ubs61GwnDiA&sig2=BDaCLs5AcKr3V1BuybjH2A" target="_blank">Google Chrome（ブラウザ）</a>での動作を、またハウリングを起こしやすいので、ヘッドホンをしてお試しください。映像のプレイバックは力技でやっていまして、遅延が時間とともに酷くなりますので、おまけ程度ということでお願いします。。。


<div class="post-image-center">
  <img src="{{ site.url }}/images/2013/07/20130720-speechJammer.png" width="60%">
</div>

DemoPartyについては、MAKERな方々が集まってワィワィやる的なイベントでした。
すっごく楽しかったです。そして<a href="http://uda.la/" target="_blank">ウダー</a>の宇田さん、<a href="http://www.maywadenki.com/otamatone/" target="_blank">オタマトーン</a>で明和電機さんもいらっしゃってデモ兼プレゼンテーションをされていました。
私もプレゼンテーションをさせていただきましたが、デモで音声を出せなくちょっと残念でした＆準備不足ですみませんでした、、、orz<br>
こんな感じでプレゼンテーション(<a href="//twitter.com/tyone" target="_blank">@tyone</a>さん、写真ありがとうございました！！)▼


<div class="post-image-center">
  <img src="{{ site.url }}/images/2013/07/20130720-speechJammer-02.png" width="30%">
</div>


MAKER Conferenceには1度だけ参加経験はあるものの、展示する側としてMAKER系のイベントに参加するのは初めてでしたので、かなりドキドキでした。終わってみると展示する側として参加して、また違った楽しみ方があることを知りました。ホント、楽しかったです。こんな素敵な場を提供くださったGoogleの皆様本当にありがとうございました！！

