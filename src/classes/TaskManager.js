
var TaskManager = function(){

	this.userTasks = new UserTaskList();
	this.defaultTasks = new DefaultTaskList();

	this.add = function (taskName) {
		"use strict";
		/*global Task*/
		
/*console.log(this.defaultTasks.data);
		if (!this.defaultTasks.data[taskName]) {
			throw new Error("Task does not exist in tasks");
		}
		if (!!this.defaultTasks.data[taskName].user.onTaskList) {
			throw new Error("Task is already on taskList");
		}
		*/
		//var task = new Task(this.defaultTasks.data[taskName]);

		var task = new Task(taskName);

		this.userTasks.add(task);

		return task;
	};

	this.remove = function(task) {
		this.userTasks.remove(task);
	};

	this.getList = function (type) {
		"use strict";

		//return this[type].data;
		var returnList = [],
			l;

		for (l in this[type].data) {
			if (this[type].data.hasOwnProperty(l)) {
				returnList.push(this[type].data[l].properties);
			}
		}

		return returnList;
	};

	this.cycle = function () {
		"use strict";
		var ts = Math.round((new Date()).getTime()), t,
			activeTasks = this.getList('userTasks'),
			tasks = this.getList('defaultTasks'),
			timesMissed;

		// Remove tasks that have an expiry time set and have expired
		console.log(activeTasks);
		for (t in activeTasks) {
			if (activeTasks.hasOwnProperty(t)) {				
				if (!!activeTasks[t].user.onTaskList && (activeTasks[t].time.expiryTime || activeTasks[t].time.expiryTime !== 0)) {					
					if ((activeTasks[t].time.startTime + activeTasks[t].time.expiryTime) < ts) {
						this.remove(activeTasks[t]);
					}
				}
			}
		}

		// Add recurring tasks back to the list
		for (t in tasks) {
			if (tasks.hasOwnProperty(t)) {
//console.log(tasks[t].user.onTaskList);
				if (!tasks[t].user.onTaskList && (tasks[t].time.recurring || tasks[t].time.recurring !== 0)) {					
					if ((tasks[t].time.startTime + tasks[t].time.recurring) < ts) {
						// add new notification
						this.add(tasks[t]);

						timesMissed = Math.floor((ts - tasks[t].time.startTime) / tasks[t].time.recurring);
						tasks[t].time.startTime = tasks[t].time.startTime + timesMissed * tasks[t].time.recurring;

						if ((tasks[t].time.startTime + tasks[t].time.expiryTime) < ts) {
							tasks[t].time.startTime = ts + tasks[t].time.expiryTime;
						}
					}
				}
			}
		}
	}.bind(this);
};

TaskManager.createTask = function (defn) {
	"use strict";

	if (tasks[defn.name] !== undefined) {
		throw new Error("Task name already exists!");
	}

};

TaskManager.deleteTask = function (task) {
	"use strict";
};


/*
TaskManager.cycle = function () { // change name, it deactivates as well
	"use strict";
	var ts = Math.round((new Date()).getTime()), t,
		activeTasks = TaskManager.getList(),
		timesMissed;

	// Remove tasks that have an expiry time set and have expired
	for (t in activeTasks) {
		if (activeTasks.hasOwnProperty(t)) {
			if (!!activeTasks[t].user.onTaskList && (activeTasks[t].time.expiryTime || activeTasks[t].time.expiryTime !== 0)) {
				if ((activeTasks[t].time.startTime + activeTasks[t].time.expiryTime) < ts) {
					TaskManager.remove(activeTasks[t]);
				}
			}
		}
	}

	// Add recurring tasks back to the list
	for (t in tasks) {
		if (tasks.hasOwnProperty(t)) {
			if (!tasks[t].user.onTaskList && (tasks[t].time.recurring || tasks[t].time.recurring !== 0)) {
				if ((tasks[t].time.startTime + tasks[t].time.recurring) < ts) {
					// add new notification
					TaskManager.add(tasks[t].name);

					timesMissed = Math.floor((ts - tasks[t].time.startTime) / tasks[t].time.recurring);
					tasks[t].time.startTime = tasks[t].time.startTime + timesMissed * tasks[t].time.recurring;

					if ((tasks[t].time.startTime + tasks[t].time.expiryTime) < ts) {
						tasks[t].time.startTime = ts + tasks[t].time.expiryTime;
					}
				}
			}
		}
	}
};*/