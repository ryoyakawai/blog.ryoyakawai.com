---
layout: post
title: Fitbit向けのClock Faceを開発してみた
description: ""
modified: 2018-05-27
tags: [Fitbit, Versa, clock face, Develop]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

<div> </div>

[Fitbit Versa](http://amzn.asia/flUA9LK)を買って1ヶ月くらいとっても便利に使ってて満足なんだけど「タイムゾーンを2つ表示できるClock Faceがあったらもっと便利だな〜」とは思ってはいて、[ググってみたらJavaScriptで開発できる](https://dev.fitbit.com/build/guides/clockfaces/)って書いてったので試してみました。

## Fitbit Versaとは
所謂スマートウォッチで、心拍計、歩数計、睡眠計(と表現したらよいのかな？)とかがついてて、基本的にフィットネス向けです。スマホのアプリからユーザログインを行い、スマートウォッチのデータはペアリングしているスマホからクラウドにアップロードされる、というよくある仕組みです。

思ったよりも軽く、デザイン的にもスッキリしていてとてもよいと思います。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/05/20180527_Versa.jpg" width="70%">
</div>

## 開発のいろは
簡単に描くと以下のようにつながります。母艦となるスマホとはBluetoothで接続されているものの、開発に必要な要素はクラウドを経由してつながっています。そして無線です。
<div class="post-image-center">
<img src="{{ site.url }}/images/2018/05/20180527_sdk_connection.jpg" width="70%">
</div>

### Fitbit Studioの準備と、実機へのデプロイ
アプリにせよ、Clock Faceにせよ開発は[**Fitbit Studio**](https://dev.fitbit.com/blog/2017-09-26-fitbit-sdk-preview-get-started/)というブラウザで動作する（Google Chrome推奨と書いてありました）のIDEで行います。コードのアップロードはできないところが何気に不便です（2018年5月27日現在）が、ダウンロードはできますので、コードの管理はあるところまで開発した後に全体をダウンロードして、という作業が必要になります。
実機側（スマホとスマートウォッチ）からFitbitのクラウドへの接続（実機では「サーバに接続」と表現されています）を行います。Fitbit Studioはユーザログインが必要になっており、このユーザログインがスマホでログインしたメールアドレスとが同じである場合、先ほどクラウドに接続した実機がFitbit Studioの接続メニューにリストされる、という仕組みです。

デプロイはFitbit Studioで**Run**をクリックすると開始されます。コンパイルされて、上記の図のCode（青色の矢印）の流れでスマホ、スマートウォッチにデプロイされます。

### 開発言語
基本的にJavaScriptで開発することになっています。スマホ側で設定をするUIを設ける場合はJSXを使うことになります。ES6で書いて問題ないと思います。少なくともArrow Function、Classは利用することができました。
開発に関しての公式ドキュメントは[こちら](https://dev.fitbit.com/)にあります。

### デバッグ
デバッグする場合、ログはFitbit Studioへ送られて表示されます。（上図のオレンジ色のLogの矢印）ChromeのコンソールのようにArray、Objectはすべて展開されないので、少し勝手が違うところはあります。

### アプリ、Clock Faceの公開
開発したアプリ、Clock Faceは[公開してFitbit Gallery（以下「ギャラリ」と略）に並べることが可能](https://dev.fitbit.com/blog/2017-11-17-app-gallery-submit/)です。
[Fitbit Gallery App Manager(GAM)](https://gam.fitbit.com/apps)に以下を登録して、Fitbitのレビューを通過すると公開されるようです。Clock Faceで記入、アップロードが必要な項目は以下です。

- タグ（Analog, Digital, Status Heabyの3つから1つ以上を選択）
- サポート情報（メールアドレス、または、サポートウェブサイトのURL）
- アプリ名
- アプリの説明
- スクリーンショット（Clock FaceはFitbit Studioから取得可能）
- コード本体
- コードのVersion情報

## 今回の開発したClock Face
今回はアプリではなくて下記のようなClock Face、通常の時計表示、を作りました。
<div class="post-image-center">
<img src="{{ site.url }}/images/2018/05/secondarytimezone00.png" width="50%">
</div>
特徴は心拍計、歩数計、消費カロリーと同時に2つのTimezoneの時間を同時に表示できる、というところです。メインのTimezoneはスマホ側の時間に合わせられ、その下に表示される時間のTimezoneはスマホから任意の時間が設定できるようになっています。改善の余地はいろいろあると思っていますが、重要なのをリストすると以下かなと思っています。

- メインのTimezoneの時間の色は変更できるように
- 12時間表示、24時間表示をユーザが指定できるように

今回は開発した理由は公式のClock Faceのギャラリを探したものの思ったのには出会えず**「ないなら作ってみよう！」**、**「JavaScriptでの開発ならなんとかなりそう」**と考えたのがキッカケです。ちなみにコードは[こちらで公開しています](https://github.com/ryoyakawai/secondarytimezone)。このブログを書いている時点ではFitbitのレビュー中で、ギャラリには並んでおりませんで、リンク等は書けませんが、無事に並べられることを祈っています・・・。

## 感想
開発自体は楽しかったです。まだバグとかあるみたいでドキュメント通り動かないところがある（[このSettings APIは動きませんでした](https://dev.fitbit.com/build/reference/companion-api/settings/)、[公式回答](https://community.fitbit.com/t5/SDK-Development/SettingsStorage-getItem-from-settings-component/td-p/2577978)）のですが、JavaScriptだけでここまでできるのは便利だし、わかりやすいし（個人的に・・・）、いい時代だと思いました。
積み残しは、いつか実装したいと思っています。

## 要望とか
今の所、以下の2つが強化されると快適になると思いました。

- コードのアップロードの許可(Amazon LambdaのようにZIPでアップロードでもよいので・・・)
- Fitbit StudioとFitbit Gallery App Managerの統合しシームレスな公開作業の提供


## リンク
- [“Ready, Set, Go!” with the Fitbit SDK（公式ブログ）](https://dev.fitbit.com/blog/2017-09-26-fitbit-sdk-preview-get-started/)
- [App, App, and Away! The Fitbit App Gallery is Open for Submissions（公式ブログ）](https://dev.fitbit.com/blog/2017-11-17-app-gallery-submit/)

