var oldAddr = window.location.href;

var detectChange = function(){
	if(oldAddr !== window.location.href && window.location.href.match('https://sit2play.com/tv/*')){
		oldAddr = window.location.href;
		onLoaded();
	}
}

var onLoaded = function(){
	var vid 
	setTimeout(function(){
		vid = $("video");
		$("video")[0].onended = function(){
		console.log("Playing Next Episode");
		vid[0].play();
	}
	},1000);
	
}


setInterval(detectChange, 2000);