module('clean.to.integer test');

test("(123): true", function() {
	var target = 123;
	equal(123, clean.to.integer(target), "param: 123 passed");
});

test("(-1098) == -1098", function() {
	var target = -1098;
	equal(-1098, clean.to.integer(target), "param: -1098 passed");
});

test("(2147483648) == 2147483648", function() {
	var target = 2147483648;
	equal(2147483648, clean.to.integer(target), "param: 2147483648 passed");
});

test("(-2147483649) ==  -2147483649", function() {
	var target = -2147483649;
	equal(-2147483649, clean.to.integer(target), "param: -2147483649 passed");
});

test("(0x123) == 0x123", function() {
	var target = 0x123;
	equal(0x123, clean.to.integer(target), "param: '0x123' passed");
});

test("('123') == 123", function() {
	var target = '123';
	equal(123, clean.to.integer(target), "param: '123' passed");
});

test("(0.12) == 0", function() {
	var target = 0.12;
	equal(0, clean.to.integer(target), "param: 0.12 passed");
});

test("1.23 == 1", function() {
	var target = '1.23';
	equal(1, clean.to.integer(target), "param: '1.23' passed");
});

test("('abc') == NaN", function() {
	var target = 'abc';
	equal("NaN", clean.to.integer(target).toString(), "param: String('abc')) passed");
});