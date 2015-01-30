var clean = require('../../clean.js');

console.log(clean.object.pick({
	name : 'YOUNG JAE SIM',
	age : 27,
	lang : 'ko'
}, 'name', 'age'));
