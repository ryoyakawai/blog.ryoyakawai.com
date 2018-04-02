---
layout: post
title: WebMIDIAPIShimを使ってブラウザでMIDI機器を動かしてみた 
description: ""
modified: 2012-12-25
tags: [Advent Calender 2012, Web Music, Web MIDI API]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>
<a href="https://adventar.org/calendars/22" taget="_blank">Web Music Developers JPのアドベントカレンダー</a>の12月25日の記事です！

前回、前々回とWeb MIDI APIのレビューと<a href="https://github.com/cwilso/WebMIDIAPIShim" target="_blanl">エミュレーションライブラリ(WebMIDIAPIShim:Polyfill)</a>を使ったMIDI INのサンプルを紹介してきました。MIDI INを紹介したのでMIDI OUTで何か作ろうと頭をひねったのですが「やっぱりMIDIファイルプレーヤーがいいかな〜？」という結論になりました。ちょっと思い返したら、12月2日のアドベントカレンダーで <a href="https://twitter.com/toyoshim" target="_blank">@toyoshim</a> さんが「<a hrer="http://toyoshim.blogspot.jp/2012/12/webmidilink.html" target="_blank">WebMidiLinkで遊んでみた</a>」と題してSMFプレーヤーを公開されていることに気がつき、横着応用をして対応することにしましたf(^-^;) 数行の改変ですので、改変に関しては文字で説明させていただき、動作に関しては動画でお送りすることにしました。曲はYs2のオープニングでMIDIデータは<a href="http://poteto.sakura.ne.jp/music_ys2.html" target="_blank">OnLine Game Friend's</a>からダウンロードして使用しています。


<div class="post-image-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/5TKIaDrxMsI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>


原理はWebMIDLinkでは別ウィンドウに開いているWebシンセを鳴らす為にpostMessage() (HTML5 Web Messaging)を使い独自メッセージ(ほぼMIDIメッセージです)を送っていますが、このデモではそれをWeb MIDI APIのgetOutput()で取得したMIDIデバイスにsend()メソッドを使って送信しています。

またデモではエミュレーションライブラリとプラグイン(<a href="http://jazz-soft.net/" target="_blank">Jazz-Soft.netのJazz-Plugin</a>)を使っていますが、数行のJavaScriptだけでMIDI機器を手軽に操ることのできる時代がそこまで来ていると思うとワクワクしちゃっていますf(^-^;)
ちなみに今年2012年はMIDIの仕様が正式に世の中に出て30周年の節目(あと数日ですが、、、)。その節目の年にWeb MIDI APIという形で、もっと世の中に浸透するといいですね。

Web MIDI API 2nd WDについて3回に分けての紹介してきました。せっかくなので、すっごく簡単なまとめとしてスライドにもしましたので、もしよろしかったらどうぞ！！
（追記：Web MIDI APIの仕様は日に日に更新されています。2013年1月8日の段階で既にこの説明の説明からは変更されていますのでご注意ください。）


<div class="post-image-center">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/yfJ0SGZBEj4KkH" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 
</div>
<div style="margin-bottom:5px" class="post-image-center"> <strong> <a href="//www.slideshare.net/ryoyakawai/web-midiapi-2ndwd" title="Web MIDI API 2nd WD" target="_blank">Web MIDI API 2nd WD</a> </strong> from <strong><a href="https://www.slideshare.net/ryoyakawai" target="_blank">Ryoya Kawai</a></strong> </div>


というネタでWeb Music Developers JPの2012年のアドベントカレンダーを〆させて頂きます！！

<hr>
Web Music Developers JPのアドベントカレンダーは2012年10月初旬の発足以来、実質的に最初のイベントでした。顔を合わせていないにも関わらず、たくさんの方にご賛同いただき、そして何よりもお忙しい師走の時期にお時間を裂いていただき、楽しい＆興味深い＆ハイレベルな内容のネタをご提供いただき本当にありがとうございました。心から御礼申し上げます。皆様の記事のお陰で僕自身は間違いなく毎日アドベントした毎日でしたが、僕と同じように多くの方がアドベントした毎日をお送り頂けたと信じております。今後もWeb Music Developers JPのコミュニティ活動は継続し発展をして行きたいと考えておりますので、今後ともどうぞよろしくおねがいいたします。
