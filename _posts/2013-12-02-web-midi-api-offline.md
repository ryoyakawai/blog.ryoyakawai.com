---
layout: post
title: Web MIDI APIはOfflineでも使えますか？というお話。 
description: ""
modified: 2013-12-02
tags: [Web Audio API, Web MIDI API]
---
<div> </div>


<a href="http://www.w3.org/2013/11/TPAC/" target="_blank">TPAC</a>(Technical Plenary / Advisory Committee Meetings)のネタを書こうと思っいたのですが、ちょっと遅くなっててすみません。そんな中 <a href="http://events.html5j.org/conference/2013/11/" target="_blank">HTML5 Conference 2013</a> で Web MIDI APIについてお話をさせていただいてきました！映像はこちらです。（3:22:58くらいからです。）

<div class="post-image-center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Chdlf5PK7E0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

この中でお答えを出来なかったご質問が1つありましたので調査しました。ご質問内容は **「Web MIDI APIはOfflineで使用可能か？」** というものです。その結論は **「Web MIDI APIはOfflineで使用可能です。」**
Offline動作の検証にはWebブラウザにパッケージをインストールする形のPackaged App(パッケージ型アプリ)であるChrome Appsを使用しました。ソースはこちらです。  <a href="https://github.com/ryoyakawai/WebMusicDevelopersJP/tree/master/chromeApps/offlineWebMIDIAPI" target="_blank">GitHub</a><br>
まずはgit cloneをしていただき、インストール方法はこちら▼をご参考にしてください。(アイコン等、少々違いますがインストール方法は同じです)<br>


<div class="post-image-center">
<iframe src="//www.slideshare.net/slideshow/embed_code/key/9UWbjngdOqMpD?startSlide=15" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 
</div>
<div class="post-image-center">
<div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/ryoyakawai/chrome-packaged-apps" title="Chrome Packaged Apps" target="_blank">Chrome Packaged Apps</a> </strong> from <strong><a href="https://www.slideshare.net/ryoyakawai" target="_blank">Ryoya Kawai</a></strong> </div>
</div>


インストールしていただき、動作させてみるとOfflineでも利用可能ことが分かるかと思います。もちろんコンピュータをネットワークから切断しても利用可能ですし、Chrome Appsの形にしなくても file:// でも利用可能です 。ちなみに、W3CのSPECにはOfflineに関しては特に記述されていませんでした。<br>
<br>
現状、1点だけご注意ください。Web MIDI APIをPolyfillを使わずに利用できるChromeで、OfflineとしてWeb MIDI APIを使う場合 SysEx は今のところ利用できません。ですので、SysExは必ずfalseにするようにしてくださいね。▼

```javascript
navigator.requestMIDIAccess({sysex:false}).then(successCallback, errorCallback);
```

[追記]
2013/12/03 SysExを使わない場合、file:// とURLを指定する形での利用も可能な旨を追記。
