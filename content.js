window.addEventListener('message', (event) => {
    if (event.data.type === 'APPLY_SETTINGS') {
      const { captionsEnabled, audioDescriptionsEnabled } = event.data;
  
      if (captionsEnabled) {
        enableCaptions();
      } else {
        disableCaptions();
      }
  
      if (audioDescriptionsEnabled) {
        enableAudioDescriptions();
      } else {
        disableAudioDescriptions();
      }
    }
  });
  
  function enableCaptions() {
    const videoPlayer = document.querySelector('video');
    const tracks = videoPlayer.textTracks;
  
    if (tracks) {
      for (let i = 0; i < tracks.length; i++) {
        if (tracks[i].kind === 'captions' || tracks[i].kind === 'subtitles') {
          tracks[i].mode = 'showing';
        }
      }
    }
  }
  
  function disableCaptions() {
    const videoPlayer = document.querySelector('video');
    const tracks = videoPlayer.textTracks;
  
    if (tracks) {
      for (let i = 0; i < tracks.length; i++) {
        tracks[i].mode = 'disabled';
      }
    }
  }
  
  function enableAudioDescriptions() {
    const videoPlayer = document.querySelector('video');
    const speechSynthesis = window.speechSynthesis;
    const description = "Audio description: Scene depicts a busy street in New York with a yellow taxi moving swiftly through the traffic.";
  
    const utterance = new SpeechSynthesisUtterance(description);
    speechSynthesis.speak(utterance);
  }
  
  function disableAudioDescriptions() {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel();
  }
  