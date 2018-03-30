---
layout: post
title: WebAudioでVocalキャンセラー（簡単な方）書きます。
description: ""
modified: 2012-12-07
tags: [Advent Calender 2012, Web Music, Web Audio API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>
<a href="https://adventar.org/calendars/22" taget="_blank">Web Music Developers JPのアドベントカレンダー</a>の初日（12月7日）の記事です！


ネタは「WebAudioでVocalキャンセラー（簡単な方）」です。
Web Audio APIに組込まれていない信号処理だったので作ってみました。


<div class="post-image-center">
  <img src="{{ site.url }}/images/2012/12/20121207-vocalcanceling.png" width="40%">
</div>


### 遊び方
音楽ファイルを点線の中にドロップして音源をロードします。ロードが完了するとボタンが「START」に変わるので、それをクリックすると再生が始まります。Vocalキャンセルは「START」ボタンの隣の「Vocal OFF」をクリックすることでキャンセルされます。
青い（緑？）デカイ丸はDrag&Dropをブラウザがサポートしているかを示しています。黄色の場合はDrag&Dropはできないので、、、試せません。。。Chromeなら間違いなくサポートしていますので、Chromeでお試しくださいね。


### 原理
簡単な方のVocalキャンセラーなので簡単な原理ですw ステレオな楽曲のVocalは音像が中央に位置するように録音されています。このことを逆手にとってVocalのキャンセルを行います。LチャンネルからRチャンネルの差分をとる、ただそれだけで実現できてしまいます。
既にお気づきかもですが、この方法では以下の2点のデメリットがあります。
Vocalキャンセルを行った楽曲はモノラルになる
ドラム等の音像が中央に位置している音もキャンセルさる
左右のスペクトル、振幅を見てVocalをキャンセルしつつステレオを保てるさらに精度のよい方法もありますので、実装すれば実現可能なんじゃないかな〜？と思いますが、今回は簡単な方でやっちゃいましたf(^-^;)


### Web Audio APIで表現する
ポイントは1行です。<a href="https://dl.dropboxusercontent.com/u/695740/vocalCanceller/js/basicSet.js" target="_blank">js/basicSet.js</a>の49行目。

```javascript
outLch[i] = outRch[i] = inLch[i] - inRch[i];
```

この1行がLチャンネルからRチャンネルの差分をとっている部分です。簡単ですよね？
その他のWeb Audio APIの部分は、、、説明すると長くなりそうなのでまたの機会にしようかな、、、なんて思います。すみません。。。


### その他
今回のスクリプト群を使うとDrag&Dropで音楽再生を始められるWeb Audio APIのアプリが簡単に作れますので、もしよろしかったらご利用ください！！
Web Audio APIってクライアント側のJavaScriptで動作するのでサーバ側にJava、Perl、PHPとかミドルウェアは必要なく、クライアントにWeb Audio APIに対応したブラウザ（例えば Chrome !!）がインストールされてさえいれば音が鳴る仕組みですので公開は非常に簡単です。「音ネタをたくさん用意して試してもらいたい。」と思っても、楽曲等をサーバに上げる場合には必ず著作権の問題があって難しい、、、という時の解決策がコレかなって思います。ユーザー自身で音ネタを用意できるので、ユーザーにも楽しんでもらえると思います。
今回のスクリプト群の中の「<a href="https://dl.dropboxusercontent.com/u/695740/vocalCanceller/js/fileAPI.js" targt="_blank">js/fileApi.js</a>」がDrag&Dropについて書いた部分になります。詳しくは「HTML5  FileAPI」でググると情報がたくさん出てきます。


さらに、今回の「Vocalキャンセラー」は<a href="http://dl.dropbox.com/u/695740/vocalCanceller/js/basicSet.js" target="_blank">js/basicSet.js</a>の47〜54行目で実現しています。もし、その他の信号処理を書きたい場合はここに上書きすれば独自の信号処理を入れられます。
1点注意点としては、

```javascript
outRch[i] = inRch[i];
outLch[i] = inLch[i];
```

のようにoutRch、outLchに信号を入れないと音は出ないので忘れないように気をつけてくださいね！
