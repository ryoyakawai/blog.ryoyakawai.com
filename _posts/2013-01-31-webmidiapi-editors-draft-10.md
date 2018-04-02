---
layout: post
title: Web MIDI API (W3C Editor's Draft 10 January 2013)
description: ""
modified: 2013-01-31
tags: [Sepc, Web MIDI API, Web Music]
---
<div> </div>

12月5日にもレビューしましたが、アップデートされていますので再度レビューします。<br>
<a href="http://webaudio.github.io/web-midi-api/" target="_blank">仕様はここを参照</a>しています。(hogeは前回のレビューからの変更点です。漏れがあったらごめんなさい><) <br>
<br>
最初に全体的な構成です。<br>
(i)がinterface、(m)がmethodを示しています。また「->」の意味ですが、例えば「A -> return B」だとすると「Aを実行すると戻り値としてBがくる」という意味で使っています。<br>
<br>

```
(i)Navigator
   (m)requestMIDIAccess -> return void;
  (i)MIDIAccess
   (m)getInputs -> return sequence<(i)MIDIPort>
   (m)getOutputs -> return sequence<(i)MIDIPort>
   (m)getInput -> return (i)MIDIInput
   (m)getOutput -> return (i)MIDIOutput
  (i)MIDIPort
  (i)MIDIInput
  (i)MIDIOutput
   (m)send -> return void
  (i)MIDIEvent
````

次に(i)のついているinterfaceを説明します。

```
Navigator
    interface Navigator {
      void requestMIDIAccess(successCallback, optional errorCallback)
    }
  MIDIAccess
    (UserAgentに接続されているMIDI機器のリストアップ、またアクセスを可能にします)
    interface MIDIAccess {
      sequence<MIDIPort> getInputs();
      sequence<MIDIPort> getOutputs();
      MIDIInput          getInput(MIDIPort or DOMString or short target);
      MIDIOutput         getOutput(MIDIPort or DOMString or short target);
    }
  MIDIPort
     (MIDIのInput/Outputポートで、名前、製造会社、MIDIポートのタイプ(input/output)、ユニークIDを提供します)
    interface MIDIPort {
      DOMString    id;
      DOMString?   manufacturer;
      DOMString?   name;
      MIDIPortType type; // input or output
      DOMString?   version;
    }
  MIDIInput
     (onmessageはMIDIメッセージを取得した時のEventHandlerを定義します)
    interface MIDIInput : MIDIPort {
      attribute EventHandler onmessage;
    }
  MIDIOutput
    (MIDIPortに組み込まれていて、またMIDIメッセージをOutputポートへ送信するメソッドを提供します)
    interface MIDIOutput {
      void send(sequence<octet> data, optional double timestamp);
    }
    (※octetとはココで定義されている通りで「[0, 255]の値をとる符号なしInteger」です)
    (※SysExのような長いMIDIデータを効率的に渡す手段としてUint8Arrayも使用可能です)
  MIDIEvent
       MIDIInputのonmessage handlerに渡されたEventオブジェクトで、
       MIDI data byteに加えてtimestampも含まれています。
    interface MIDIEvent: Event {
      attribute double      receivedTime;
      attribute Uint8Array  data;
    }
    (※Uint8ArrayのdataにはMIDIメッセージが1つずつ入ってきます)
```

最後に(m)のついているmethodの説明です。

```
  requestMIDIAccess(successCallback, optional errorCallback)
        (ユーザーシステムにあるMIDI機器のリスト、アクセスを取得します)
        successCallback: MIDI機器が取得できた場合のCallback
        errorCallback: なんらかの理由でMIDI機器を取得できなった場合のCallback
  getInputs()
        引数なし
        利用可能なMIDI input port[(i)MIDIInput]のリストを配列で返す
  getOutputs()
        引数なし
        利用可能なMIDI output port[(i)MIDIOutput]のリストを配列で返す
  getInput(target)
        target: (i)MIDIPort、または、(i)MIDIPortのid[DOMString]、
                         または、 getInputs()で取得したindex[short]
  getOutput(target)
        target: (i)MIDIPort、または、(i)MIDIPortのid[DOMString]、
                          または、getOutputs()で取得したindex[short]
  send(sequence<octet> data, optional double timestamp)
        data: sequence<octet> 
        timestamp: double
```
といった仕様になっています。<br>
<br>
前回のレビューとの差分をリストアップすると以下の通りです。

**Method名の変更**

- getMIDIAccess() → requestMIDIAccess()
- enumerate{Inputs, Outputs}() → get{Inputs, Outputs}()

**Attribute名の変更**

- (i)MIDIPort: fingerprint → Id

**型の変更**

- data(@(i)MIDIOutput)): Uint8Array → sequence<octet>
- timestamp: DOMHighResTimeStamp → double (millisec order)
- onmessage(@(i)MIDIInput): callback → EventHandler

以下のようなOpen Issueもありますので、今後も仕様の更新は続くはずです。

- <a href="https://github.com/WebAudio/web-midi-api/issues/45" target="_blank">#45 Virtual MIDI ports</a>
- <a href="https://github.com/WebAudio/web-midi-api/issues/30" target="_blank">#30 connect and disconnect events</a>
- <a href="https://github.com/WebAudio/web-midi-api/issues/1" target="_blank">#1 MIDIEvent lacking constructor</a>
- <a href="https://github.com/WebAudio/web-midi-api/issues/2" target="_blank">#2 merge getInput, getOutput -> getPort() or getPortById()</a>
- <a href="https://github.com/WebAudio/web-midi-api/issues/3" target="_blank">#3 Define asecurity moderl for rewuesting access to the MIDIAccess interface</a>
