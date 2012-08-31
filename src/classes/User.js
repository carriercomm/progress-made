function User() {
	"use strict";
	/*global localStorage*/

	this._xp = 0;
	this._level = 1;

	this.isSetup = 0;

	this.getLevelXP = function (level) {
		return (1000 + level / 3 + 100 * (Math.pow(2, level / 10) - 1));
	};

	this.save = function () {
		localStorage.setItem('User', JSON.stringify(this.toString()));
	};

	this.load = function () {
		var user = JSON.parse(localStorage.getItem('User')) || {};

		this._xp = user.xp || 0;
		this._level = user.level || 1;
		this.isSetup = user.isSetup || 0;
	}.bind(this);

	this.reset = function () {
		localStorage.setItem('User', JSON.stringify({}));
		this.load();
	}.bind(this);

	this.addXP = function (value) {
		this.xp += value;
	}.bind(this);

	this.load();
}

User.prototype = Object.create(Object.prototype, {
	"xp": {
		get : function () {
			"use strict";

			return this._xp;
		},
		set : function (value) {
			"use strict";

			this._xp = value;

			if (this._xp >= this.getLevelXP(this._level)) {
				this._xp = 0;
				this.level += 1;
			}

			document.getElementById('xp').innerHTML = this._xp;
			document.getElementById('level').innerHTML = this._level;

			this.save();
		}
	},
	"level": {
		get : function () {
			"use strict";
			return this._level;
		},
		set : function (value) {
			"use strict";

			console.log("Level up to " + value);
			this._level = value;

			this.save();
		}
	}
});

User.prototype.toString = function () {
	"use strict";

	return {
		'xp': this.xp,
		'level': this.level,
		'isSetup' : this.isSetup
	};
};



