# Auto Clear History Chrome Extension

## Overview
This Chrome extension automatically clears browsing history at a user-defined interval. Users can select the interval from the popup UI and manually clear history as well.

> **Note:** This extension is meant to be used locally. You can customize it to your needs by modifying the source code.

## Features
- Automatically clears browsing history at a set interval
- Allows users to choose the interval (1 min, 5 min, 30 min, 1 hour, 2 hours, 4 hours)
- Manual history clearing with a button
- Simple UI with a settings panel

## Installation Guide
### 1. Download or Clone the Repository
```sh
  git clone https://github.com/111-vk/ForgetMe.git
```

### 2. Open Chrome Extensions Page
- Open Chrome and go to `chrome://extensions/`
- Enable **Developer mode** (top right corner)

### 3. Load the Extension
- Click **Load unpacked**
- Select the folder where you downloaded/cloned the extension
- The extension will now appear in the list

### 4. Adding to Brave Browser
Brave is based on Chromium, so the installation process is the same as Chrome. To add this extension to Brave:
1. Open Brave and go to `brave://extensions/`
2. Enable **Developer mode** (top right corner)
3. Click **Load unpacked**
4. Select the folder where the extension files are stored
5. The extension will now appear in the list and work as expected

## Usage
1. Click the extension icon in the toolbar
2. Select the time interval for clearing history
3. Click **Save** to apply the interval
4. Click **Clear History Now** for immediate clearing

## Files and Structure
```
/auto-clear-history
│── manifest.json     # Extension metadata
│── background.js     # Handles scheduled history clearing
│── popup.html        # UI for selecting interval and manual clearing
│── popup.css         # Styling for the popup UI
│── popup.js          # JavaScript logic for UI interaction
```

## Customization
- Modify `popup.html` to change the UI
- Update `background.js` to add additional clearing options (cookies, cache, etc.)

## Support
For any issues, contact [kv2352005@gmail.com](mailto:your-email@example.com) or create an issue on GitHub.


## Preview
![Extension Preview](src/preview.jpeg)
