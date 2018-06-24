---
layout: post
title: Timezone Clocks for Chrome Extension
description: ""
modified: 2018-06-24
tags: [Chrome, Chrome Extension, Wikipedia, Develop]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

<div> </div>

「日本時間の今って、西海岸時間だと何時だっけ？」というのなら複数のTimezoneを表示できるアプリでもあればそれで問題ありません。
Chrome Extensionには便利なのがいくかあって、今までは、Chrome Extension（拡張機能）の[World Clocks](https://chrome.google.com/webstore/detail/world-clocks/innfmeekncjandlanpgdmmogkcimekgo)を使ってました。このアプリだと現在の時間を元にした各地の時間は分かるのですが、ではスケジュールを調整するとき、

- 日本時間で13:00って、米国西海岸時間だと何時？
- 米国西海岸時間で20:00って、日本時間だと何時？そして更に、米国東海岸時だと？ロンドンは？

とかなると、考える必要がありました。（少なくとも私の場合ww）ここを何とかしたいと思って作り始めたのが「[Timezon Clocks](https://chrome.google.com/webstore/detail/timezone-clocks/phckpicnefnbafbamoidbemcdlolfoel)」です。見た目は今まで使っていたWorld Clocksとほぼ同じにしています。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180624-timezoneclocks01.png" width="90%" style="border:1px solid #eee;">
</div>

モチベーションとなった「Timezoneが複数またがる時間を同時に表示する機能」にいてはこう解決しました。

**「同時に時間をババっと動かす」**

です。こんな感じ↓。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180624-timezoneclocks03.gif" width="70%" style="border:1px solid #eee;">
</div>

無駄に動かすのも気持ち良いですw


Timezoneの設定はインストールされているChrome毎にではなく、ChromeにGoogleアカウントでログインしていれば、他のコンピュータのChromeとも共有されるようになっています。

ということで、もしよかったらお使いください〜！

インストールはこちから → <a href="https://chrome.google.com/webstore/detail/timezone-clocks/phckpicnefnbafbamoidbemcdlolfoel" target="_blank" style="font-size:1.2em; font-weight: bold;">[ Timezon Clocks (Chrome Web Store) ]</a>
