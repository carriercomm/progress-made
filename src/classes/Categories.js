var categories = {
	'Deadlines' : [
		'Pringles', 'Cineplex'
	],
	'Health' : [
		'Spiderman', 'Sociable'
	],
	'No Category' : []
};



var Categories = function () {
	"use strict";
	var parsedCategories = {};

	function parseCategories() {
		var category_array = [], c, a;
		for (c in categories) {
			if (categories.hasOwnProperty(c)) {
				for (a in categories[c]) {
					if (categories[c].hasOwnProperty(a)) {
						category_array.push(categories[c][a]);
					}
				}
			}
		}
		return category_array;
	}

	function populateCategories() {
		var t, c;

		for (t in tasks) {
			if (tasks.hasOwnProperty(t)) {
				for (c in tasks[t].categories) {
					if (tasks[t].categories.hasOwnProperty(c)) {
						if (!parsedCategories[tasks[t].categories]) {
							parsedCategories[tasks[t].categories[c]] = [];
						}
						parsedCategories[tasks[t].categories[c]].push(tasks[t].name);
					}
				}
			}
		}

	}

	populateCategories(parseCategories());


	this.getCategoryList = function (category) {
		var search, cat, list = [];
		if (category === undefined) {
			search = categories;
		} else {
			search = categories[category];
		}

		for (cat in search) {
			if (search.hasOwnProperty(cat) && !(cat instanceof Object)) {
				if (category === undefined) {
					list.push({
						'name': cat,
						'total': search[cat].length,
						'members': search[cat]
					});
				} else {
					list.push({
						'name': search[cat],
						'total': parsedCategories[search[cat]].length || 0,
						'members' : parsedCategories[search[cat]] || []
					});
				}
			}
		}

		return list;
	};

};

