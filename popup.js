chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    const display = document.getElementById("display");
    display.innerHTML = tabs[0].title;
});