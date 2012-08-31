

function getDateFromTimestamp(microtimestamp) {
	"use strict";
	var dateObj = new Date(microtimestamp),
		date = {
			'year' : dateObj.getFullYear(), //1999
			'month' : (dateObj.getMonth() + 1), //0-11
			'date' : dateObj.getDate(),
			'day' : dateObj.getDay(), //0-6
			'hours' : dateObj.getHours(), //0-23
			'minutes' : dateObj.getMinutes(),
			'seconds' : dateObj.getSeconds()
		};
	return date;
}

function getTimestampFromDate(date) {
	"use strict";
	return new Date(Date.parse(date.month + "/" + date.day + "/" + date.year + " " + date.hours + ":" + date.minutes + ":" + date.seconds, "MM/dd/yyyy hh:mm:ss")).getTime();
}
