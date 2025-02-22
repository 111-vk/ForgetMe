// popup.js
document.addEventListener("DOMContentLoaded", () => {
    function updateNextRunTime() {
      chrome.alarms.get("clearHistory", (alarm) => {
        if (alarm) {
          let nextRun = new Date(alarm.scheduledTime).toLocaleTimeString();
          document.getElementById("nextRun").textContent = "Next cleanup: " + nextRun;
        } else {
          document.getElementById("nextRun").textContent = "Next cleanup: Not scheduled";
        }
      });
    }
  
    chrome.storage.sync.get({ interval: 120, darkMode: false }, (data) => {
      document.getElementById("interval").value = data.interval;
      updateNextRunTime();
      if (data.darkMode) {
        document.body.classList.add("dark-mode");
        document.querySelector(".container").classList.add("dark-mode");
      }
    });
  
    document.getElementById("saveSettings").addEventListener("click", () => {
      const interval = parseInt(document.getElementById("interval").value);
      chrome.storage.sync.set({ interval: interval }, () => {
        alert("Settings saved! History will be cleared every " + interval + " minutes.");
        updateNextRunTime();
      });
    });
    //
    //document.getElementById("clearNow").addEventListener("click", () => {
      //chrome.browsingData.remove({ since: 0 }, { histo ry: true }, () => {
        //alert("Browsing history cleared.");
    
      });
    });
  
    document.getElementById("toggleDarkMode").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      document.querySelector(".container").classList.toggle("dark-mode");
      let darkModeEnabled = document.body.classList.contains("dark-mode");
      chrome.storage.sync.set({ darkMode: darkModeEnabled });
    });
  });
  
