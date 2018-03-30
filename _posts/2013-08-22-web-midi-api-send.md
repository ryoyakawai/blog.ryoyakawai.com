---
layout: post
title: Web MIDI API の Send ももうすぐ来そうです!!
description: ""
modified: 2013-08-22
tags: [Web MIDI API, Web Music]
---
<div> </div>

<a href="http://www.google.co.jp/intl/ja/chrome/browser/canary.html" target="_blank">Google Chrome Canary</a> には
Web MIDI API の MIDI INPUT 機能が実装されていますが、
MIDI OUT 機能の実装はまだでした。が、それがもうすぐ来そうな予感です。
つまり Web MIDI API が完全体としてブラウザに実装されるということです。
何がいいかと言うと、JavaScript でプログラムを書けばブラウザから MIDI 機器をブリブリ操作できるようになるところです。
「MIDI 機器をコンピュータから操作する場合って <a href="http://japan.steinberg.net/" target="_blank">Cubase</a>、<a href="https://www.apple.com/jp/logic-pro/" target="_blank">Logic</a>、<a href="http://ja.wikipedia.org/wiki/Vision_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2)">Vision</a> とかの DAW からでしょ？」という固定概念がありそうですが、これからはWebブラウザから MIDI 機器を操作する時代がやってくるのです^^ 「でもそのJavaScriptとか操作って難しいんでしょ〜？」ってあたりは、
先日公開した <a href="https://github.com/ryoyakawai/WebMIDIAPIWrapper" target="_blank">Web MIDI API Wrapper</a> を使うと簡単に解決できると思いますよ！
（このブログで<a href="http://localhost:4000/2013/08/webmidiapi-wrapper.html" target="_blank">説明</a>もしています）


さて、本題の「もうすぐ来るよ」なところです。Google Chrome にはいくつかバージョンがあり、
ここで登場するものを説明すると、オープンソースの <a href="http://www.chromium.org/" target="_blank">Chromium</a>、正式公開じゃないから何が起こるか分からないバーションの
Google Chrome Canary、そして安定バージョンの <a href="http://www.google.co.jp/" target="_blank">Google Chrome</a>。なので API は最初に Chromium に実装され公開されます。そして今回 Web MIDI API の MIDI OUTPUT 機能の実装がされたのが Chromium です。ですので、近いうちには Google Chrome Canary に来そうだと思う訳です。


この MIDI OUTPUT の場合 SystemExclusive(SysEx)を使った場合のセキュリティの懸念があり、SysExを使うことを宣言すると許可を求めるダイアログが上がってきます。その状況がこれ▼になります。


<div class="post-image-center">
  <img src="{{ site.url }}/images/2013/08/20130822-webmidi-permission-window.png" width="80%">
</div>




Web MIDI API での指定はこんな感じです。

```javascript
navigator.requestMIDIAccess( {sysex:true} ).then( MIDISuccessCallback, MIDIErrorCallback );
```

「セキュリティの懸念って何？」というとこですが、 SysEx という MIDI Message はF0Hで始まりF7Hで終わる可変長で、楽器メーカー各社が独自に定めることのできるメッセージで、利用される代表例がユーザーがシンセサイザのプリセット音色のパラメータを変更して作成した音色データのバックアップだったりします。（同じメーカーであっても機種によって設定できるパラメータの数等に違いがあり出力フォーマットを統一することが困難な為、独自にフォーマットを定義できる SysEx を使います。）ここで、例えばシンセサイザが接続されたコンピュータ上のブラウザで動作している MIDI アプリケーションが音色パラメータを無断で SysEx を使って吸い出しサーバーに保存していたとしたらどうでしょう？このユーザーがアクセスする毎に照合するようにしたら個人名までは分からないですが「このユーザーは昨日アクセスしてきて、アレやってた人だ」というような特定ができちゃうことになりますよね。こういったことを未然に防止する為に、Web MIDI API ではアプリケーションが事前に SysEx を使うか否かを宣言し、ユーザーからの許可を取った上でしか利用できないという制限をしています。<br>


ちなみに、SysExについて「楽器メーカー各社が独自に定めることのできるメッセージ」
と書きましたが、SysEx を使うためには MIDI を管理する団体に届け出をして Manufactuere ID を取得する必要があり、
日本国内からは <a href="http://www.amei.or.jp/" target="_blank">AMEI(Association of Musical Electronics Industry：音楽電子事業協会)</a>、日本以外からは <a href="http://www.midi.org/" target="_blank">MMA(MIDI Manufacturers Association)</a>へ、ということになります。


現状で Manufactuere ID を保有している<a href="http://www.midi.org/techspecs/manid.php" target="_blank">団体のリスト</a>です。


いろいろ脱線してしまいましたが、という具合で Web MIDI API はもうすぐブラウザにやってきますよ！！！


(Web MIDI API Wrapper の説明の狭間に割り込んだPOSTになってしまいました(・ω<))
