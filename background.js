// background.js
chrome.storage.sync.get({ interval: 120 }, (data) => {
  chrome.alarms.create("clearHistory", { periodInMinutes: data.interval });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "clearHistory") {
    chrome.browsingData.remove({ since: 0 }, { history: true }, () => {
      console.log("Browsing history cleared.");
    });
  }
});

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (areaName === "sync" && changes.interval) {
    chrome.alarms.clear("clearHistory", () => {
      chrome.alarms.create("clearHistory", { periodInMinutes: changes.interval.newValue });
      
      // Log the next run time in console (helpful for debugging)
      chrome.alarms.get("clearHistory", (alarm) => {
        if (alarm) {
          console.log("Next history cleanup at:", new Date(alarm.scheduledTime).toLocaleTimeString());
        }
      });
    });
  }
});
