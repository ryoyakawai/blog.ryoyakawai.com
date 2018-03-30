---
layout: post
title: Canvasで作ったLCDディスプレイのデモ
description: ""
modified: 2014-12-24
tags: [Advent Calender 2012, Web Music, Web Audio API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>
<a href="https://adventar.org/calendars/22" taget="_blank">Web Music Developers JPのアドベントカレンダー</a>の12月6日の記事です！

ネタはCanvasで作ったLCDディスプレイです。先日の「FMシンセサイザー」の部品の説明になります。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2012/12/20121206-advent-01.png" width="60%">
</div>

### 作り始めたキッカケ
「FMシンセサイザー作ったけど、なんか味気ないな。。。」と思ったところからで、
「デジタルシンセだからデジタルっぽく見せられるドットのLCDで雰囲気は出るんじゃない？」という短絡的な発想でした。
さっそく作り始めたのですが、ふと「文字のドットの位置ってどこから起こせば良いのよ？？リファレンスどれにするの？？」という疑問が沸き、
今度はこれ系の液晶が付いた機器を探したのですが最近って高性能なカラーか、
もしくは昔ながらの7セグの電卓の液晶ばかりでなかなか見つからず、
結構焦ったのですがゴソゴソ探したら、それこそリファレンスが出てきてホッとしました。

<div class="post-image-center">
  <img src="{{ site.url }}/images/2012/12/20121206-advent-02.jpg" width="40%">
</div>

出て来たのはコレです。なんとも懐かしい<a href="https://ja.wikipedia.org/wiki/%E3%83%A4%E3%83%9E%E3%83%8F%E3%83%BBMU%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA" target="_blank">Yamaha MU2000</a>です。
<a href="http://pc.watch.impress.co.jp/docs/article/991012/yamaha.htm" target="_blank">1999年に発売されたみたい</a>です。MIDIファイルも引っ張りだして来て、
ひとしきり遊んでから作業続行しました。MU2000のお陰もありドットの文字を起こすのは短時間でできました。


## 本題の使い方
手順は簡単です。

#### (1) HTMLファイルにcanvasのエリアを作ります。(例：index.html)

```html
<canvas id="canvasLCD"></canvas>
```

#### (2) 以下のJavaScriptを貼付けます。(例：main.js)

```javascript
var lcd = new CanvasLCD('01');
lcd.init('canvasLCD', 'initialword', true);
```

- 1行目<br>- 引数はディスプレイの色のタイプです。<br>- 01, 02, 03, 04, 05, 06 の6種類用意しています。(デモページに全種類出てます)
- 2行目<br>- 第1引数(canvasLCD)はHTMLで指定canvasのIDです。<br> - 第2引数(initialword)は、最初のロゴ表示の直後に表示させる文字列です。<br>- 第3引数(true)はロゴ表示をさせるか否かのフラグです。

#### (3) 文字をディスプレイに表示させる。

```javascript
lcd.write2Display('lettersRL01', 'ABCDEFG');
```
- 第1引数(lettersRL01)は文字をどう出現させるかです。3種類用意しています。
<br>- letters 指定された文字列を一度に表示
<br>- lettersRL01 指定された文字列を左から右に向かって表示させる
<br>- lettersRL02 指定された文字列を左から右に向かって表示させる
<br>- lettersRL01との違いは複数あった場合、複数行同時に表示させる点


基本的な動作はこんなところです。

ちょっと面倒ですが、こんなこともできます。 

- 表示できる文字数、行数も変更することが可能です。<br> canvasLCD.jsの中をいじらないといけないのがイケてないです。すみません。


```javascript
var digits = { 'x': 18, 'y': 2 }; // Line55: canvasLCD.js
```

- 色の種類も追加することが可能です。canvasLCD.jsのcolorSetに追加すれば利用可能です。


## 感想
色のセットは数字の古い順から時代で並べてるつもり(確固たる根拠はなく感覚です)なんですが、並べて初めて気がついたのが「進化してるんだな〜」というところでした。lcdType: 04 は初めて見たときは「暗いところで見られていいね！」って昔は思ったのですが、最新の lcdType:06 と比べると、ギラつきが多くて(コントラストの設定ができる機器もありましたね)ちょっと見難いですよね。lcdType:06 は<a href="http://jp.yamaha.com/products/music-production/synthesizers/mx/?mode=series" target="_blank">Yamaha MX49</a>だったり、<a href="http://www.roland.co.jp/products/jp/INTEGRA-7/" target="_blank">Roland INTEGRA-7</a>の色合いですね。(INTEGRA-7は背景がもう少し黒いかな。。)
目的だったデジタルっぽく見えるのも達成できたし(自己満足)、楽しかったし、比較もできたし、よかったな〜、と自己満足しています。

