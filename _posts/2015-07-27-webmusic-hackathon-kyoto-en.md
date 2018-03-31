---
layout: post
title: Web Music Hackathon &#35;4 @Kyoto with GDG Kyoto
description: ""
modified: 2015-07-27
tags: [Web MIDI API, Web Music Hackathon, Web Music, Web Audio]
---
<div> </div>
<a href="/2015/07/webmusic-hackathon-kyoto.html">日本語</a><br>
<br>

On July 25th 2015, Web Music Hackathon #4 was ran with GDG(Google Developer Groups) Kyoto at Kyoto. <a href="http://amei.or.jp/" target="_blanl">AMEI(Association of Musical Electronics Industry)</a> provided digital musical instruments as usual for this hackathon.  We thank AMEI for supporting this hackathon all the time.
This time <a href="https://www.krp.co.jp/" target="_blank">KRP(Kyoto Research Park)</a> provided us a great room at great location at Kyoto! We also deeply thank for this help.<br>
<br>

At the hackathon, 10 applications were developed/hacked by over 30 attendees, and 3 applications were developed/hacked by tutors. At web music hackathon always gives developers funny development environment because we can listen lots of sound, and also can listen singing by Pocket-Miku(singing device). Definitely, this time was not an exception. Especially, KORG first provided us little Bits Synth Kit with MIDI modules at first time, so the room was full filled with lots of analog synth sounds sometime🙂

<a href="https://plus.google.com/events/gallery/ccabrg04tjnd49scbutbojq3hv4" target="_blank">Picture at the hackathon is here</a>
<br>
<br>
Ok, let me introduce what happend at the hackathon along the schedule of that day.<br>
<br>
At first, I introduced our three of great tutors, who are <a herf="//twitter.com/g200kg" target="_blank">@g200kg</a>, <a href="//twitter.com/aike1000" target="_blank">@aike1000</a> and <a href="//twitter.com/sascacci" target="_blank">@sascacci</a>, and they gave us presentation with several great demos.<br>

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-01.jpg" width="50%">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-02.jpg" width="50%" style="margin-left:10px;">
</div>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-03.png" width="50%">
</div>

At presentation of @aike1000, he looked like using his iPhone to turn the slides. At the end of his presentation he revealed that his slides is created by HTML5 slide, and also he is using MIDI over Bluetooth LE and <a href="http://www.taktech.org/takm/WebMIDIBrowser/Web_MIDI_Browser.html" target="_blank">Web MIDI API with Web MIDI browser on iOS platform</a> to turn the slides. Day after the hackathon, he published the application on twitter. (the tweet is in Japanese, though..) [Source Code]

<div class="post-image-center">
<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">Web Music ハッカソン #4 @京都 おつかれさまでした。今日使ったMIDIでプレゼンめくるリモコンアプリはこれ。現状はWeb MIDI Browserが必須かも。<a href="https://t.co/lafd44wTtO">https://t.co/lafd44wTtO</a><a href="https://twitter.com/hashtag/webmusic?src=hash&amp;ref_src=twsrc%5Etfw">#webmusic</a> <a href="https://twitter.com/hashtag/webmusicjp?src=hash&amp;ref_src=twsrc%5Etfw">#webmusicjp</a></p>&mdash; aike (@aike1000) <a href="https://twitter.com/aike1000/status/624942651343671297?ref_src=twsrc%5Etfw">July 25, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

After tutors' presentation is team building. 7 themes were picked up by the summary of questionnaire of "What would you like to hack at this hackathon?", and that answer is required when attendees RSVP.<br>
7 themes are following: 

- Communication
- Use with Hardware(includes MIDI devices)
- Emulate things(existing hardware or software port to Web platform)
- Use with Graphics
- Building libraries
- For beginners

At first, attendees divide into these themes of groups, and them they have discussion what to hack today before they start hacking in the group. During the discussion, changing theme is one of the choices.<br>

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-04.jpg" width="80%">
</div>
<div class="post-image-center">
Hacking time!!
</div>

Result of the discussion, 2 themes were reduced. Following  list is the final themes.

- Communication
- Use with Hardware(includes MIDI devices)
- Emulate things(existing hardware or software port to Web platform)
- Use with Graphics
- For beginners

At 4:30 pm, hacking time is over, and presentation time came. At this moment, most of groups said "we would like to more time..." actually.


By the way, we prepared learning materials for both Web Audio and Web MIDI by Google's Codelab format. (These are only for Japanese now, but I will translate them into English ASAP.)

- <a href="http://webmusicdevelopers.appspot.com/codelabs/webaudio/index.html" target="_blank">Codelab: Web Audio</a>
- <a href="http://webmusicdevelopers.appspot.com/codelabs/x-webmidi/index.html">Codelab: Web MIDI</a>

Now I explain the applications created at hackathon one by one.
<br>

## Emulate things

### Reaktor on Web
by <a href="https://twitter.com/fukuroder" targt="_blank">@fukuroder</a>

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-fukuroder.jpg" width="90%">
</div>

