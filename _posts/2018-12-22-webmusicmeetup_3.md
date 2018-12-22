---
layout: post
title: 「Web Music Developers Meetup ＃3」を開催しました！
description: ""
date: 2018-12-22 00:00:00 +0900
modified: 2018-12-22
tags: [Web Music, Web Music Developers JP, Web Audio API, Web MIDI API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

<div> </div>

2018年12月21日に「Web Music Developers Meetup 3」を開催しました。  
20名ほどの参加者の中から、10分のLTが6つ行われ、LT後には質問、ノウハウ等が活発に飛び交う、
楽しく、そして有意義なMeetupになったように思います。
ご参加くださった皆様、そしてLTの準備、発表をしてくださった皆様、お疲れ様でした！！

## LTの内容の紹介

### LT-1 : [@toyoshim](https://twitter.com/toyoshim) さん
Web Audio/MIDIの標準化について＆今後のChromeとWeb Music系のAPIに関して、のお話。  

- W3Cの年次会議であるTPACにて話さた内容に関しては、Web Audio V2では現在のAPIよりも低レイヤのAPIをサポーする方向で進むこと、Web MIDI APIに関してはMozillaがFirefoxに実装を行って2019年1月にはリリースする目標感をもっている、という表明があったとのこと。

- W3Cに[Audio Community Group](https://www.w3.org/community/audio-comgp/)ができました。Audio WGよりももう少しカジュアルなグループなので気になる方はご参加ください。

- Chromeは外部デバイス接続に対してのPermission（「GPS使っていいですか？」みたいダイアログ）は適切な場面で出せるようにする、という方向で進んでいる

- Web MIDI API on Chromeに関しては現状はWeb MIDI APIでSystemExclusiveのメッセージを扱う場合にのみ限定してPermissionの許可が必要であるのが、今後はWeb MIDI APIを利用するときにはメッセージに関わらず必ずユーザに許可を求めるように変更されるだろう。その影響もあり（もちろん世の中的な流れもあるが）、Web MIDI APIが使えるプロトコルはHTTPSのみとなる。Chrome内部的には「SystemExclusiveを使う」というフラグは持ち続けることになるとは思う（今後の話なので未確定）。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/12/20181222_toyoshim.jpg" width="70%" style="border:1px solid #eee;">
</div>


### LT-2 : [@gcchaan](https://twitter.com/gcchaan)
Web MIDI APIさわってみた、というタイトルでWeb Socketと使ってリモートでMIDI機器を制御してみたお話。  

- システムを作ってみて、Web Socketでワリとスピードが出てるから演奏にも使えそうなことが判明した

- ついでに、画面に楽譜に表示された和音を鍵盤から時間内に抑えるゲーム、も作ってみた

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/12/20181222_gcchan.jpg" width="70%" style="border:1px solid #eee;">
</div>

[Creators' Hub](https://amei-music.github.io/CreatorsHub/about.html)のJSONの形式を使えば、他のアプリとも会話がしやすくなるかも？というアドバイスが会場からありました。


### LT-3 : [@dorayaki0](https://twitter.com/dorayaki0)
abc記法（[abc.js](https://abcjs.net/)を使って）を使って楽譜をリアルタイムに記入していくアプリケーションのお話。  

- [Scrapbox](https://scrapbox.io/business)上でChrome Extentionと動く

- [hyperscoreboxの説明ページ](https://scrapbox.io/satakebox/hyperscorebox)

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/12/20181222_dorayaki0.jpg" width="70%" style="border:1px solid #eee;">
</div>

楽譜をリアルタイムに鳴らしたいけど実現が難しい・・・という@dorayaki0さんの悩みに対し、会場から「ExtentionならBackground Pageを作ってそこにEvent投げたらいけそう」という解決策が出されていました。


### LT-4 : [@sasacci](https://twitter.com/sasacci)
「BLE MIDI on Web Bluetooth」と「VJで家の設計図をグリグリ回した」という2本立てのお話。  

- Web BluetoothでBLE MIDIのChracteristicに`7772E5DB-3868-4112-A1A9-F2669D`、Serviceに`03B80E5A-EDE8-4B33-A751-6CE34EC4C700`を指定したらウェブブラウザとBLE MIDI機器とを簡単に接続できる（Macだけかも）

- Web BluetoothはBLE MIDIとして接続されるだけなので、受け取ったメッセージはParseする必要がある

- VJ仲間の方のご自宅が3DデータであったのでThree.jsで扱って、VJ素材としてグリグリ回した話


<div class="post-image-center">
<img src="{{ site.url }}/images/2018/12/20181222_sasacci.jpg" width="70%" style="border:1px solid #eee;">
</div>

Roland社の[Aerophone GO](https://www.roland.com/jp/products/aerophone_go/)を持ち込んでのBLE MIDI on Web Bluetoothのお話で、写真は16進数のMIDIメッセージをネタに会場とやり取りをしているところ。


### LT-5 : [@tadfmac](https://twitter.com/tadfmac)
簡単にIoT機器作りたいじゃん、というお話。

- 簡単にIoT機器を作るにはMIDIで有線接続がいいぞ！

- MIDI機器を作るには[mocolufa](https://github.com/kuwatay/mocolufa)がいいぞ！

- UI作るならブラウザがいいぞ！ブラウザはChromeでしょ。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/12/20181222_tadfmac.jpg" width="70%" style="border:1px solid #eee;">
</div>

途中からディスプレイが映らなくなるというトラブルがありました。


### LT-6 : [@xsoundjs](https://twitter.com/xsoundjs)
MediaElementAudioSourceNodeと映像フォーマットのお話。  

- 普段は自己紹介しないけど今回は関連するのでしちゃいます！↓

- [hls.js](https://github.com/video-dev/hls.js/)のComitterしてます！

- MediaElementAudioSourceNodeで音を横取りして加工できる。
- 横取りすると映像とズレが生じることがある。

- MediaElementAudioSourceNodeを使うと、その瞬間にVideo Element側の音はMuteされる。

- MediaElementAudioSourceNodeは現状ではChrome限定っぽい？

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/12/20181222_xsoundjs.jpg" width="70%" style="border:1px solid #eee;">
</div>

## スポンサー
今回のMeetupは私の現所属である[**株式会社デジタルハーツ**](https://www.digitalhearts.com/)にスポンサーをしていただききました。飲み物、ピザを提供いただきリラックスした形のMeetupすることができました。サポートしてくださった皆様に心から感謝を申し上げます。  
ありがとうございました！  

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/12/20181222_digitalhearts.jpg" width="70%" style="border:1px solid #eee;">
</div>

なお、IT系の勉強会、Meetupに対して、会場のご提供が可能なケースもるかもしれませんので、そのときはご相談ください。

## おわりに
不定期にこんな形のMeetupを開催していく予定です。  
これからの Web について真剣に議論する[「次世代 Web カンファレンス」](https://nextwebconf.connpass.com/event/103056/)のWebMusic(#nwc_music)のセッションがありますので、そちらもお楽しみに！


## リンク

- [Web Music Developers JP](https://developers.webmusic.io/)
- [Web Music Developers Meetup #3 - Connpass](https://connpass.com/event/112300/)
