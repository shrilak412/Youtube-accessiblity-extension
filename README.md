YouTube Accessibility Features - Browser Extension
This project is a Chrome browser extension designed to enhance accessibility on YouTube by providing users with the ability to toggle closed captions and dynamically generated audio descriptions. The extension helps make YouTube more inclusive for users with hearing or visual impairments.

Features
Real-Time Toggling of Captions: Easily enable or disable YouTube's closed captions while watching videos.
Audio Descriptions: Dynamically generate and play audio descriptions using the Speech Synthesis API to narrate video scenes for visually impaired users.
Intelligent Content Recognition: Automatically detect when a video requires accessibility features and apply them accordingly.
User Preference Persistence: User settings (captions and audio descriptions) are saved across sessions using Chrome’s storage and background scripts, providing a personalized experience.
Technologies Used
JavaScript: Core logic for enabling/disabling accessibility features.
HTML/CSS: For building the extension’s popup UI.
Chrome APIs: To interact with YouTube’s video player and manage storage and background operations.
Speech Synthesis API: To provide audio descriptions for visually impaired users.
Installation
To install and test the extension locally:

Clone or download the project:

bash
Copy code
git clone https://github.com/your-username/youtube-accessibility-extension.git
Load the extension in Chrome:

Open Chrome and navigate to chrome://extensions/.
Enable Developer mode.
Click Load unpacked and select the project folder.
Test on YouTube:

Visit any YouTube video.
Click on the extension icon in the Chrome toolbar to open the popup.
Enable or disable captions and audio descriptions as needed.
How It Works
Popup Interface: The user interacts with the popup to enable or disable captions and audio descriptions. The extension stores these preferences using Chrome’s storage.sync to ensure the settings persist across sessions.
Content Script: The content script interacts directly with YouTube's video player, enabling or disabling captions and generating audio descriptions as requested.
Background Script: Manages the storage of user preferences, ensuring a smooth experience even after the browser is closed.
Files in the Project
manifest.json: The extension's manifest file, defining permissions, content scripts, and the popup interface.
popup.html: The HTML file for the popup interface.
popup.js: The JavaScript logic that manages user settings in the popup.
content.js: The content script responsible for applying accessibility features to YouTube videos.
background.js: A background script to handle user preferences across browser sessions.
styles.css: Styling for the popup.
Future Improvements
Support for More Accessibility Features: Add features like adjusting text size or color contrast for better visibility.
Platform Support: Expand the extension to work on other video platforms like Vimeo or Dailymotion.
Advanced Audio Descriptions: Implement a more advanced speech recognition model for generating richer audio descriptions.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request with improvements, bug fixes, or new features.
