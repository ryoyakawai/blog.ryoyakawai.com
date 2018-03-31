---
layout: post
title: Web Music ハッカソン &#35;4 @京都 with GDG京都
description: ""
modified: 2015-07-27
tags: [Web MIDI API, Web Music Hackathon, Web Music, Web Audio]
---
<div> </div>
<a href="/2015/07/webmusic-hackathon-kyoto-en.html">English Version</a><br>
<br>


2015年7月25日（土）にWeb Music ハッカソン #4を京都にて行いました。今回は、GDG（Google Developers Group）京都さんと <a href="https://groups.google.com/forum/#!forum/web-music-developers-jp" target="_blank">Web Music Developers JP</a> との共催、また <a href="http://amei.or.jp/" target="_blanl">AMEI（音楽電子事業協会）</a> さんの後援での開催となりました。また、<a href="https://www.krp.co.jp/" target="_blank">KRP（京都リサーチパーク）</a>さんに特別にお部屋をご用意いただくことで開催できました。ありがとうございます。<br>
<br>

当日の参加者は30名+で、参加者によって10作品、チュータによって3作品がハックされました。京都開催でもやっぱり音楽系のハッカソン、Web Audioで作った音が鳴ったり、AMEIさんより提供していただいた littleBits Synth Kitからのアナログな音、またポケミクから歌ったりと、いつも通りの賑やかなハッキングタイムになりました。

<a href="https://plus.google.com/events/gallery/ccabrg04tjnd49scbutbojq3hv4" target="_blank">当日の写真はこちらです。</a>
<br>
<br>
それでは、時間に沿って順に説明をしていきます。<br>

いつものように最初にチューターのご紹介兼プレゼンタイムです。<br>

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-01.jpg" width="50%">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-02.jpg" width="50%" style="margin-left:10px;">
</div>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-03.png" width="50%">
</div>


<a href="//twitter.com/g200kg" target="_blank">@g200kg</a>さん、<a href="//twitter.com/aike1000" target="_blank">@aike1000</a>さん、<a href="https://www.twitter.com/sascacci" target="_blank">@sascacci</a>さんからデモを動かしながらの説明をしていただきました。
ここで@aike1000さんがiPhoneから何やらスライドを操作してるっぽいな〜、と思っていたらMIDI over Bluetooth LEとWeb MIDI APIを組合せて操作していたとのことで、公開をしてくださいました。 

<div class="post-image-center">
<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">Web Music ハッカソン #4 @京都 おつかれさまでした。今日使ったMIDIでプレゼンめくるリモコンアプリはこれ。現状はWeb MIDI Browserが必須かも。<a href="https://t.co/lafd44wTtO">https://t.co/lafd44wTtO</a><a href="https://twitter.com/hashtag/webmusic?src=hash&amp;ref_src=twsrc%5Etfw">#webmusic</a> <a href="https://twitter.com/hashtag/webmusicjp?src=hash&amp;ref_src=twsrc%5Etfw">#webmusicjp</a></p>&mdash; aike (@aike1000) <a href="https://twitter.com/aike1000/status/624942651343671297?ref_src=twsrc%5Etfw">July 25, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

この後グループ分けを行いました。ハッカソン申込時に参加者の皆様から記入いただいた内容を元に「コミュニケーション」、「ハードウェア連携」、「エミュレーション」、「グラフィックス」、「Web API連携」、「ライブラリ作成」、「初心者」の7つのテーマでグループ分けを行い、そのグループ内で会話をしてハックするアプリケーションを決めハッキングタイムに入っていただきました。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-04.jpg" width="80%">
</div>
<div class="post-image-center">
ハッキング中の様子
</div>

グループ分けの結果、5つのテーマに分類が最終的に残りました。

- エミュレーション（既存のモノをWebAudio化）
- ハードウェア連携
- グラフィックス連携
- コミュニュケーション
- 初心者

そして、5時間以上に及ぶハッキングタイムは終了し、16:30を迎えたところで発表時間になりました。この段階で、実はどのチームからも「もう少し時間が欲しい・・・」という声が聞こえてきていたものの、心を鬼にしてハッキング打切りとさせていただきました。<br>
<br>
ちなみに今回初心者向けにGoogleさんのCodelabのFormatで教材も用意しました。

- <a href="http://webmusicdevelopers.appspot.com/codelabs/webaudio/index.html" target="_blank">Codelab: Web Audio</a>
- <a href="http://webmusicdevelopers.appspot.com/codelabs/x-webmidi/index.html">Codelab: Web MIDI</a>

それでは、発表された作品を1つ1つ紹介していきます。

## エミュレーション

### Reaktorのようなもの
by <a href="https://twitter.com/fukuroder" targt="_blank">@fukuroder</a>

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-fukuroder.jpg" width="90%">
</div>

