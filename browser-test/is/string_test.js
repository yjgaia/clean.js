module('clean.is.string test');
test("param: '123'", function() {
	var target = "abc";
	ok(clean.is.string(target), "param: 'abc' passed");
});

test("param: String('abc')", function() {
	var target = String('abc');
	ok(clean.is.string(target), "param: String('abc')) passed");
});

test("param = new String('abc')", function() {
	var target = new String('abc');
	ok(clean.is.string(target), "param: new String('abc') passed");
});

test("param = 123", function() {
	var target = 123;
	equal(false, clean.is.string(target), "param: 123 is not a string");
});

test("param = new Object()", function() {
	var target = new Object();
	equal(false, clean.is.string(target), "param: new Object() is not a string");
});