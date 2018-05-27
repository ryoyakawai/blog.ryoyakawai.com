---
layout: post
title: Fitbit OS向けのClock Faceを開発してみた
description: ""
modified: 2018-05-27
tags: [Fitbit, Fitbit OS, Versa, clock face, Develop]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

<div> </div>

[Fitbit Versa](http://amzn.asia/flUA9LK)を買って1ヶ月くらいとっても便利に使ってて満足なんだけど「タイムゾーンを2つ表示できるClock Faceがあったらもっと便利だな〜」とは思ってはいて、[ググってみたらJavaScriptで開発できる](https://dev.fitbit.com/build/guides/clockfaces/)って書いてったので試してみました。

## Fitbit Versaとは
所謂スマートウォッチで、心拍計、歩数計、睡眠計(と表現したらよいのかな？)とかがついてて、基本的にフィットネス向けです。スマホのアプリからユーザログインを行い、スマートウォッチのセンサが取得した時系列のデータはペアリングしているスマホからクラウドにアップロードされる、というよくある仕組みです。

デバイス自体に関して、デザイン的にもスッキリしていて、それでいて軽く、交換用ベルトも豊富でとても好印象です。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/05/20180527_Versa.jpg" width="70%">
</div>

## 開発のいろは
[Fitbit OS](https://www.fitbit.com/fitbitos)とはFitbit社の開発しているOSで、現在のところFitbit社のFitbit IonicとFitbit Versaに搭載されています。ここからはこのOS上での開発について、Clock Faceを開発した経験から少しご紹介します。

開発に関してデバイス周辺の接続図を簡単に描くと以下のようにつながります。母艦となるスマホとはBluetoothで接続されていますが開発はBluetooth経由で行うわけではなく、それぞれの機器がインターネットにWi-Fiで直接接続してFitbit社が用意したクラウドを経由することでやりとりが行われます。
<div class="post-image-center">
<img src="{{ site.url }}/images/2018/05/20180527_sdk_connection.jpg" width="70%">
</div>

### Fitbit Studioの準備と、開発、そして実機へのデプロイ
アプリにせよ、Clock Faceにせよ開発は[**Fitbit Studio**](https://dev.fitbit.com/blog/2017-09-26-fitbit-sdk-preview-get-started/)というブラウザで動作するIDE上で行います。コードのアップロードがドラッグ＆ドロップでしかできないところが不便だった（2018年5月27日現在）ので、CLI（Command-line interface）が提供されることを期待しています。（[開発中かも](https://community.fitbit.com/t5/SDK-Development/Fitbit-CLI-Command-Line-Tool-Or-all-Fitbit-Studio/td-p/2163131)）。

実機（スマホとスマートウォッチ）にFitbit Studioからコードを送る準備は以下のような手順です。実機側からFitbit社のクラウドへの接続を行います。Fitbit Studioはユーザログインが必要になっており、このユーザログインで利用したメールアドレスとスマホでログインしたメールアドレスとが同じである場合に紐付けられ、先ほどクラウドに接続した実機がFitbit Studioの接続メニューにリストされ、開発者がFitbit Studioから接続を行う、という準備をします。

デプロイはFitbit Studioで**Run**をクリックすると開始されます。コンパイルされて、上記の図のCode（青色の矢印）の流れでFitbit Studioに接続された実機（スマホとスマートウォッチ）にデプロイされます。

### 開発言語
Fitbit OS上のアプリは[JerryScript](http://jerryscript.net/)で開発することになります。JerryScriptとは、ハードウェアからの制約が大きな、例えばIoTデバイスで使われることを想定しているLightweightなJavaScriptです。Fitbit OSがJerryScriptを使ったことが[JS Foundiationの記事](https://js.foundation/blog/2018/02/07/javascript-internet-things-jerryscript-fitbit-ionic)にもなっています。
スマホ側で設定画面を用意する場合はJSXを使います。ちなみに、ES6 Modules, Arrow Function、Classは利用することができました。

開発に関しての公式ドキュメントは[こちら](https://dev.fitbit.com/)です。気になる方はご覧になってください。

### デバッグ
デバッグする場合のログはFitbit Studioへ送られ、Consoleとして表示されます。（Logの流れは上図のオレンジ色のLogの矢印）Chrome DevToolsのコンソールのようにArray、Objectがすべて展開されての表示ではないので、少し勝手が違うところはあります。

### アプリ、Clock Faceの公開
開発したアプリ、Clock Faceは[公開してFitbit Gallery（以下「ギャラリ」と略）に並べることが可能](https://dev.fitbit.com/blog/2017-11-17-app-gallery-submit/)です。
[Fitbit Gallery App Manager(GAM)](https://gam.fitbit.com/apps)に以下の項目をを入力して、Fitbit社のレビュー受けて通過すると公開されるようです。以下はClock Faceの公開時に記入、アップロードが必要だった項目です。

- タグ（Analog, Digital, Status Heabyの3つから1つ以上を選択）
- サポート情報（メールアドレス、または、サポートウェブサイトのURL）
- アプリ名
- アプリの説明
- スクリーンショット（Clock FaceはFitbit Studioから取得可能）
- コード本体のアップロード（Fitbit Stusioから所得したhoge.fbaというファイル）
- コードのVersion情報

## 今回の開発したClock Face
以下のようなClock Faceを作りました。
<div class="post-image-center">
<img src="{{ site.url }}/images/2018/05/secondarytimezone00.png" width="50%">
</div>
特徴は心拍計、歩数計、消費カロリーと同時に2つのTimezoneの時間を同時に表示できる、というところです。メインのTimezoneはスマホ側の時間に合わせられ、その下に表示される時間のTimezoneはスマホから任意の時間が設定できるようになっています。改善の余地はいろいろあると思っていますが、重要なのをリストすると以下かなと思っています。

- メインのTimezoneの時間の文字の色を変更できるように
- 12時間表示、24時間表示をユーザが指定できるように

コードは[こちらで公開しています](https://github.com/ryoyakawai/secondarytimezone)。このブログを書いている時点ではFitbitのレビュー中で、ギャラリには並んでおりませんで、リンク等は書けませんが、問題なく無事に並べられることを祈っています・・・。

## 感想
開発自体はいつも通りで楽しかったです。提供されているSDKのAPIにはバグがあるみたいでドキュメント通り動かないところがある（[このSettings APIは動きませんでした](https://dev.fitbit.com/build/reference/companion-api/settings/)、[公式回答](https://community.fitbit.com/t5/SDK-Development/SettingsStorage-getItem-from-settings-component/td-p/2577978)）のですが、JavaScriptだけでここまで開発できるのは明らかに便利だし、分かりやすいし（個人的に・・・）、いい時代だな〜、と思いました。

積み残しは、いつか実装したいと思っています。

## 要望とか
今の所、以下の2つが強化されると快適になると思いました。

- ファイルアップロード用のCLIの提供
- Fitbit StudioとFitbit Gallery App Managerが統合しシームレスな公開作業を提供

## リンク
- [“Ready, Set, Go!” with the Fitbit SDK（公式ブログ）](https://dev.fitbit.com/blog/2017-09-26-fitbit-sdk-preview-get-started/)
- [App, App, and Away! The Fitbit App Gallery is Open for Submissions（公式ブログ）](https://dev.fitbit.com/blog/2017-11-17-app-gallery-submit/)

