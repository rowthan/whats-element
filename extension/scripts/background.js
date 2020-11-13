(function CreateContextMenus() {
  chrome.contextMenus.removeAll();
  chrome.contextMenus.create({
    id: 'whats-element-get',
    title: 'whats element(Ctrl+Shift+E)',
    contexts: ["page", "frame", "selection", "link", "editable", "image", "video", "audio"]
  })
})()

chrome.contextMenus.onClicked.addListener((info) => {
  executeWhats()
});


chrome.browserAction.onClicked.addListener(function(tab) {
  executeWhats()
});

chrome.commands.onCommand.addListener((command) => {
  if(command==="whats_element"){
    executeWhats()
  }
});

function executeWhats(){
  chrome.tabs.executeScript({
    code: 'console.log(window.whats.compute())',
    allFrames: true,
  })
}








