function Task(task) {
	"use strict";
	this.name = task.name;
	this.createTaskFromPreset(task);

	// don't remove straight away, allow 5 seconds for undo time
	this.complete = function () {
		if (!this.properties.user.onTaskList) {
			throw new Error("Task is not on taskList!");
		}

		this.properties.user.currentLevel += 1;

		user.addXP(this.calculatePoints(this.properties.user.currentLevel));

		if (this.properties.user.currentLevel === this.properties.levels.length) {
			this.properties.user.currentLevel = 0;
			this.properties.user.timesCompleted += 1;

			this.properties.user.onTaskList = false;
			TaskManager.remove(this);
		}
	}.bind(this);

	this.calculatePoints = function (level) {
		return Math.floor(this.properties.points * this.properties.levels[this.properties.user.currentLevel - 1].multiplier);
	}.bind(this);


}

Task.prototype.properties = {};
Task.prototype.createTaskFromPreset = function (task) {
	"use strict";

	this.properties = task;
	this.properties.user.onTaskList = false;
};


Task.prototype.toString = function () {
	"use strict";

	return this.properties;
};

