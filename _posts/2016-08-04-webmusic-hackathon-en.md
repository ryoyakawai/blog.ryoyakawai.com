---
layout: post
title: Web Music Hackathon &#35;5 @Tokyo
description: ""
modified: 2016-08-04
tags: [Web MIDI API, Web Music Hackathon, Web Music, Web Audio]
image:
#  feature: 2016/08/20160804-webmusic-hackathon-01.png
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

<a href="/2016/08/webmusic-hackathon.html">日本語</a><br>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-01.png" width="100%">
</div>

Web Browser is becoming a music application’s platform. That platform consists from two APIs such as Web Audio API and Web MIDI API. 

- **Web Audio API**: enables developers to build signal processing applications such as Musical Instruments, software DJ console and so on
- **Web MIDI API**: enables developers to connect external MIDI devices to your browser

For now, Web Audio API is supported by almost all of web browser, and Web MIDI API is only supported by Google Chrome. (Firefox is reviewing Web MIDI API source code now, it means it will be available on Firefox shortly!!! : as of Aug 3rd 2016)

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-02.jpg" width="45%">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-03.jpg" width="45%" style="margin-left:5px">
</div>

“VJ and DJ” was the theme for the Hackathon this time. The hackathon does not have any themes before, but great apps had been hacked at the hackathon, so we wanted to try hack not only application but live performance by web applications this time. So the theme was decided as "VJ and DJ".<br>
This time 5 great apps were chosen as great app!! Let’s take closer look at hacked app one by one from the greatest app.

