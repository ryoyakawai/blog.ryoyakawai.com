---
layout: post
title: Web Music ハッカソン &#35;5 @東京
description: ""
modified: 2016-08-04
tags: [Web MIDI API, Web Music Hackathon, Web Music, Web Audio]
image:
#  feature: 2016/08/20160804-webmusic-hackathon-01.png
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

<a href="/2016/08/04/webmusic-hackathon-en.html">English Version</a><br>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-01.png" width="100%">
</div>

Webブラウザは音楽アプリケーションのプラットフォームの1つになっています。それらを支えるのが Web Audio API、Web MIDI API です。

- **Web Audio API**: 信号処理を可能にしていて、例えば楽器を作る、音楽ファイルを加工することを可能にしています。
- **Web MIDI API**: ブラウザと外部MIDI機器との接続を可能にしています。

Web Audio APIは現在ほぼ全てのブラウザでサポートされていて、Web MIDI API はGoogle Chromeのみでサポートされています。（Firefoxでも実装は完了していて、現在コードレビュー中です。 2016/8/3 現在）


<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-02.jpg" width="45%">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-03.jpg" width="45%" style="margin-left:5px">
</div>


今までに4回行った Web Music ハッカソン ではテーマは設けず「音楽アプリケーションを思うがままにハックする」 ということで行ってきましtが、今回は現場をハックするという大きな目標の元で「VJ/DJ」をそのテーマとしました。<br>
このテーマのもとで5つのアプリケーションが優秀賞に選ばれました。<br>


## [1位] “Cloud Synthesizer” developed by Tomasz 
アプリケーションを表示しているブラウザがシンセサイザの一部になる、というアプリケーションです。実際の演奏はマスタとなるアプリケーションに対してMIDIデバイスからメッセージを送り音を出す、という形です。今回のデモは4つのグループに分割し、それぞれが別のパートの音を担当して音楽を奏でていました。メッセージのやりとりにはFirebaseが使われています。
このシステムを使えばライブ会場にスピーカが不要になるかもしれない、と感じました。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-04.png" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-01.png" start="5731" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

