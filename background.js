chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ captionsEnabled: false, audioDescriptionsEnabled: false });
    console.log('Default settings saved.');
  });
  