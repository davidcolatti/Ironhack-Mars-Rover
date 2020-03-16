const rover = {
	direction: 'N',
	x: 0,
	y: 0,
	travelLog: []
};
// ======================

// ======================
function turnLeft(rover) {
	switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;
		case 'E':
			rover.direction = 'N';
			break;
		case 'S':
			rover.direction = 'E';
			break;
		case 'W':
			rover.direction = 'S';
			break;
	}
	console.log('turnLeft was called!');
}

function turnRight(rover) {
	switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;
		case 'E':
			rover.direction = 'S';
			break;
		case 'S':
			rover.direction = 'W';
			break;
		case 'W':
			rover.direction = 'N';
			break;
	}
	console.log('turnRight was called!');
}

function moveForward(rover) {
	switch (rover.direction) {
		case 'N':
			if (rover.y - 1 < 0) {
				console.log('Cant move north');
			} else {
				rover.y -= 1;
			}
			break;
		case 'S':
			if (rover.y + 1 > 10) {
				console.log('Cant move south');
			} else {
				rover.y += 1;
			}
			break;
		case 'W':
			if (rover.x - 1 < 0) {
				console.log('Cant move west');
			} else {
				rover.x -= 1;
			}
			break;
		case 'E':
			if (rover.x + 1 > 10) {
				console.log('Cant move East');
			} else {
				rover.x += 1;
			}
			break;
	}
	console.log('moveForward was called');
	console.log('My new position is x=' + rover.x + ' ' + 'y=' + rover.y);
	rover.travelLog.push([ rover.x, rover.y ]);
}

function doCommand(commands) {
	for (let i = 0; i < commands.length; i++) {
		switch (commands[i]) {
			case 'f':
				moveForward(rover);
				break;
			case 'r':
				turnRight(rover);
				break;
			case 'l':
				turnLeft(rover);
				break;
		}
	}
}

doCommand('rffrfflfrff');
