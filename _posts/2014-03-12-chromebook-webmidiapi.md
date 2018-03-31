---
layout: post
title: Chromebook で Web MIDI API を使ってみる
description: ""
modified: 2014-03-12
tags: [Advent Calender 2012, Web Music, Web Audio API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

- Q. Chromebook で Web MIDI API は動く？
- A. Canary BuildのChromeOSにすると動作します！！

ということでやってみました。<br>
(※ Chrome への Web MIDI API の実装について2013年末の状況は<a href="http://blog.toyoshima-house.net/2013/12/chromeweb-midi-api.html" target="_blank">とよしま語録</a>の通りです。)<br>
<br>

まず、 Chromebook を Stable から Canary Build へ移行する必要がありますので、Developer Modeにします。手順は以下です。<br>

1. Recovery Modeで起動<br> [Esc]+[Refresh]+[Power] を同時押しで起動。
2. Developer Mode を有効にする<br> 起動したら、[Ctrl]+[D] を押下して、次の画面で [Enter] を押下してDeveloper Modeへ。<br> Developer Mode への初期化に10分程度かかりました）
3. Chromebookのセットアップ<br> 再起動すると見慣れない画面がでてきますので、[Ctrl]+[D] で起動先に進んでください。先に進むと、Chromebookの初期設定画面が出てくるので、通常通りセットアップを行います。
4. Canary Build に移行する<br> ブラウザを起動して [Ctrl]+[Alt]+[T] で "crosh" (Chrome OS Developer shell) を開く。<br>crosh に "shell" と入力し、その後 "sudo su" します。<br>
続けて以下の2行を入力すると、Canary への移行が始まります。（完了までには10分程度かかります）<br>

```shell
$ update_engine_client --channel=canary-channel;
($update_engine_client --channel=stable-channel; (to get it back))
update_engine_client -update
```
以上で Canary Build への移行作業完了。<br>
<br>
次に、Web MIDI API を使うときの（今のところの）お約束のフラグを変更します。<br>
ブラウザの URL を入力するテキストボックスに `chrome://flags/#enable-web-midi` を入力して "enable" にして再起動です。<br>


<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/03/20140312-chroomebook-01.png" width="70%">
</div>

これで Chromebook で Web MIDI API を使う準備が整いました。あとは、USB-MIDI機器を接続して Web MIDI を使ったアプリケーションにアクセスすれば機器を認識してくれます。<br>
ここでは <a hrefr="http://www.switch-science.com/catalog/1490/" target="_blank">eVY1 Shield</a> と <a href="http://yamaha-webmusic.github.io/nsx1-apps/text-input/" target="_blanl">専用ウェブアプリ</a> で動作させてみました。<br>

<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/03/20140312-chroomebook-02.jpg" width="70%">
</div>


Mac、Windows で動作させたときと変わりなく動作しました！！<br>
<br>
このChromebookですが、2014年3月13日現在、日本では個人輸入等をしないと手に入りませんが、<a href="http://getnews.jp/archives/529237" target="_blank">2014年4月</a>に来るかも！な記事も出ています。値段は3万円前後ですので、DAW ウェブアプリケーションとか出現したとしたら、本当に手軽にDTMが始められそうですね^^<br>
<br>
ちなみに、今回利用した Chromebook は <a href="http://www.google.com/intl/ja/chrome/devices/hp-chromebook-11/" target="_blank">HP Chromebook 11</a> です。
