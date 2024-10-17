document.getElementById('save-button').addEventListener('click', () => {
    const captionsEnabled = document.getElementById('captions-checkbox').checked;
    const audioDescriptionsEnabled = document.getElementById('audio-descriptions-checkbox').checked;
  
    // Save settings to Chrome storage
    chrome.storage.sync.set({
      captionsEnabled: captionsEnabled,
      audioDescriptionsEnabled: audioDescriptionsEnabled
    }, () => {
      console.log('Settings saved.');
    });
  
    // Send message to content script to apply settings
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: applySettings,
        args: [captionsEnabled, audioDescriptionsEnabled]
      });
    });
  });
  
  // Load the current settings when the popup is opened
  chrome.storage.sync.get(['captionsEnabled', 'audioDescriptionsEnabled'], (data) => {
    document.getElementById('captions-checkbox').checked = data.captionsEnabled || false;
    document.getElementById('audio-descriptions-checkbox').checked = data.audioDescriptionsEnabled || false;
  });
  
  function applySettings(captionsEnabled, audioDescriptionsEnabled) {
    // Function to be injected in the content script
    window.postMessage({
      type: 'APPLY_SETTINGS',
      captionsEnabled: captionsEnabled,
      audioDescriptionsEnabled: audioDescriptionsEnabled
    }, '*');
  }
  