module('clean.is.integer test');
test("(123): true", function() {
	var target = 123;
	ok(clean.is.integer(target), "param: 123 passed");
});

test("(-1098): true", function() {
	var target = -1098;
	ok(clean.is.integer(target), "param: -1098 passed");
});

test("(100000000000000000): true", function() {
	var target = 100000000000000000;
	ok(clean.is.integer(target), "param: 100000000000000000 passed");
});

test("(0x123): true", function() {
	var target = 0x123;
	ok(clean.is.integer(target), "param: '0x123' passed");
});

test("('123'): false", function() {
	var target = '123';
	equal(false, clean.is.integer(target), "param: '123' passed");
});

test("(0.12): false", function() {
	var target = 0.12;
	equal(false, clean.is.integer(target), "param: 0.12 passed");
});

test("('123as'): false", function() {
	var target = '123as';
	equal(false, clean.is.integer(target), "param: '123as' passed");
});

test("('abc'): false", function() {
	var target = 'abc';
	equal(false, clean.is.integer(target), "param: String('abc')) passed");
});
