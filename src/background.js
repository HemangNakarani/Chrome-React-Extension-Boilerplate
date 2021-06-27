chrome.browserAction.onClicked.addListener(function () {
  console.log("Hello From BackGround !!!");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];

    chrome.tabs.sendMessage(activeTab.id, {
      message: "BROWSER_ACTION_CLICKED",
    });
  });
});
