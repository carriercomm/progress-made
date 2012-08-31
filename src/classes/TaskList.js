//var taskList = [];






function TaskList(type) {
	"use strict";

	if (type == undefined) {
		throw new Error("Must define type for TaskList!");
	}

	this.type = type;
	this._data = []; // contains parsed array

	this.save = function () {
		localStorage.setItem('TaskList'+this.type, this.toString());
	};

	this.load = function () {
		var taskData = JSON.parse(localStorage.getItem('TaskList'+this.type)) || [];
		this._data = taskData;
	}.bind(this);

	this.toString = function() {		
		return JSON.stringify(this._data);
	}
	
	this.add = function(task) {		
		//console.log(task);
		//console.log(this._data);
		//task.properties.user.onTaskList = true;
		console.log('added ' + this.type);
		this._data.push(task);
		this.data = this._data;
	}

	this.remove = function(task) {
		//task.properties.user.onTaskList = false;

		console.log('removed ' + this.type);
		this._data.splice(this._data.indexOf(task), 1);
		this.data = this._data;
	}
}

TaskList.prototype = Object.create(Object.prototype, {
	"data": {
		//gets and returns in obj format
		get : function () {
			"use strict";
			this.load();

			return this._data;
		},
		set : function (value) {
			"use strict";
		
			this._data = value;
			this.save();
		}
	}
});



function DefaultTaskList() {
	TaskList.call(this, 'default');

	if (this.data.length == 0) {
		console.log('nice');
		//this.data = Static.tasks;

		for (var t in Static.tasks) {
			this.add(new Task(Static.tasks[t]));
		}
	}
}
DefaultTaskList.prototype = TaskList.prototype;

function UserTaskList() {
	TaskList.call(this, 'user');
	/*if (this.data == null) {
		this.data = [];
	}*/

	this.add =  function(task) {
		task.properties.user.onTaskList = true;		
		console.log('test');

		//http://joshgertzen.com/object-oriented-super-class-method-calling-with-javascript/ why noi work?
		TaskList.prototype.add.call(this, task);
	}

	this.remove = function(task) {
		task.properties.user.onTaskList = false;
		console.log('tits');
		TaskList.remove.call(this, task);
	}
	
	
}
UserTaskList.prototype = TaskList.prototype;