## [1st] “Cloud Synthesizer” developed by Tomasz 
All of client that displaying the application becomes part if the synthesizers, and those are controlled by master application which external MIDI devices are connected. Technically, control message is synced through Firebase. At this demo, clients are divided into 4 groups, and each groups are playing different sounds.<br>
With this application, client of audience is part of instruments, so speaker may not need to have live performance and audience is not audience anymore.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-04.png" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-01.png" height="350px" start="5731" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [2nd] “nanoBlocks” developed by nas
Wavetable synthesizer played by multi touch feature. Each touch controls filters, oscillators’ volume, and pitch by doing up and down each functionality boxes in the touch screen. With using this application, you can easily add new cool sound into your DJ play.
[<a href="https://stereomatics.github.io/nanomorphs/" target="_blank">Live Demo</a>]

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-05.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-02.png" height="350px" start="5517" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [3rd] “Trend Sampler” developed by Takashi Mizuhiki
Basically, the app is step sequencer with sampler, but the sounds of the sampler is the voice which is made from Google trend words. And these voices are created by "say command" in Mac OS, and words are obtained from internet automatically. Great point of this app is that sending MIDI clock and recieving MIDI clock is supported. So it is easy to play along with DAW or external MIDI devices. <br>
So eventually, trend word can be filled in to any DJs play really easily.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-06.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-03.png" height="350px" start="3743" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [4th] “Music Tweet” developed by Tomohiro IKEDA
Basically MML parser of Chrome extension, but parsing MML in the Twitter tweet. And cool feature is that this extension is enabled play the synthesizer of external URL with using WebSocket. This extension is able to parse and play MML only by selecting MML in timeline. It might be great work on taking memo of phrase that you are inspired from something. It remind me Yamaha’s QY series sequencer.<br>
 [<a href="https://github.com/Korilakkuma/Music-Tweet" target="_blank">GitHub</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-07.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-04.png" height="350px" start="5257" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [5th] “Vote” developed by mohayonao
The clients which runs this application becomes controller, and remotely connected synthesizer is played by manipulation of those clients. This application is also using Firebase to send controll message. With using this application at live performance, performer is able to perform with audience and to know how much audience have excited by the performance in real time.<br>
[<a href="https://wmh5-vote.firebaseapp.com/" target="_blank">LiveDemo</a>] [<a href="https://github.com/mohayonao/wmh5-vote" target="_blank">GitHub</a>] [<a href="https://www.youtube.com/watch?v=C3lGJdGYD4E" target="_blank">PerformanceVideo</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-08.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-05.png" height="350px" start="2400" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [Roland Prize] “Communication by making phrase” developed by Team chaco
Collaboration step sequencer. Every client become controller and synthesizer, and all of them are synced by Firebase. So everybody on the application is able to make same phrase together by collaboration, even if they are not staying in same place.
[<a href="https://github.com/armorik83/wmh5-team-chaco" target="_blank">GitHub</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-09.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-06.png" height="350px" start="3031" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [Firebase Prize] “Real time automatic pattern generation arpeggiator for Drum”
Drum pattern generator, and the pattern is controlled by MIDI controller. This pattern generator is sending clock to external MIDI devices to collaborate other synthesizer. This application is really natural tool for DJ playing. Applications from this hackathon tend to become real web application, but this idea is natural/legacy DJ tool on browser.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-10.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-07.png" height="350px" start="3317" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## ”Configuration App for DIY Touch Senser MIDI device(mi:muz:tuch)”  developed by D.F.Mac. @TripArts Music
Configuration app for DIY MIDI device. App was hacked at this hackathon, and the device was hacked by his hobby. This DIY device allow user to create touch sensor application easiy.
He is the one of the guy who has been joining all of Web Music Hackathon, and he developed initial application/device at #2. Watch <a href="https://youtu.be/z_TGofN7wv8?t=8m16s" target="_blank">this video</a>what we can do with this application/device can do.  <br>[<a href="http://mz4u.net/tuch/" target="_blank">LiveDemo</a>] 
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-11.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-08.png" height="350px" start="953" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## “Manipulate DIY light devices by Web MIDI API” developed by Kazuyuki Eguchi
Whole system is that manipulating independent devies, a.k.a IoT devices, by MIDI controller connected to browser using Web MIDI API. And those controll messages send through internet.<br>
All of the controlled devices are light related devices, such as multi color light bulb(Hue), revolving light, tape LED and EL wire.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-12.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-09.png" height="350px" start="1375" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>

## “ImproVJ” developed by team ImproVJ
The concept of this application is making music by various input. Let’s take image for example. Image have lots of informations as color, and assume blur the image. After blur the image, some area may change to vivid color. Then play that blur image as step sequencer to assuming NoteOn as vivid color area. This happen in real time. So, the application does real time automatic music creation. In this example, eventually the system is automatic VJ system since image are given, and music will be created by that image.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-20.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-10.png" height="350px" start="1696" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>

## “WONDER.NET” developed by kirinsan.org
Reflect motion from camera to image effect, and sound effect. Basic idea of this application is also auto generated video for DJ. Cool feature of this application is that sound effect is created by detected motion by camera, and that effect reflects to sounds.<br>
[<a href="https://kirinsan-org.github.io/wmh2016" target="_blank">LiveDemo</a>] [<a hrefr="https://github.com/kirinsan-org/wmh2016" target="_blank">GitHub</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-21.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-11.png" height="350px" start="2132" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>

## “dance live” developed by nakaG
DJ get accelerometer data from audience’s mobile phone in real time. And those DJ decide a way to use those data. In this demo, those data is assigned to control sound effect type and value. So the application indicating one of the way to collaborate with audience by obtaining extra data from audience and use that for material to make music for DJ.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-22.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-12.png" height="350px" start="2769" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>

## “SPKR” developed by K3
Basic idea of this application is that using smart phone speaker of audience for delivering DJ's music. So DJ is able to play remotely, and also big speaker does not require for DJ performance. However, development of the application was not complete during hackathon. This team had been struggling to run application that they wanted to refer, and time was up.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-23.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-13.png" height="350px" start="4300" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## “Mobile Music Jammer” developed by Team Nolick
Connecting number of client(PC, mobile phone) by WebSocket for having music session. In this demo, using MIDI keyboard, and mobile device to manipulate and generate  background VJ. This application allows audience to join along with DJ/VJ performance from audience's seat.
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-24.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-14.png" height="350px" start="4597" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## “DJHUB” developed by team DJHUB
Initial idea is that recording DJ performance as format which has time management feature, Standard MIDI File for example, and also isolated from music. And to save/share/re-produce that file for anybody who wants to re-produce that performance. Key point of this idea is practical, that is not to be required to take care of copyright by isolating DJ performance from music.<br>
<br>
However, the application development had not been completed during the hackathon. <br>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-25.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-15.png" height="350px" start="4597" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>

<br><br>
These 15 applications are the application which is developed by attendees at Web Music Hackathon #5.<br>
<br>
But there are Bosses (it is just like a video game does) around Web Music community in Japan. Bosses support attendees during hacking time, but they usually also develop application for having fun. And three Bosses had developed their application, so let me introduce these applications, too.


## [BOSS] “3D Sequencer” developed by @aike
Sequencer GUI is usually 2D, but this application is providing GUI as 3D. "Seeing is believing" kind of application. So, please take a look at  <a href="https://www.youtube.com/watch?v=M5l1q8jTTBA" targert="_blank">Performance Video</a>. Super Cool!!
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-26.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-17.png" height="350px" start="285" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [BOSS] “LiveBeats” developed by @g200kg
LiveBeats is the application that change your computer to musical instruments. And this time, speaking feature, by web speech synthesis, is added. I love this kind of live coding musical instrument application. This application is also "Seeing is believing" kind of stuff.<br>
[<a href="http://g200kg.github.io/LiveBeats/" target="_blank">LiveDemo</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-27.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-17.png" height="350px" start="285" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>


## [BOSS] “Growl Bass” developed by @toyoshim 
There are two application. One is create sound from particles. [<a href="https://preview.c9users.io/toyoshim/share/MIDIOutputAudioNode/test/manual/edmcon.html" target="_blank">LiveDemo</a>],
The other one is automatic growl sound creation application. Latter one is supporting MIDI output, so it is able to play with any other synthesizers. [<a href="http://yuri.twintail.org/experiments/tmalib/example/waypoints_osc.html" target="_blank">LiveDemo</a>]
<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-28.jpg" width="60%">
</div>
<div>
  <youtube-play contentid="0loDyq3B894" imgsrc="{{ site.url }}/images/2016/08/201608-18.png" height="350px" start="726" autoplay="1" rel="0" controls="0" showinfo="0"></youtube-play>
</div>
<br>

These are the all about applications that were developed at hackathon this time.<br>
<br>
This was the 5th time of Web Music Hackathon, and I am feeling that all of the applications which were developed at this time are really high level than any other time. I think at least two factors exisit to make this happen. One is “Web Audio/MIDI API became well known API than before”, the other is “Pre-meetup”. Pre-meetup was a big challenge for hackathon this time. Pre-meetup had held in 4 days before the hackathon for about 3 hours starting at 7pm. Aim of pre meetup was "team building". Well, not all of the team was build at the pre meetup, however I heard from several attendees who built group at pre-meetup that "Our team could start hacking quickly at the hackathon morning, because ice breaking had already finished at pre-meetup." <br>
I have learned that having small pre event before the actual event might be one of the important factors to obtain much higher level achievements to everybody who join the event.

<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-29.jpg" width="45%">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-30.jpg" width="45%" style="margin-left:5px">
</div>
<div class="post-image-center">
Photo from Pre-Meetup on Tuesday night
</div>

I would like to say thank you for all of attendees who made effort to develop applications. And also I would like to say thank you for all who support entire event.<br>
Such as: 

- Pre-meeup was supported by Seki-san from Hackcamp corporation and Lentz-san from LIG corporation
- Hackathon was supported by Google(Venue and facilities) and AMEI(Musical Instruments) 
- Judge: Atsushi Tadokoro, Tatsuya Shinyagaito, Keisuke Ai, Masakazu Watanabe
- After Party will be supported by Red Bull(venue and facilities), Lentz-san and Edy-san(direction)


<div class="post-image-center">
  <img src="{{ site.url }}/images/2016/08/20160804-webmusic-hackathon-attendees.jpg" width="90%">
</div>

Web Music Hackathon might be back. So please stay tuned!! See you next time!!
