var Static = {
	"tasks" : {
		"Sample Task" : {
			'name' : 'Sample Task',
			'description' : {
				'short' : 'Task Description',
				'long' : 'Task Description'
			},
			'categories' : [
				'Pringles', 'Sociable'
			],
			'points' : 100,
			'levels' : [
				{
					'level' : 1,
					'multiplier' : 1.2,
					'description' : ''
				},
				{
					'level' : 2,
					'multiplier' : 1.5,
					'description' : ''
				}
			],
			'default' : {
				'recurring' : 86400,
				'expiryTime' : 86400
			},
			'user' : {
				'timesCompleted' : 0,
				'timesCompletedThisRound': 0,
				/*'timesMissed' : 0,*/
				'currentLevel' : 0,
				'favourite' : false,
				'onTaskList' : false
			},
			'time' : {
				'recurring' : 86400,
				'expiryTime' : 3000,
				'startTime' : 1332298801000
			}
		}
	}
};

