---
layout: post
title: Web Music ハッカソン &#35;3 やりました!
description: ""
modified: 2014-09-16
tags: [Web MIDI API, Web Music Hackathon, Web Music, Web Audio]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

2014年9月13日に Web Music ハッカソン#3を行いました。今回もGoogle さんと <a href="https://groups.google.com/forum/#!forum/web-music-developers-jp" target="_blank">Web Music Developers JP</a>の共催、<a href="http://amei.or.jp/" target="_blank">AMEI（音楽電子事業協会）</a> さんの後援です。


当日の参加人数は40+名で、合計26作品+1曲がハックされました。
それらのハック中の様子も音楽系ハックならでわで、絶えずあちこちから「ビー」とか「ブー」とか、時にはポケミクの声がしたり、また会場にはAMEIさんから提供していただいた楽器もたくさんありハックに利用したり、また休憩中に楽器単体で、または別の機器と接続をして楽しみながらアイデアを模索したり、と音楽系ハッカソンならではの出来事があちこちで発生していて非常に活気のある奇想天外なハック会場になっていました。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/09/20140916-hackathon-01.jpg" width="80%">
</div>

また11月16日〜22日に慶応義塾大学SFC研究所主催で<a href="http://orf.sfc.keio.ac.jp/teaser/" target="_blank">ORF（Open Research Forum）</a>にて「Webと音楽」をテーマに<a href="http://www.w3.org/Consortium/Hosts/Keio/" target="_blank">W3C（World Wide Web Consortium）</a>/KEIOが1セッションを行う中で、今回のハッカソンの様子、また優秀作品の紹介を予定している関係で、ぜひ実物も見たいとのことでプレゼンタイムにはW3C/KEIOより村井 純先生（写真左）、中村 修先生（写真右）をお招きしての開催となりました。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/09/20140916-hackathon-02.jpg" width="90%">
</div>


そんなスゴイ状態の会場でハックされ、発表された作品は大雑把に以下の5つに分類のように思います。<br>

- MIDIデバイスを含む外部デバイス（野菜も含みます！）と接続をした作品、
- Web ServiceのAPIや、コマンドを使う作品
- 自動またはユーザ参加型作曲を実現した作品、
- VJ、映像系の作品
- ゲーム

どの作品も独自のアイデアが光り、そして何よりWebブラウザでの新しい音楽、アートの楽しみ方を巧みにWebブラウザ上に表現していると感じる作品ばかりでした。ここではその中から優秀作品5つをご紹介します。

最優秀作品、チームHimakanによるFaceTrackingEffectorです。<a href="https://himakan.github.io/facetracking-effector/" target="_blank">[App]</a> <a href="https://github.com/himakan/facetracking-effector" target="_blank">[Source]</a>
Webカメラからの映像から顔をトラッキングして画面に表示、さらに再生している音声のフィルタをかけてるというVJ作品になります。プレゼン内では紹介されていませんでしたが、トラッキング場所が実は手元のKaoss Padのパッド部分に反映されています。

<div>
  <youtube-play contentid="z_TGofN7wv8" size="80%" imgsrc="{{ site.url }}/images/2014/09/20140916-webmusic-yt-01.png" start="4405" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

<br>
2つ目は @okame_okame さんのエレキ木魚です。<a href="https://github.com/okame/MOKUGYO2" target="_blank">[Source]</a><br>
木魚側にArduinoを使ったTriggerからの信号を、PC側にはChromeAppsなアプリで<a href="https://developer.chrome.com/apps/app_serial" target="_blank">Serial DeviceのAPI</a>を使って受取り、Web Audio APIで作った音を鳴らす、という仕組みの作品です。さらに、木魚にはセンサが入っていてその傾きでも音に変化が加わったりします。

<div>
  <youtube-play contentid="z_TGofN7wv8" size="80%" imgsrc="{{ site.url }}/images/2014/09/20140916-webmusic-yt-02.png" start="2290" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

<br>
3つ目は kirinsan.org さんのオタマトーンの音をブラウザで拾いPitchを検出、それをMIDIメッセージに変換してMIDI音源を鳴らすという作品です。<a href="http://kirinsan-org.github.io/OtamaMIDI/" target="_blank">[App]</a> <a href="https://github.com/kirinsan-org/OtamaMIDI/tree/gh-pages" target="_blank">[Source]</a> 
MIDI音源の音色は手元のスマホから変更が可能だったりユーザビリティに関してもコダワリが詰まっていました。
<div>
  <youtube-play contentid="z_TGofN7wv8" size="80%" imgsrc="{{ site.url }}/images/2014/09/20140916-webmusic-yt-03.png" start="27:56" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

<br>
4つ目は コボリ マサユキさんにより電車でGo!です。
ゲーム機用の電車でGo!のコントローラをMIDIコントローラに改造をして、プラレールを動かし、それに合わせてブラウザ側では発車音等を鳴らすという作品です。
<div>
  <youtube-play contentid="z_TGofN7wv8" size="80%" imgsrc="{{ site.url }}/images/2014/09/20140916-webmusic-yt-04.png" start="674" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

<br>
5つ目は @tadfmac さんによる野菜を触ることで映像が動くという作品です。
ナマ物（野菜、果物）をトリガーにしてArduinoでMIDIメッセージに変換をしてブラウザ側ではWeb MIDI APIを使って映像を動かす、という作品です。さっそく<a href="http://qiita.com/tadfmac/items/f2172cdacbdd5600256e" target="_blanl">電子回路側の解説</a>を公開してくださっていますので、気になる方は御覧ください。

<div>
  <youtube-play contentid="z_TGofN7wv8" size="80%" imgsrc="{{ site.url }}/images/2014/09/20140916-webmusic-yt-05.png" start="420" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

<br>
そして+1曲はこちらです。
音源にポケミクを使ったWebMusicの歌！！
<div>
  <youtube-play contentid="MYnUvkDKT34" size="80%" imgsrc="{{ site.url }}/images/2014/09/20140916-webmusic-yt-06.png" start="420" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


<div class="post-image-center">
作詞、作、編曲：meguru (JSPA Web MIDI研究委員会）
</div>
<br>
最後に技術的な部分のお知らせです。Chromeに実装されているWeb MIDI APIが更新されます。その説明をGoogleの <a href="//twitter.com/toyoshim">@toyoshim</a> さんにハッカソンの開始時にしていただきました。そのスライドをシェアさせていただきます。スライドの中に当面パッチとして使えるソースコードの例もありますのでぜひ参考にしてください。
<div class="post-image-center">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/tDgu7G70ux97l6" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
</div>
<div class="post-image-center">
<div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/toyoshim/web-midi-api-update" title="Web MIDI API update" target="_blank">Web MIDI API update</a> </strong> from <strong><a href="https://www.slideshare.net/toyoshim" target="_blank">Takashi Toyoshima</a></strong> </div>
</div>
<br>
ご参加いただきました皆様、本当にありがとうございました。これからもWebとブラウザと音楽・アートとワタシの世界「Web Music」を盛り上げて行きましょう！！<br>
<br>
最後に参加者全員で記念撮影！お疲れ様でしたっ！<br>
次回に乞うご期待！！<br>

<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/09/20140916-hackathon-03.jpg" width="80%">
</div>
