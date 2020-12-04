var curs;
function showToday(){
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	curs = s;
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	var time = h + " : " + m + " : " + s;
	document.getElementById("today").innerHTML = time;
	setTimeout(showToday,1000);
}

function startCountDown() {
	var clock = document.getElementById("clock");
	clock.style.display = "inline-block";
	var today = new Date();
	var th = today.getHours();
	var tm = today.getMinutes();
	var ts = today.getSeconds();
	var newYear = new Date(2021,0,1,0,0,0);
	var dayleft,hleft,mleft,sleft;
	var timeleft = (newYear - today);
	dayleft = Math.floor(timeleft/(24*60*60*1000));
	hleft = 23 - th;
	mleft = 59 - tm;
	sleft = 60 - curs;
	hleft = (hleft < 10) ? "0" + hleft : hleft;
	mleft = (mleft < 10) ? "0" + mleft : mleft;
	sleft = (sleft < 10) ? "0" + sleft : sleft;
	var day = (dayleft == 1) ? " day " : " days ";
	var time = dayleft + day + hleft + " : " + mleft + " : " + sleft + " left";
	clock.innerHTML = time;
	var setTime = setTimeout(startCountDown,1000);
	if (today > newYear) {
		clock.innerHTML = "Happy New Year";
		clearTimeout(setTime);
	}
}	

showToday();