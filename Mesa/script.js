var countdown = 0;

function CountDown() {
	countdown++;
	var minutes = Math.floor(countdown/60);
	var seconds = Math.floor(countdown%60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	document.getElementById("TimerText").innerHTML = minutes + ":" + seconds;
}

var t = setInterval(CountDown, 1000);