var clean = require('../../clean.js');

var object = {
	name : 'YOUNG JAE SIM',
	age : 27
};

clean.object.defaults(object, {
	age : 100,
	lang : 'ko'
});

console.log(object);