Emulates Reaktor on Web. This application gives us an ability to synthesize voices and to add sound effect with connecting boxes in the GUI. This application also had share feature by URL.
<br>
<a href="http://fukuroder.sakura.ne.jp/z-1" target="_blank">Live Demo</a>


### Tuner
by <a href="//twitter.com/moutend" target="_blank">@moutend</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-tuner.jpg" width="90%">
</div>

Guitar tuner on Web. @moutend says that "Hardware tuner sometimes not easy to adjust tune by look.", he solved these weakness of hardware tuner by this application: Uses big letter, Play sound to tune by sound without looking. The number located next to letter ("D" in the picture above) is representing how much cents are different from the right frequency.<br>
But he says that it still have bugs in detecting pitch sometime.....


## Use with Hardware

### Synthesizer built with ScriptProcessor node that can be manipulated by acceleration sensor in iPhone
by Masaki Ono
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-sendor.jpg" width="90%">
</div>
Basic voice is created with Oscillator synced and the implementation is using ScriptProcessor Node. Adding to that, the voice is manipulated by acceleration sensor in iPhone. So frequency is updated when iPhone is shaked.(The picture above is the picture of shaking iPhone. But we can not see because iPhone is shaked too fast...)

### GamePad to MIDI by MK
by Kaki
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-guitar.jpg" width="90%">
</div>
Getting input message from gamepad with gamepad API. Gamepad input is converted to MIDI message, then sending MIDI message to MIDI tone generator(Roland JD-Xi) to play voice. But only "pitch bend down" is activated somehow.

### Little Miku
by M.Kosuga
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-littlebits-miku.jpg" width="90%">
</div>
The output from littleBit send to Pocket-Miku through Web browser. The way of defining pitch is counting input signal in each 500ms. 

### Leap Mothin to Audio
by <a href="//twitter.com/hiroqn" target="_blank">@hiroqn</a>, <a href="//twitter.com/sankichi92" target="_blank">@sankichi92</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-leapmotion.jpg" width="90%">
</div>
All features, which are tone generator and parser of Leapmotion, is built on top of Electron(Cross-Platform Application build Engine for Desktop Application). No UI, but play tone generator by input of Leapmotion. And the interesting feature of changing filter by gesture is also implemented.

### Scratch
by kaisei, yokmama
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-scratch.jpg" width="90%">
</div>
A game of beating zombies. Game engine is build on top of Scratch, and MIDI inputs from Web MIDI API is used to change zombies moving pattern and controlling the number of zombies. Hacking by parent and child is the first time since Web Music Hackaton is started.


## Use with Graphics

### Sequencer by grid system
by <a href="//twitter.com/ussy9" target="_blank">@ussy9</a>、<a href="//twitter.com/_likr" target="_blank">@_likr</a>、<a href="https://github.com/pastelInc" target="_blank">pastelInc</a>、<a href="//twitter.com/armorik83" target="_blank">@armorik83</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-graphic.jpg" width="90%">
</div>
Sequencer by grid system. The application allow to update dots in grid system in realtime with several users. Realtime update mechanism is using "Firebase". And during the play, sphere in the left to of the application turns around, and the color of the sphere changes by the kind of playing chord. (The picture is when they had a trouble during their presentation. Realtime synchronization was not working correctly somehow. The problem would be network problem, that is access point of wi-fi was used for video streaming and the access point used for this demo was same.)<br>
<br>
This application has playing mode to change scale(minor, major, blues, etc.) automatically.<br>
Web MIDI API, Angular JS, Firebase, SVG, WebGL are used in this application.<br>
<br>
This team published slide of secret story to build this application. (only in Japanese)
<br>
<br>
<div class="post-image-center">
<script async class="speakerdeck-embed" data-id="c396c1fd40214eaca383aad6716a3bb5" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
</div>

## Communication

### Distributed Sequencer
by <a href="https://twitter.com/mohayonao" target="_blank">@mohayonao</a>, <a href="https://twitter.com/esperia09" target="_blank">@esperia09</a>, <a href="https://twitter.com/isocoda" target="_blank">@isocoda</a>, <a href="https://twitter.com/yasuraok" target="_blank">@yasuraok</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-ditributed-sequencer.jpg" width="90%">
</div>
Several clients which has tone generator of Web Audio are connected to servers over WebSocket, and those clients plays with recieving message from server. So it enables to orchestrate with clients which are connected to server. <br>
At their presentation, there were a network problem. The problem might be this, access point was used for video streaming and the access point used for this demo was same.<br>
This team is also providing detailed information in leader's blog. (Only in Japanese)<br>

