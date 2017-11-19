var onLoaded = function(){
	var vid 
	setTimeout(function(){
		vid = $("video");
		$("video")[0].onended = function(){
		console.log("next playing");
		vid[0].play();
	}
	console.log($("video"));
	},1000);
	
}

$(document ).ready(onLoaded);
