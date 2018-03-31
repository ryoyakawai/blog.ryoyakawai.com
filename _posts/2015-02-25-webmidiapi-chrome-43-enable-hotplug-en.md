---
layout: post
title: Web MIDI API gets HotPlug Feature from Chrome M43(for Mac)
description: ""
modified: 2015-02-25
tags: [Web MIDI API, Web Music, Chrome]
image:
#  feature: abstract-3.jpg
#  credit: dargadgetz
#  creditlink: http://www.dargadgetz.com/ios-7-abstract-wallpaper-pack-for-iphone-5-and-ipod-touch-retina/
---
<div> </div>

<a href="/2015/02/webmidiapi-chrome-43-enable-hotplug.html" target="_blank">日本語</a>

Web MIDI API on Chrome gets new feature from M43(You can try with Canary from today!!).
That feature is Hot-Plug. So, the Chrome immediately recognizes MIDI device's connection or disconnection. The connection/disconnection of MIDI device is informed by event. Before M43, Chrome does not recognize the MIDI devices are connected after requestMIDIAccess() is used. I think to add this feature is a big progress!!
In the spec, Hot-Plug feature is written as "onstatechage" in <a href="http://webaudio.github.io/web-midi-api/#idl-def-MIDIAccess" target="_blank">MIDIAccess Interface</a> and <a href="http://webaudio.github.io/web-midi-api/#idl-def-MIDIPort" target="_blank">MIDI Port Interface</a>. Let's take a look at how to write code.


```javascript
navigator.requestMIDIAccess({"sysex":true}).then(successCallback, errorCallback);
function successCallback(access) {
      access.onstatechange=function(event){
          console.log(event);
          // event.port に 接続/切断 されたMIDI機器が入っています。
      }
}
function errorCallback(msg) {
      console.log("[ERROR] ", msg);
}
```

<div class="post-image-center">
  <img class="image-bordered" src="{{ site.url }}/images/2015/02/20150225-midi-device-property.png" width="70%">
</div>


The device information(MIDIPort) which is connected/disconnected is set in port. And its status is coming into port.state. port.state has 3 status in below.
- disconnected: the device, which is connected , is disconnected
- connected: the device is connected, but does NOT accept data transfer
- opened: the device is connected, and ready to transfer data
<br>
For MIDIPort, code and state are exactly same with MIDIAccess. When the event is attached to MIDIPort, connection/disconnection will be detected and informeb by event.<br>
<br>
This update would help lots of application which is using Web MIDI API and improve user experience!!!
