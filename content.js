/**
 * Author : George Poulos
 * Chrome Extension 
 */
var oldAddr = window.location.href;
var vid;
var times = -1;
var currentPlayed = 0;

var detectChange = function(){
	if(oldAddr !== window.location.href && window.location.href.match('https://sit2play.com/tv*')){
		oldAddr = window.location.href;
		setOnEndedFunction();
	}
}

var setOnEndedFunction = function(){
	setTimeout(function(){
		vid = $("video");
		if(vid.constructor === Array){
			vid = vid[0];
		}
		vid[0].autoplay = true;
		console.log(vid);
		$("video")[0].onended = function(){
			if(times === -1 || currentPlayed < times){
				console.log("Playing Next Episode");
				vid[0].play();
				currentPlayed++;
			}
			else{
				vid[0].pause();
			}
		}
	},1000);
	
}

var onRequest = function(request, sender, sendResponse) {
    if (request.action == 'sendEpisode'){
    	times = parseInt(request.data, 10);
    	currentPlayed = 0;
    }
}
chrome.extension.onMessage.addListener(onRequest);


if(oldAddr.match('https://sit2play.com/tv*')){
	setOnEndedFunction();
}

setInterval(detectChange, 2000);