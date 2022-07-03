chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        
        // you can add more categories here
        var randomNum = Math.floor(Math.random() * 2); // don't forget to change '2' to the preferred number of categories
        if (randomNum == 0) {
			chrome.tabs.update(tab.id, {url: 'https://en.wikipedia.org/wiki/Special:RandomInCategory/Good_articles'});
		} else if (randomNum == 1) {
			chrome.tabs.update(tab.id, {url: 'https://en.wikipedia.org/wiki/Special:RandomInCategory/Featured_articles'});
		}
		// ...
		
    });
});
