---
layout: post
title: Fitbit OSのClockfaceにAnalyticsを入れてみた
description: ""
date: 2018-12-22 23:00:00 +0900
modified: 2018-12-22
tags: [Fitbit, FitbitOS]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

<div> </div>

2018年4月末くらいに買った[Fitbit Versa向けにClockfaceを作って半年](https://blog.ryoyakawai.com/2018/05/27/fitbit-clockface.html)経ちました。
インド、英国、オーストラリア、米国のユーザから「サマータイム入ってね〜！」とか、「タイムゾーン追加して！」とかいろいろと要望いただき、
1つ1つ対処していて、そろそろUX的なツッコミも入るようになりました。なんですが、Fitbitはエコシステムとしてまだインストール数とかの情報の開示を
してもらえないので、どれくらいの方に使ってもらえているのか把握できず、なんとかしたいな〜、と思っていました。  
そこで、単純にAnalyticsを入れてしまいました。

## 導入
1からコード書く必要あるのかも？と思いきや、検索したらズバリなのがありました。  

- [dillpixel/fitbit-google-analytics](https://github.com/dillpixel/fitbit-google-analytics)  

Fitbit OS上のアプリ向けっぽいのでClockfaceで動くのか？という不安はありましたが、特にハードルなく導入完了してしいました。

- `npm install` 
- AnalyticsでTracking IDを取得
- AppとCompanionでimport
- トラックしたいところで動作させる

非常に簡単でした。

これで、どれだけ使われているのか分かる、かな？  
まだレビューですが、リリースできるようになるのを楽しみにしてようと思います。  

1つだけ要望を言うと、`fitbit-google-analytics/app.js`のExportsをこんな感じにして`debug`をExposeして欲しい。

```javascript
var analytics = {
  debug: debug,
  configure: configure,
  send: send
};
export default analytics;
```
