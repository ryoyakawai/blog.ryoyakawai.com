---
layout: post
title: YouTubeをキレイに埋め込めむPolymer Elementを作ってみた。
description: ""
modified: 2018-04-05
tags: [Tech, Web, Polymer, YouTube]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

## 何かが重い
Blogを移転の為に記事の引越しをしてみて気づいたページロードの遅さ。


調べてみると、YouTubeの埋め込みがあると重くなることが判明。
'X-XSS-Protection'ってエラーが1つの埋め込みに対して1つ出るので、複数埋め込んであるとページのロードのスピードにかなり影響していました。


どうやって解決しようか？と思い返しながらいると「時間を指定して埋め込んでもサムネイルは時間ゼロの表示になってて残念な想いをしていたこと」を思い出した。なので、例えば、ノンストップで録画したイベントの紹介をしたい場合、再生開始時間を指定して紹介してもそれができなくて、何が再生できるのかイマイチ伝えられなくて悔しかった。とか、他にもいろいろあったので、それ以上深く考えずに「じゃあPolymerも2.0になってるし、Web Componentで解決を図ってみよう」というノリで作りはじめました。

## youtube-play エレメント
できたのがこちら。こんな感じのがページに埋め込めます。

<youtube-play contentid="WsptdUFthWI" imgsrc="{{ site.url }}/images/2018/04/youtube-play-sample-02.png" start="1:48" autoplay="1" size="75%" rel="0" controls="1" showinfo="0" width="447.75px"></youtube-play>

Polymer(Web Components)のElementなのでもちろんHTMLを書くことで埋め込み完了です。

```html
<script src="https://polygit.org/components/webcomponentsjs/webcomponents-loader.js"></script>
<link rel="import" href="[PathTo]/youtube-play.html">

<youtube-play contentid="WsptdUFthWI" imgsrc="{{ site.url }}/images/2018/04/youtube-play-sample-02.png" start="1:48" autoplay="1" size="75%" rel="0" controls="1" showinfo="0" width="447.75px"></youtube-play>
```

Attribute は以下を用意しています。

- **contentid** : YouTubeの動画にユニークに付与されるIDを指定
- **imgsrc** : YouTube動画を再生していない時に表示する画像のPathを指定
- **start** : 開始位置を指定（HH:MM:SS、秒のフォーマットのどちらでも正しくParseします）
- **autoplay** : '1'を指定すると、画像をクリックすると再生されます
- **size** : Window幅に対する画像、動画の幅を％で表記します（AspectRatioは16:9でFixしています）
- **rel** : '1'を指定すると動画再生完了後に関連リンクを表示
- **controls** : '1'を指定すると動画再生時にコントロール（再生、停止、シーク等）を表示
- **showinfo** : '1'を指定すると動画のタイトル等が動画再生時に表示されます。


あまり調べずに作ったので、もっと優れたのが既に公開されているかもですのでお気をつけください。


また、このエレメントを使っても、結局のところ'X-XSS-Protection'のエラーは再生時に発生してしまいます。ページロード時のスピードを上げることを目的としたエレメントですのでご了承ください。


## リポジトリ
<a href="//github.com/ryoyakawai/youtube-play/" target="_blank">https://github.com/ryoyakawai/youtube-play</a>

## Live Demo
[Demo: youtube-play](https://ryoyakawai.github.io/youtube-play/) 

## 動作の確認状況
2018年4月5日現在、macOS High Sierra(10.13.3)上でChrome 65.0.3325.181、Firefox 59.0.2、Safari 11.0.3で動作の確認をしています。
