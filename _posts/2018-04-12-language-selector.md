---
layout: post
title: 手軽にマルチ言語ページを！
description: ""
modified: 2018-04-12
tags: [Tech, Web, Polymer, Multi-Language]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---

## 手軽にマルチ言語ページを簡単に作りたかったけど・・・
前回のページロードの遅さにつづいて第二弾。

頻繁にではないけど、たまに多言語でBlogを書くことがありますが、恐らく読む側からするとかなりストレスがあったかな・・・と思っていました。
日本語圏外の方は、英語ページを探さないといけない、けどそもそも探すページって日本語だよね・・・みたいな感じです。

そして、結論を言うと「作ったけど、現在のBlogに導入するのは失うものが多そうだから導入しないだろう・・・」という結果になってしまいましたがエントリだけは書いちゃいます。せっかく作ったのでw
「Markdownが使えるのに、このエレメントを使うとHTMLを書くことになる」ので気軽さが失われるのです。

## language-selector エレメント

こんな感じで埋め込めます。

<div style="border:1px solid rgba(240,240,240,0.8); padding:2%; border-radius:3px; box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); margin:10px 20px 15px;">

<p><language-selector deflang="ja" langs="en:ja" switcher></language-selector></p>
<language-selector>
<span class="translation" lang="ja">
こんな感じでマルチ言語対応ページがHTMLタグだけで実現可能です。<br>
JavaScriptを書く必要はないんです :-) <br>
Web ComponentsとPolymer、ホントにありがとう！！
</span>
<span class="translation" lang="en">
This element enables to make multi language page something like this by HTML tag.<br>
No JavaScript code is required :-)<br>
Thank you very much for Polymer as well as Web Components.
</span>
</language-selector>

</div>


コードはこんな感じです。

言語セレクタ（「English」「日本語」と表示されてる部分）はこう書いて設置します。

```html
<language-selector deflang="ja" langs="en:ja" switcher></language-selector>
```

Attribute は以下です。

- **deflang** : デフォルト（ページロード時）に表示される言語を指定
- **langs** : 用意している言語を[ISO 639-1(2文字のアルファベット)](https://en.wikipedia.org/wiki/ISO_639-1)のフォーマットでコロン(:)区切りで指定します（現状の対応言語はen、ja。）
- **switcher** : これをつけると言語セレクタとなります。（つけないとコンテンツ本体と認識します）

次にコンテンツ本体です。

```html
<language-selector>
  <span class="translation" lang="ja">
    こんな感じでマルチ言語対応ページがHTMLタグだけで実現可能です。<br>
    JavaScriptを書く必要はないんです :-) <br>
    Web ComponentsとPolymer、ホントにありがとう！！
  </span>
  <span class="translation" lang="en">
    This element enables to make multi language page something like this by HTML tag.<br>
    No JavaScript code is required :-)<br>
    Thank you very much for Polymer as well as Web Components.
  </span>
</language-selector>

```

`language-selector` のタグの中に、適当なタグを入れ（ここでは`span`）、その中に書いた言語を`lang="xx"`で指定すれば、言語セレクタとリンクされます。
言語セレクタの属性の `langs` で指定した言語のみ切替えの対象になります。

注意：`language-selector`の直前に別のタグで囲むと認識してくれないバグがあります。

## リポジトリ
<a href="//github.com/ryoyakawai/language-selector/" target="_blank">https://github.com/ryoyakawai/language-selector</a>

## Live Demo
[Demo: language-selector](https://ryoyakawai.github.io/language-selector/)

## 動作の確認状況
2018年4月12日現在、macOS High Sierra(10.13.3)上でChrome 65.0.3325.181、Firefox 59.0.2、Safari 11.0.3で動作の確認をしています。