<div class="post-image-center">
<blockquote class="twitter-tweet" data-lang="en"><p lang="ja" dir="ltr">はてなブログに投稿しました <a href="https://twitter.com/hashtag/%E3%81%AF%E3%81%A6%E3%81%AA%E3%83%96%E3%83%AD%E3%82%B0?src=hash&amp;ref_src=twsrc%5Etfw">#はてなブログ</a><br>Web Music ハッカソン で Tシャツ をもらいました - 音の鳴るブログ<a href="http://t.co/ZWlwJ6rJ0N">http://t.co/ZWlwJ6rJ0N</a> <a href="http://t.co/JSEpigNdx1">pic.twitter.com/JSEpigNdx1</a></p>&mdash; モハヨナオ (@mohayonao) <a href="https://twitter.com/mohayonao/status/625486262770601984?ref_src=twsrc%5Etfw">July 27, 2015</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>


## For beginners

### First step of Web MIDI API
by <a href="//twitter.com/kubotaku1119" target="_blank">@kubotaku1119</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-evy1.jpg" width="90%">
</div>
He explained easiness of implementing of Web MIDI API. Actually, it was the first time to use Web MIDI API.


## Tutors

### Foot Drum
by <a href="//twitter.com/sascacci" target="_blank">@sascacci</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-foot-drum.jpg" width="90%">
</div>
Developed application is using KORG CLIPHIT (Make any surface electric drum only with clipping trigger) and Roland TM-2(tone generator especially for Hybrid Drum with trigger) . Connect 2 of CLIPHIT trigger to TM-2, and attach the each clip to your each foot, and TM-2 is also connect to browser by MIDI. So with tapping feet, making drum sound by sending message to TM-2, and that signal is also send to browser by MIDI, eventually browser is able to update graphics in browser window by recieved the MIDI messages.<br>
From his work(he works for Roland), he said "Please use the clip of KORG's CLIPHIT with Roland's TM-2 at your own risk."  This notice made attendees' laugh.<br>


### Playable Rhythm Machine
by <a href="//twitter.com/aike1000" target="_blank">@aike1000</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-rhythm-machine.jpg" width="90%">
</div>
Sometimes, sequence time line of rhythm machines is linear even if the sequence is set to play as loop. Since it is not so intuitive, so what he developed is rhythm machine which time line is shaped to round. Waveform is able to locate on the circumference.

### LiveBeats MIDI Plugin
by <a href="//twitter.com/g200kg" target="_blank">@g200kg</a>
<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-live-beats.jpg" width="90%">
</div>
LiveBeats is the web application that create music by inputting music recipe(rhythm patterns, melodies and so on) from application's command line. This application is also developed by him. This time he added MIDI input feature, and that feature allow users to play a music by MIDI devices along with the music created by command line. In the picture, he is playing a like playing the guitar.<br>
<br>
<br>
After these presentation, we(staff) selected 3 excelent applications by these three criteria of "Idea", "Technical" and "perfection". Actually, the selection process was difficult, because every application has great idea, and high perfection.
- **Scratch** by kaisei, yokmama：The idea of the game is great, and  we liked the challenge of collaborating child with parent to build one application.
- **Sequencer by grid system** by @ussy9、@_likr、pastelInc、@armorik83：With using several technologies, realtime and collaboration sequencer was high perfection. And the feature of automatic scale changer was great, too. The application highly satisfies all of the criteria.
- **Distributed Sequencer** by @mohayonao, @esperia09, @isocoda, @yasuraok：Fantastic Idea, and technically high level, and also perfection is high.  The application also highly satisfies all of the criteria.



## Conclusion
It was 4th time of Web Music Hackathon. Idea, technically, and perfection is getting higher and higher in each time. I hope I would like to run another one. I am looking forward to see you at next time!!


## Acknowledgments
This was first time to run an event out side of Kanto area for me. So there are some worries, adding to that a typhoon might direct hit to Kyoto at the day of hackathon. (Eventually, it was not, but it was so close.) But almost all attendees who registered had joined the event and hacking all together. It was awesome things, and I am deeply appreciate that.<br>
And to run hackathon in Kansai area, I want to say thank you for Ms. Kurano of GDG Kyoto, Mr.Tada and Mr. Noda of GDG Kyoto, and all of the staff from GDG. And also really appreciate to Mr. Terado of KRP for providing us a big and great room. Thank you very much!!<br>
Finally, I want to say thank you for @aike1000 to join the hackathon from Sapporo(Hokkaido), and @g200kg from Yokohama as tutor.<br>
I think this hackathon is run by attendees' passion to build web music applications. So, please keep building your web music applications!!<br>
Thank you very much.


## おまけ
I did sightseeing in Kyoto day after hackathon. 
I visited 33-Gendo where <a href="https://goo.gl/gHEcZk" target="_blank">one thousand of statue of Goddess of Mercy</a> is displayed. MIDIAppy of this time was drawn in reference to the statue by @g200kg. I was amazed by one thousands of statues.(picture below is Kinkaku-ji)

<div class="post-image-center">
  <img src="{{ site.url }}/images/2015/07/20150725-webmusic-hackathon-kyoto-kinkaku-ji.jpg" width="100%">
</div>