GUIでモジュールを組合わせることで、音響合成・音響効果をつけることのできるソフトウェアReaktorをWebブラウザ上で実現したものになります。合成をする機能に加えて、作成した環境をURLで共有できる機能が実装されていました。
<br>
<a href="http://fukuroder.sakura.ne.jp/z-1" target="_blank">アプリはこちら</a>


### チューナー
by <a href="//twitter.com/moutend" target="_blank">@moutend</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-tuner.jpg" width="90%">
</div>

ギター用のチューナです。@moutendさんは「既存のハードウェアのチューナーは見づらい」ということで、ブラウザ上に大きな文字と、音でどの音とチューニングをしているかが分かるようにした、というアプリケーションです。ノートの右側の数値は「◯◯セントズレています」という意味だそうです。まだバグもあるとのことでした。


## ハードウェア連携

### ScriptProcessorとiPhoneの加速度センサを用いたシンセ
by Masaki Ono
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-sendor.jpg" width="90%">
</div>
オシレータシンクをScriptProcessorで実装したという作品です。それに加えてiPhoneの加速度センサで得た周期を、音源の周波数を合わせるという機能もついていました。写真はiPhoneを振っています。（速すぎてiPhoneが見えませんが、、、）


### GamePad to MIDI by MK
by Kaki
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-guitar.jpg" width="90%">
</div>
Gamepadの入力（Gamepad APIを利用）をMIDIに変換して、MIDI音源（Roland JD-Xi）を鳴らします。ピッチベンドがダウンしかできないそうです。

### Little Miku
by M.Kosuga
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-littlebits-miku.jpg" width="90%">
</div>
littleBitsからの出力をブラウザで仲介してポケミクと連携するアプリケーションです。littleBitsからの信号をブラウザ受けて500ms毎にカウントして音程決定してそのMIDIメッセージをポケミクに送り演奏します。

### Leap Mothin to Audio
by <a href="//twitter.com/hiroqn" target="_blank">@hiroqn</a>, <a href="//twitter.com/sankichi92" target="_blank">@sankichi92</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-leapmotion.jpg" width="90%">
</div>
クロスプラットフォームデスクトップアプリケーションエンジンのElectronを使った楽器です。UIはありませんが、Leapmotionからの入力を使いWeb Audioでつくたシンセを鳴らします。ジェスチャでFilterが変わるというとこも実装がされていていました。

### Scratch
by kaisei, yokmama
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-scratch.jpg" width="90%">
</div>
ゾンビを倒していくというゲームです。MIDIデバイスからの入力をWebSocketを使ってScratch側に渡してゾンビのパターン・数が変わるという仕組みになっています。Web Music ハッカソン史上初の親子での参加です。お子さんがゲームで登場する絵を描かれました。


## グラフィックス連携

### ドット絵シーケンサ
by <a href="//twitter.com/ussy9" target="_blank">@ussy9</a>、<a href="//twitter.com/_likr" target="_blank">@_likr</a>、<a href="https://github.com/pastelInc" target="_blank">pastelInc</a>、<a href="//twitter.com/armorik83" target="_blank">@armorik83</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-graphic.jpg" width="90%">
</div>
ドットを使ったシーケンサを使って、多人数でリアルタイムに入力を反映させて音楽を作り、それをそのシーケンス情報を映像（画面左上の球体）に表現するというアプリケーションです。（写真は発表中にリアルタイムに動かず四苦八苦しているところ。発表の中継で使っていたアクセスポイントとデモの時に使ったアクセスポイントが同じだった為かもしれません、、、すみませんでした）<br>
単純にドットで入力したシーケンスを演奏するだけでなく、演奏にはモードがあり自動で短調、長調、ブルース等にスケールを変えることができる。技術的にはWeb MIDIをはじめ、AngularJS、Firebase、SVG、WebGLが使われていた。<br>
ハッカソン終了後にうらばなしのスライドのを公開してくださいました。<br>
<br>
<div class="post-image-center">
<script async class="speakerdeck-embed" data-id="c396c1fd40214eaca383aad6716a3bb5" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
</div>

## コミュニケーション

### Distributed Sequencer
by <a href="https://twitter.com/mohayonao" target="_blank">@mohayonao</a>, <a href="https://twitter.com/esperia09" target="_blank">@esperia09</a>, <a href="https://twitter.com/isocoda" target="_blank">@isocoda</a>, <a href="https://twitter.com/yasuraok" target="_blank">@yasuraok</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-ditributed-sequencer.jpg" width="90%">
</div>
1台のサーバ複数台の音が出るクラアンとを接続されていて、サーバからのメッセージによってクライアントが鳴る、というアプリケーションです。発表の中継で使っていたアクセスポイントとデモの時に使ったアクセスポイントが同じだった為か複数台を接続してのデモが出きずですみませんでした。<br>
ハッカソン終了後に詳細な内容のブログを書いてくださいました。<br>

