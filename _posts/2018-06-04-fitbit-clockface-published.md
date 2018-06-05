---
layout: post
title: Fitbit Clock Face 公開記念エントリー🎉
description: ""
modified: 2018-06-04
tags: [Fitbit, Fitbit OS, Versa, Ionic, clock face, Develop]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

<div> </div>

[前回のエントリー]({{ site.url }}2018/05/27/fitbit-clockface.html)から8日目にしてやっと公開。
以下↓が今回公開した2つのClock Face。（写真はVersaのだけどIonicにも対応しています）デジタルだけでいいや、と思ってたけどアナログも欲しくなって結局作ってしまった。そして、今使ってるのはアナログです。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180604-clockface_timezone.png" width="70%">
</div>

FitbitのアプリのClock Faceからは**Secondary Timezone**で検索すると速いです。

Fitbitのアプリがインストールされてるスマホからしか起動しないけどリンクはこちら。

- [Secondary Timezone](https://gam.fitbit.com/gallery/clock/f33a1d6d-1657-4bd0-90fd-3b123c2246cb)
- [Secondary Timezone for Analog](https://gam.fitbit.com/gallery/clock/d7d94500-a143-4794-a96b-2f408a3067c3)

## 公開までに時間がかかった理由
不備があった為に時間がかかってしまいました。その度に「[ガイドラインはここにある](https://dev.fitbit.com/legal/app-gallery-guidelines/
)から読んでね」という通知が登録したメールアドレスにやって来ました。ちなみに不備が複数あってもまとめては教えてくれませんでした。

またレビューはReviewに出した日を入れて2〜3日かかると考えてください。

今回指摘された不備の内容を以下に書き出します。

### Display Nameが不一致だった
画像の中の赤の四角の中の文字列が一致している必要があります。

- [Gallary App Manger](https://gam.fitbit.com/)のプロジェクト名（画像左）
- [Fitbit Studio](https://studio.fitbit.com/)で作ったアプリ内の`package.json`のDisplay Name（画像右）

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180604-studio-gam.png" width="100%" style="border:1px solid #eee;">
</div>

### Build Targetsでチェックを入れた種類のスクリーンショットの準備不足

以下の2つの項目を揃えましょう。

- [Gallary App Manger](https://gam.fitbit.com/)のScreenshots（画像左）
- [Fitbit Studio](https://studio.fitbit.com/)で作ったアプリ内の`package.json`のBuild Targets（画像右）

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180604-buildtargets.png" width="80%" style="border:1px solid #eee;">
</div>

スクリーンショットは実機、またはSimulatorを接続してから、下の画像の(2)から撮ることが可能です。

もちろん実機がなくてもスクリーンショットはSimulatorを接続することで撮ることが可能です。SimulatorはFitbit Studioからダウンロードしてください。下画像の(1)。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180604-simulator-screenshot.png" width="80%" style="border:1px solid #eee;">
</div>


## おわりに
開発から、レビュー、公開までの一通りを体験して満足しています（笑）やっぱりJavaScriptでの開発って手軽でよいですね。

ちなみに現在公開されているSecondary Timezone for Analog v1.0.0、Secondary Timezone v1.0.3にはバグがあるのでご注意ください。土曜日から日曜日になる部分の計算をミスっています。現在（2018年6月4日23:00）修正版をレビューには出していますので、今週中には公開できるようになるはずです。


