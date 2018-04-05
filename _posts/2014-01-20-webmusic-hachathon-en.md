---
layout: post
title: Web Music Hackathon &#35;2 Report
description: ""
modified: 2014-01-20
tags: [Web MIDI API, Web Music Hackathon, Web Music, Web Audio]
---
<div> </div>

<a href="/2014/01/webmusic-hachathon.html" target="_blank">日本語版はこちら</a><br>
<br>
On January 18th 2014, Google Japan and <a href="https://groups.google.com/forum/#!forum/web-music-developers-jp" target="_blank">community of Web Music Developers JP</a> had a Hackathon. And <a href="http://amei.or.jp/" trget="_blank">AMEI(Associatin of Musical Electronics Industory)</a> is a supponsor of this event.<br>
This is a second time event, the first one was held on <a href="/2013/10/webmusic-hackathon.html" target="_blank">Octobe 19th 2013</a>.<br>
<br>

The event attendees are over 30, and they invented about 20 applications within one day. The end of this event we had presentation time of their applications. Those application is really unique and having a plenty of variety. For example, <a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=22m57s" target="_blank">corroboration of audio and light</a>, <a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=2h15m7s" target="_blank">acoustic MIDI Controller(Can)</a>, <a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=1h3m34s" target="_blank">corroborate with Twitter</a>, <a href="http://www.youtube.com/watch?v=dCvuBz1FYWg&feature=share&t=47m23s" target="_blank">corroborate with Google Docs Spread Sheet</a>. I think this hackathon gave us the chance to realize that how much are Web Audio/MIDI API having a high potential to express things.<br>
<br>

In this blog, I introduce how did beginners(beginners of Web Audio/MIDI API) invent applications. Other applications are introduced in Google <a href="http://google.com/+agektmr" target="_blank">agektmr</a>'s <a href="http://blog.agektmr.com/2014/01/web-music-2.html" target="_blank">blog</a>.<br>
In that day, I have provided <a href="https://github.com/ryoyakawai/WebMusicDevelopersJP/tree/master/codeLabs" target="_blank">tutorials(Web Audio/MIDI API)</a> to learn how to invent applications with using method in the Web Audio/MIDI API. Some attendees had finished the tutorials in 2 hours, and some people had started inventing application without to finish following tutorials.<br>
Let's see the applications from begginers!! (the images are linked to YouTube movie which is specified starting point)<br>

The draw bar organ which was invented by @kenkov. He had invented its tone generator, and musical keyboard parts are invented with using <a href="https://github.com/g200kg/webaudio-controls" target="_blank">webaudio-controls</a>.<br>

<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-01.png" start="5469" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

<br>
<br>
The next one is an application that using motion censor to play his original MIDIappy's voice by following the PC's motion. It was fun, because the MIDIappy's voice is so cute. 

<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-02.png" start="6364" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


These applications are invented beginners who learned APIs from tutorial in a few hours. From this fact, I think it is not too much to say that using these APIs are NOT so difficult.
If you are interested in these API's, I want you to challenge to invent applications.<br>
<br>
Topics from here is NOT beginners.<br>
The first one is invent application using hardware beyond the browser's functionality.


<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-03.png" start="7830" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>


</div>
There was two of them. One is the application that changing MIDI message to infrared light to control hardwre, and the other is create pulse sign by Web Audio API and send it to servo motor to control.<br>
<br>
The next one is a mascot, which is not certified by W3C, and it came out from this event. The name is "MIDIappy", which designed by @g200kg(he is one of an expert, not beginner.). The application is this one.<br>

<div>
  <youtube-play contentid="dCvuBz1FYWg" size="80%" imgsrc="{{ site.url }}/images/2014/01/20140120-webmusic-hackathon-yt-04.png" start="8513" autoplay="1" rel="0" controls="1" showinfo="0" allowfullscreen="1"></youtube-play>
</div>

He brought MIDIappy's figure which is created by 3D printer.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/01/20140120-midiapi.jpg" width="70%">
</div>

AMEI created MIDIappy labels, too. 
<div class="post-image-center">
  <img src="{{ site.url }}/images/2014/01/20140120-midiapi_sticker.jpg " width="70%">
</div>

Nobody knows what will happen in hackathon. Actually these Web Music Hackathon had lot of things happen, and Web MIDI API's mascot was came out at this moment. aThe ideas of applications are great and are unique, so I think attendees enjoyed hacking, and also enjoyed presentation time.
Web Music hackathon had not been scheduled yet, but we may will have Web Music Hackathon #3 soon. So I hope lots of attendees come to the event, and for beginners, do not hesitate to come to the event!!<br>
<br>
I will inform you about next event on <a href="https://groups.google.com/forum/#!forum/web-music-developers-jp" target="_blank">Web Music Developers JP@Google Groups</a>、<a href="https://plus.google.com/communities/111657869969887793180" target="_blank">Web Music Developers JP@Google+ Community</a>, so if you are interested in these event, please join the group.<br>
<br>
<br>
OkeyDokey, see you next time!!<br>
<br>
Ultimately, I want to say thank you very much for who came to event as tutor!!<br>
<br>

- <a href="//twitter.com/aike1000">@aike1000</a> (Keisuke Ai) ： Web Audio API、 Web MIDI API
- <a href="//twitter.com/g200kg">@g200kg</a> (Mr. Shinyagaito)： Web Audio API、 Web MIDI API
- <a href="//twitter.com/komasshu">@komasshu</a> (Kensaku Komatsu)：WebRTC
- <a href="//twitter.com/Tukimikage">@Tukimikage</a> (Yusuke Naka)：WebRTC

Thanks again!!<br>
<br>
(Next time, MIDIappy might come by cartoon-character costume.)<br>
<br>
P.S. Web Music Hackathon #2 is scheduled to be published magazine, Kogaku-Sha Monthly I/O of 2014/03(2014/02/18 on sale)

