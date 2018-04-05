---
layout: post
title: Web Music ハッカソン &#35;2 やりました。
description: ""
modified: 2014-01-20
tags: [Web MIDI API, Web Music Hackathon, Web Music, Web Audio]
---
<div> </div>
<a href="/2014/01/webmusic-hachathon-en.html" target="_blank">English Version</a><br>
<br>

<a href="/2013/10/webmusic-hackathon.html" target="_blank">10月19日</a>に引き続き Web Music ハッカソン #2 を Google さんと <a href="https://groups.google.com/forum/#!forum/web-music-developers-jp" target="_blank">Web Music Developers JP</a>の共催、<a href="http://amei.or.jp/" trget="_blank">AMEI（音楽電子事業協会）</a> の後援で開催しました。


今回の参加者は30+名で、合計20を超える作品が生まれ、最後にプレゼンタイムをもちました。<a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=22m57s" target="_blank">ヒカリモノ</a>、<a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=2h15m7s" target="_blank">アコースティック楽器（缶）</a>、<a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=1h3m34s" target="_blank">Twitter連携</a>、<a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=47m23s" target="_blank">Google Docsスプレッドシート</a> と幅の広い作品で、ここからWeb Audio API（信号処理を行う音楽系のAPI）、Web MIDI API（MIDI機器と接続しコントロールするAPI）のポテンシャルの高さを再認識できる会になったと思います。


ここでは当日参加してくださった初心者（Web Audio API、Web MIDI API初心者）の方がどのような作品を作ったかを少し紹介します。その他の作品は Google の<a href="http://google.com/+agektmr" target="_blank">えーじさん</a>の<a href="http://blog.agektmr.com/2014/01/web-music-2.html" target="_blank">ブログ</a>にお任せします〜。<br>
初心者の皆様には<a href="https://github.com/ryoyakawai/WebMusicDevelopersJP/tree/master/codeLabs" target="_blank">チュートリアル</a>を実施いただくことで慣れてもらいました。チュートリアルは、虫食いになっているソースコードに、アプリケーションを作るのに重要な method を入力していってもらうようになっています。2時間で終えられた方から、挫折された方がいるみたいですね。それでは早速作品を見てみましょう！（画像はYouTubeに開始時間指定でリンクしています）<br>
<br>
けんこふさんのドローバーオルガンです。音源部を実装されて、鍵盤部分は webaudio-controls を使って実装されたとのことです。 
<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-01.png" start="5469" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>
<br>
<br>
つづいてみでぃゃっぴーの声を作って音声の再生＋作動モーションセンサで動きを検知してMIDIで音声の再生をする作品です。ゆるい声でなかなかおもしろかったですww
<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-02.png" start="6364" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

こういった作品をチュートリアルから初めて、数時間で完成されていますので、使うハードルはそこまで高くないということがお分かりになると思いますので、気になる方はぜひ挑戦してみてください！<br>
<br>
<br>
この先は初心者からカテゴリを変えます。
まずはWebブラウザの枠を超えた「ハードウェアなやつ」です。

<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-03.png" start="7830" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>
MIDIメッセージを赤外線信号に変えてハードウェアを制御するアプリとパルス信号を作成してサーボモータを直接制御するアプリです。<br>
<br>
<br>
次は今回から登場したのがゆるキャラ「みでぃゃっぴー」です。<a href="//twitter.com/g200kg" target="_blank">g200kg</a> さんがデザインされた **W3C非公認のWeb MIDI API のゆるキャラ**です。そのアプリケーションがこちら。

<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-04.png" start="8513" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

マスコットも3Dプリンタで作成されています。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/01/20140120-midiapi.jpg" width="70%">
</div>

ステッカーはAMEIで作らせていただき、当日参加者の皆様にお配りをしました。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/01/20140120-midiapi_sticker.jpg " width="70%">
</div>

というところで、何が起こるかわからないのがハッカソンだと思いますが、Web Music ハッカソンも第1回目からいろいろなことが起こり、そして第2回目にはWeb MIDI APIのゆるキャラが出てきました。もちろん、アプリケーションのアイデアも楽しく、ハッキングもプレゼンタイムも楽しんでいただけたと思っています。
<br>
懇親会では、いろいろなアイデアを頂いております。今後も継続的に開催をしていきたいと思っていますので、ぜひ今後の参考にさせてください。
<br>
次回以降のハッカソンについてです。日程は決めていませんが、行う予定でおりますので初心者の方も躊躇せずぜひご参加いただければと考えております。
お知らせは、<a href="https://groups.google.com/forum/#!forum/web-music-developers-jp" target="_blank">Web Music Developers JP@Google Groups</a>、<a href="https://plus.google.com/communities/111657869969887793180" target="_blank">Web Music Developers JP@Google+ Community</a> などで行いますので気になる方はご参加ください！

それでは、また次回お会いしましょう！！<br>
<br>
最後に、今回チューターとして参加してくださった方々の紹介です。<br>
<br>

- <a href="//twitter.com/aike1000">@aike1000</a> こと藍 圭介さん ： Web Audio API、 Web MIDI API
- <a href="//twitter.com/g200kg">@g200kg</a> こと新谷垣谷さん： Web Audio API、 Web MIDI API
- <a href="//twitter.com/komasshu">@komasshu</a> こと小松健作さん：WebRTC
- <a href="//twitter.com/Tukimikage">@Tukimikage</a> こと仲裕介さん：WebRTC

ありがとうございました！！<br>
<br>
（次回は「みでぃゃっぴー」の着ぐるみが会場にいるかもですよ〜！！（予定は未定ですがw））<br>
<br>
P.S. Web Music ハッカソン #2の模様は、<a href="http://www.kohgakusha.co.jp/io/" target="_blank">工学社 月刊 I/O</a> 2014年3月号（2014/2/18発売予定）に掲載予定です。
