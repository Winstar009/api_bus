function convertTime(time) {
	time = new Date(time);
	let h = time.getUTCHours().toString();
	let m = time.getUTCMinutes().toString();
	let s = time.getUTCSeconds().toString();

	if(h.length == 1) h = '0' + h;
	if(m.length == 1) m = '0' + m;
	if(s.length == 1) s = '0' + s;

	return h + ':' + m + ':' + s;
}

function convertDate(date) {
	date = new Date(date);

	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return date.toLocaleString("ru", options);
}