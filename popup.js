/**
 * Author : George Poulos
 * Chrome Html popup to contentjs message sender
 */

let sub = $("#submit");

sub.on('click', function(){
	let val = $("#episodes").val();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {action:'sendEpisode', data:val}, 
			function(response) {
				$('#selectedTimes').text(response.times);
    		});
	});
});