## [2位] “nanoBlocks” developed by nas
マルチタッチディスプレイを用いた Wavetable シンセサイザです。
それぞれの指でFilte、Pitchまた音源を操作して、音を作り出します。たいていの楽器は指で異なるPitchの音を作り出していますが、このアプリケーションは指で音源の変化、ピッチの変化、各種Filterを変化を現代の主流であるマルチタッチが可能なタッチディスプレイを上手に使うことで新しい楽器が実現されています。
DJという視点から見ると、楽器では出せない音を簡単に手の操作だけで追加でき、新たなプレイ・サウンドの創造を可能にするのでは？という感想を持ちました。<br>
[<a href="https://stereomatics.github.io/nanomorphs/" target="_blank">Live Demo</a>]

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-05.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-02.png" start="5517" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## [3位] “トレンド Sampler” developed by Takashi Mizuhiki
基本的にはスッテプシーケンサなんですが、音の要素がGoogleトレンドから引っ張ってきたトレンドワードをMacのSayコマンドで喋らせたもの、という面白いアプリ。MIDIクロックにも対応するのでDAWとの同期もできる。何より流石なのが、話しだしの微調整までできるところ。
DJプレイにトレンドワードを気軽に入れることができそうです。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-06.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-03.png" start="3743" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## [4位] “Music Tweet” developed by Tomohiro IKEDA
MMLパーサなのですが、TwitterでツイートされたMMLを演奏するというChrome Extensionです。新しくツイートされたMMLだけでなく、過去にツイートされたのも選択することで再生可能です。さらに、パースしたMMLをWebSocket経由でも送ることがでいるので、そのメッセージに対応したWeb Audio製のシンセを鳴らすことが可能です。<br>
気軽に持ち運べる＆メモれるシーケンサということでヤマハのQYシリーズの現代版？という印象もあります。<br>
[<a href="https://github.com/Korilakkuma/Music-Tweet" target="_blank">GitHub</a>]

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-07.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-04.png" start="5257" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## [5位] “Vote” developed by mohayonao
このアプリを動作させているブラウザがコントローラとなり1つの音楽を奏でるというアプリケーションです。観客とコラボするといったライブでの演出が可能だったり、またライブ中に観客の盛り上がり具合を見ることもできそうですね。ちなみに、メッセージのやりとりはFirebaseを使ってます。<br>
[<a href="https://wmh5-vote.firebaseapp.com/" target="_blank">LiveDemo</a>] [<a href="https://github.com/mohayonao/wmh5-vote" target="_blank">GitHub</a>] [<a href="https://www.youtube.com/watch?v=C3lGJdGYD4E" target="_blank">PerformanceVideo</a>]

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-08.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-05.png" start="2400" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## [Roland賞]“フレーズでコミュニケーション” developed by Team chaco
コラボレーションして音楽を作るステップシーケンサ。複数人でフレーズを作ったり、修正したりが可能です。色合いだったり、和音だったりを考えられているらしく、どうやっても不協和音にはならないそうです。 <br>
[<a href="https://github.com/armorik83/wmh5-team-chaco" target="_blank">GitHub</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-09.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-06.png" start="3031" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## [Firebase賞] “リアルタイム自動アルペジオパターン生成機 for Drum” developed by Team Rotterdam
自動的にドラムパターンを生成し、更にMIDIコントローラでそれらのFilterだったりをコントロールするアプリ。楽器として、とてもストレートなアプリ。MIDIクロックを出すので、他のDAW等と同期した演奏をすることも可能です。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-10.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-07.png" start="3317" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>



## ”mi:muz:tuchの設定ツール” developed by D.F.Mac. @TripArts Music
mi:muz:touchというオリジナルのUSB-MIDI基板の設定をブラウザで変更するツール。mi:muz:touchは野菜等をトリガーにして、MIDIでメッセージを生成する基板で、第2回のWeb Music ハッカソンでハックした作品が元になっています。 <a href="https://youtu.be/z_TGofN7wv8?t=8m16s" target="_blank">詳しくはこちら</a> をご覧ください。 <br>[<a href="http://mz4u.net/tuch/" target="_blank">LiveDemo</a>] 
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-11.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-08.png" start="953" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## “ライトをMIDIコントローラから制御する” developed by Kazuyuki Eguchi
IoT機器をMIDIコントローラから制御するアプリケーションです。インターネット経由で操作できる基板に対して、MIDIコントローラで操作された通りブラウザからメッセージを送り、その先につながっている電球等を制御します。デモではパトランプ、ELワイヤー、テープLEDが制御されていました。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-12.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-09.png" start="1375" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

## “ImproVJ” developed by team ImproVJ
様々なインプットから音楽を作るアプリケーションです。拍手音からビートを検出したり、ぼかして荒くした画像をステップシーケンサに見立て、その情報から演奏することも可能です。DJの現場ではこのシステムにつながったカメラを観客に向け自動で音楽を生成させる、という使い方がありそうです。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-20.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-10.png" start="1696" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

## “WONDER.NET” developed by kirinsan.org
カメラからのモーションから画像にエフェクトを適応するアプリケーションです。DJに手軽にVJを追加することのできるアプリケーションかな、と感じました。エフェクトは画像だけでなく、再生している音楽にも適応することができるので、実はVJもDJも一度にすることが可能です。<br>
[<a href="https://kirinsan-org.github.io/wmh2016" target="_blank">LiveDemo</a>] [<a hrefr="https://github.com/kirinsan-org/wmh2016" target="_blank">GitHub</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-21.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-11.png" start="2132" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

## “dance live” developed by nakaG
観客が動かしたモバイルデバイスのモーションセンサーのデータを使って音にエフェクトをかける要素を抽出して、DJ自身がどのエフェクトを使うかを選定する、というアプリケーションです。観客が間接的にライブに参画できる、新しいコンセプトのアプリケーションだと思いました。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-22.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-12.png" start="2769" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

## “SPKR” developed by K3
ライブをライブハウス等ではなくて、スピーカのないところでもできるように観客のスマホのスピーカを使ってしまう、というコンセプトのアプリケーションでした。参考にしたかったアプリを動作させるのに手間取ってデモは完成していませんでしたが、このツールがあるとどこでもライブパフォーマンスができそうですね。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-23.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-13.png" start="4300" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## “Mobile Music Jammer” developed by Team Nolick
接続された機器(PC, mobile phone)を使ってセッションをしよう、というコンセプトです。デモではOpenFrameworksで作られた映像をモバイル端末から操作していました。観客もライブの演奏に加わることができるところが良いと感じました。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-24.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-14.png" start="4597" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## “DJHUB” developed by team DJHUB
DJが操作した情報を時間管理の概念のある例えばStandar MIDI Fileにして、GitHubみたいなところで公開、または販売しようというコンセプトのアプリケーションです。時間内には完成はしませんでしたが、DJのプレイを音として残すのではなくて、操作の情報を残す、というユニークなアプリケーションでいした。著作権が適応される音を排除するところがキーだと感じます。
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-25.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-15.png" start="4597" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


<br><br>
これらの15のアプリケーションが今回のハッカソンでハックされました。<br>
<br>
しかし、Web Musicの世界にはラスボスが存在します。ラスボス達は審査対象にはなっておらず、また当日はチューター的な存在で参加してくださっていますが、それでもアプリをハックするというラスボスっぷりを発揮してくださっていますので、そちらのアプリもご紹介します。


## [ラスボス] “3D Sequencer” developed by @aike
3DのUIを持つステップシーケンサです。音楽を奏でているだけの情報を3Dで見せるとこんなにキレイなんだ、と感じました。 ハッカソン後に公開された <a href="https://www.youtube.com/watch?v=M5l1q8jTTBA" targert="_blank">模範映像</a >がこちら です。 Super Cool!!
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-26.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-16.png" start="56" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## [ラスボス] “LiveBeats” developed by @g200kg
LiveBeatsはPC/Macを楽器にしてしまう、というコンセプトから生まれたそうです。今回はWeb Speech Synthesis APIを使って音声を合成し、それを演奏に組み込んでいました。百聞は意見に敷かずという類のアプリですので映像を御覧ください。 <br>
[<a href="http://g200kg.github.io/LiveBeats/" target="_blank">LiveDemo</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-27.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-17.png" start="285" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


## [ラスボス] “Growl Bass” developed by @toyoshim 
2つのアプリケーションを紹介してくださいました。1つは映像の中のパーティクルを音にするアプリケーション [<a href="https://preview.c9users.io/toyoshim/share/MIDIOutputAudioNode/test/manual/edmcon.html" target="_blank">LiveDemo</a>]、 もう1つはグロール音を簡単に作るためのアプリケーションです。MIDIで出力することもできるので外部音源を鳴らすことも可能です。  [<a href="http://yuri.twintail.org/experiments/tmalib/example/waypoints_osc.html" target="_blank">LiveDemo</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-28.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" size="80%" imgsrc="{{ site.url }}/images/2016/08/201608-18.png" start="726" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>
<br>

これらが今回のハッカソンの全てとなります。<br>
<br>
Web Music ハッカソンも5回目となりましたが、今回はハックされた作品のレベルの高さを感じました。恐らくこの要因は少なくとも2つあると思います。まず1つは日々、Web Audio/MIDI APIの認知度が上がり、「とにかくAPIを使う」ではなくて「APIを使ってどんなことをしようか」というAPIを使うからアプリケーションにAPIを参加させる方向に向かっていると思います。もう1点は事前ミートアップです。今回、事前Meetupをしようか非常に迷いました。なぜならいつもは行っていないので、参加者の皆様に集まっていただけるかを懸念しておりました。が、結果からすると、開催してとてもよかったです。ハッカソン当日の全てのチームが事前ミートアップでできたわけではありませんし、全てのハッカソン参加者が事前ミートアップに参加できた訳でもありません。が、事前に顔を合わせることで場全体のIceBreakingされた状態から始まったので、ハッカソン当日の短い時間を非常に有効に使っていただけたのだと思っています。実際に参加者から「事前ミートアップのお陰でハック開始直後から始めることができた」と感想も頂いています。<br>
事前ミートアップから、ハッカソンで質の高い成果物を作るためには、ハック開始前にIceBreakingは終わらせておくことがポイントかな、と改めて学ぶことができました。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-29.jpg" width="45%">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-30.jpg" width="45%" style="margin-left:5px">
</div>
<div class="post-image-center">
事前ミートアップの様子
</div>

事前ミートアップ、ハッカソンを通して、ハックしてくださった参加者の皆様、本当にお疲れ様でした。また、ハッカソンのサポートをしてくださった以下の皆様に心より感謝いたします。

- 事前ミートアップ：関さん（HackCamp）、レンツさん（LIG）
- ハッカソン：Googleさんよりランチ＆場所のご提供、AMEIより楽器の提供 
- ハッカソンの審査員：田所 淳さん、新谷垣内 達也さん、藍 圭介さん、渡邊 正和さん
- After Party：Red Bullさんより場所のご提供、レンツさん＆エディさんのディレクション

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-attendees.jpg" width="90%">
</div>
Web Music ハッカソンはまたいつか開催したいと思っていますので、その時にはまたお会いしましょう！！

