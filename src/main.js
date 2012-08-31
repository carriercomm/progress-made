/*jslint nomen: true*/


//var User = {};
/*global window, console, document, user:true*/
function List() {
	"use strict";

};










// Tasks.Blitz
// preset + optionally randomized list of tasks 
// - picks tasks from a list 

//social ; let friends know - internal wall

// Random Task at random times

/*var TaskItem = {
	'name' : 'name',
	'description' : 'description',
	'points' : 10,
	'completed' : 0	
};*/












var user;
function init() {
	"use strict";

	reset();
	var taskManager = new TaskManager();
	user = new User();
	//console.log(taskManager.getList('userTasks'));
	//console.log(taskManager.getList('defaultTasks'));
//return;
var count = 0;
	var inter = setInterval(function () {
		count++;
		taskManager.cycle();
		console.log(taskManager.getList('userTasks'));
		if (count > 5) {
			window.clearInterval(inter);
		}
	}, 1000);

	return;
	//var task = taskManager.add('Sample Task');
	//taskManager.remove(task);

	console.log(taskManager.getList());

	var list = taskManager.getList();
	taskManager.remove(list[0]);

	//var defaultTaskList = new TaskList('default');
	//defaultTaskList.data = 'test';
	//var taskList = new TaskList('test');
	//taskList.data = 'test';
	//console.log(taskList.data);
//	var userTaskList = new UserTaskList();
	//var defaultTaskList = new DefaultTaskList();
	//defaultTaskList.data = 'test';
	//console.log(JSON.stringify(defaultTaskList.data));

//console.log(JSON.stringify(defaultTaskList.data));
	return;
	user = new User();

	var task = TaskManager.add('Sample Task');

	console.log(TaskManager.getList());
	//console.log(taskList);
	task.complete();
	task.complete();

	console.log(TaskManager.getList());

}




function reset() {
	localStorage.clear();
	window.localStorage.clear();
}

/*
	var task = TaskManager.add('Sample Task');

	console.log(TaskManager.getList());
	//console.log(taskList);
	task.complete();
	task.complete();

	console.log(TaskManager.getList());


	return true;
	//user.xp = 1300;
	console.log(user.toString());
	return true;*/

	/*global setInterval*/
	/*console.log(TaskManager.getList());
	TaskManager.cycle();
	console.log(TaskManager.getList());
	TaskManager.cycle();
	console.log(TaskManager.getList());


	var inter = setInterval(function () {
		TaskManager.cycle();
		console.log(TaskManager.getList());
	}, 1000);
	return true;*/

	//var categories = new Categories();
	//console.log(categories.getCategoryList());
	//console.log(categories.getCategoryList('Health'));
	//return;
	//console.log(User.xp);
	//var task = Tasks.add('Sample Task');
	//TaskManager.add('Sample Task');
/*
	var task = TaskManager.add('Sample Task');

	console.log(TaskManager.getList());
	//console.log(taskList);
	task.complete();
	task.complete();

	console.log(TaskManager.getList());


	task = TaskManager.add('Sample Task');

	console.log(TaskManager.getList());
	//console.log(taskList);
	task.complete();
	task.complete();

	console.log(TaskManager.getList());


	//console.log(User.xp);


	//console.log(Tasks.getList());


	var date = getTimestampFromDate({
		'month':3,
		'day':20,
		'year':2012,
		'hours':23,
		'minutes':0,
		'seconds':1
	});	
	//console.log(getDateFromTimestamp(date));
*/


window.onload = init;



//http://docs.phonegap.com/en/1.0.0/phonegap_events_events.md.html