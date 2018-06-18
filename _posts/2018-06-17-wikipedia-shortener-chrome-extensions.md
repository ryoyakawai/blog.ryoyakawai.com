---
layout: post
title: Wikipedia URL Shortener for Chrome Extension
description: ""
modified: 2018-06-17
tags: [Chrome, Chrome Extension, Wikipedia, Develop]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

<div> </div>

Wikipediaで調べて、引用のためにURLをコピペすることがよくあります。

でも例えば、現在開催中のワールドカップ。WikipediaのURLは大抵のウェブブラウザだとURLバーには

https://ja.wikipedia.org/wiki/FIFAワールドカップ

と見えている。そう、こんな感じで。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180617-url01.png" width="80%" style="border:1px solid #eee;">
</div>

なのですが、そのURLをコピペするとこうなっちゃうんです。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180617-url02.png" width="80%" style="border:1px solid #eee;">
</div>

URLエンコードってやつですね。ありがたいことに、ブラウザさんは人の目に優しく表示してくれてるのですがコピペするにはやっぱり困ります。

というのがキッカケで**[Wikipedia URL Shortener](https://chrome.google.com/webstore/detail/wikipedia-url-shortener/ioekneldioljahdoiddhikknahbbkhan)**っていうChrome Extensionを作ってみました。

## Wikipedia URL Shortener

- ExtensionのURL(chrome web store)： [Wikipedia URL Shortener](https://chrome.google.com/webstore/detail/wikipedia-url-shortener/ioekneldioljahdoiddhikknahbbkhan)  
- ソース(GitHub)：[Source: Wikipedia URL Shortener](https://github.com/ryoyakawai/wikipediaurlshortener)

さっきのFIFAワールドカップのWikipediaのページのURLはこうなります。

[https://ja.wikipedia.org/?curid=288053](https://ja.wikipedia.org/?curid=288053)

URLが短く、そしてシンプルになります。  
（モバイルのブラウザではExtension自体がサポートされていないので利用できません）

動作している状態がこちらです。

<div class="post-image-center">
<img src="{{ site.url }}/images/2018/06/20180617-url04.png" width="80%" style="border:1px solid #eee;">
</div>

WikipediaのIDでURLを取得したいページを表示して、地球儀みたいなボタンを押す、以上です。  

### 動作に関して
WikipediaのURLをIDを使って短くする仕様上、wikipedia.orgのドメインでしか動きませんので、インストールして「あれっ？？動かない。。。orz」となって、すぐに削除せずに以下の手順で試してみてくださいね。

1. [FIFAワールドカップ](https://ja.wikipedia.org/wiki/FIFA%E3%83%AF%E3%83%BC%E3%83%AB%E3%83%89%E3%82%AB%E3%83%83%E3%83%97) を表示
2. URLバーの右隣に出てくるであろう、地球みたいなExtensionのアイコンをクリック

こんな手順でお願いします！！


## 経緯：他にも方法はあるのですが、、、
[GoogleさんのURL Shortener](https://goo.gl/)とか[bitlyさんの](https://bitly.com/)とかあるので、単純に「URLを短くしたい」という要望ならばこういった既存のサービスを使うのも手ですし、またテキストのみのフォーマットで文書を書いていない限り「ハイパーリンクにしてしまう」というのも可能です。なのですが、何となく他に頼らないでよいようなのがいいな〜、と思い調査を始めたところ、この記事に行き着きました。

[WikipediaのURLを短縮する方法](https://sleepygamersmemo.blogspot.com/2017/06/wikipedia-url-shortener.html)

「おおっ、なるほど。できるじゃん。」ってなったけど、使いたい時にこのサイトに来るのも現実的じゃないし、ということでChrome Extensionにしてしまったという流れです。


# おわりに
久しぶりだったので[このチュートリアル](https://developer.chrome.com/extensions/getstarted)からはじめました。楽しかったです！次はTimezoneに関わる不自由なのを解決できるのでも作ってみようと思います。