<div class="post-image-center">
<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">はてなブログに投稿しました <a href="https://twitter.com/hashtag/%E3%81%AF%E3%81%A6%E3%81%AA%E3%83%96%E3%83%AD%E3%82%B0?src=hash&amp;ref_src=twsrc%5Etfw">#はてなブログ</a><br>Web Music ハッカソン で Tシャツ をもらいました - 音の鳴るブログ<a href="http://t.co/ZWlwJ6rJ0N">http://t.co/ZWlwJ6rJ0N</a> <a href="http://t.co/JSEpigNdx1">pic.twitter.com/JSEpigNdx1</a></p>&mdash; モハヨナオ (@mohayonao) <a href="https://twitter.com/mohayonao/status/625486262770601984?ref_src=twsrc%5Etfw">July 27, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>


## 初心者

### はじめてのWeb MIDI API
by <a href="//twitter.com/kubotaku1119" target="_blank">@kubotaku1119</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-evy1.jpg" width="90%">
</div>
初心者でもこんなに簡単にできますよ、というところを発表してくれました。


## チューター

### Foot Drum
by <a href="//twitter.com/sascacci" target="_blank">@sascacci</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-foot-drum.jpg" width="90%">
</div>
KORG CLIPHIT（クリップ型のトリガーをつけた物が打楽器になってしまう楽器）のトリガーとRoland TM-2（ハイブリッドドラム向け音源）を使ったアプリケーションです。足にトリガーを取付け、それによって音を出し、さらにブラウザ側に映像を表示することができます。「メーカとしては他社製品と混同して使う場合は自己責任でお願いします」との一言で会場からは笑いが起こりました。


### 演奏するリズムマシン
by <a href="//twitter.com/aike1000" target="_blank">@aike1000</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-rhythm-machine.jpg" width="90%">
</div>
直線ではなく、円周上に音源を配置するリズムマシンです。波形も円周上に表示されます。直線のリズムのループを直感的に表したリズムマシンです。

### LiveBeats MIDI Plugin
by <a href="//twitter.com/g200kg" target="_blank">@g200kg</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-live-beats.jpg" width="90%">
</div>
コマンドで音楽を創っていくLiveBeatsにMIDI入力を追加して、MIDIデバイスをギターのように構えて演奏していまいます。 <br>
<br>
全ての発表終了後に「アイデア」、「技術」、「完成度」の基準でチューター並びにスタッフで採点を行い以下の3チームを表彰させていただきました。どの作品も技術的にも、完成度的にもとても高く甲乙つけがたい状況で大変悩みましたが、以下の3つを表彰させていただきました。 <br>

- **Scratch** by kaisei, yokmama：親子での絵とプログラムのコラボレーションとお子さんが挑戦されていた姿を評価させていただきました。
- **ドット絵シーケンサ** by @ussy9、@_likr、pastelInc、@armorik83：たくさんの技術を取り入れながらも、多人数でのリアルタイム入力シーケンサ、スケール自動変換機能が実装されていて、3つの基準全てを高く評価させていただきました。
- **Distributed Sequencer** by @mohayonao, @esperia09, @isocoda, @yasuraok：「アイデア」が素晴らしく、また「技術」、「完成度」もとても高く評価させていただきました。

## おわりに
今回で4回目を迎えてWeb Music ハッカソンでしたが、回を重ねる毎にレベルの上がり本当に驚いています。また次回も開催できたらいいなと思っておりますので、その時にまたお会いできることを楽しみにしております！


## 謝辞
今回は関西で初めての開催ということで予想ができない部分が多々あったのに加え、台風の接近も重なって当日まで本当に不安でした。しかしながら、参加表明下さったほとんどの皆様にご来場＆ハックしていただくことができたことを心からうれしくおもうのと同時に、心から感謝申し上げます。また、今回関西での開催をするにあたって会場、告知等を行ってくださいましたGDG京都の蔵野さん、GDG神戸の多田さん、野田さんをはじめ当日お手伝いいただきましたスタッフの皆様、また何より会場をお貸しくださったKRP 寺戸様にはこの場を借りて改めてお礼を申し上げます。ありがとうございました。<br>
また、いつもながら遠路はるばる札幌よりお越しくださったチューターの @aike1000さん、横浜から駆けつけてくださった @g200kgさんにも心から御礼を申し上げます。<br>
皆様の熱い心で成り立っているハッカソンだと思っています。今後とも熱い想い、ご支援をよろしくお願いします。<br>

## おまけ
翌日は京都観光してきました。今回の阿修羅なみでゃっぴーの元になった三十三間堂で観音様の多さに圧倒され、清水寺、銀閣寺、金閣寺と回って、最後の金閣寺のゴージャスぶりに絶句して東京に帰ってきました。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-kinkaku-ji.jpg" width="100%">
</div>

