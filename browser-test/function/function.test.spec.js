var oClick = null;

module('function test', {
    setup : function(){
        oClick = sinon.useFakeTimers();
    },
    teardown : function(){
        oClick = null;
    }
});

test("함수를 특정 콘텍스트에 바인딩 할 수 있다.", function(){
    // given
    var fooObject = new ( function Foo(){} );
    this.targetFunc = function(){
        return this; // bind 중인 객체를 리턴함.
    };

    // when
    var fnBound = clean.func.bind(this.targetFunc, fooObject);

    // then
    deepEqual( fnBound(), fooObject );
});

test("함수를 지연 호출할 수 있다.", function(){
    // given
    var fnTarget = sinon.spy();

    // when
    clean.func.delay(fnTarget, 1000);

    oClick.tick(500);
    oClick.tick(500);

    // then
    deepEqual( fnTarget.calledOnce, true );
    fnTarget.reset();
});

test("함수를 지연 호출하면서 매개변수를 전달할 수 있다.", function(){
    // given
    var fnTarget = sinon.spy(function(){});

    // when
    clean.func.delay(fnTarget, 1000, "매개변수1", "매개변수2");

    oClick.tick(500);
    oClick.tick(500);
    oClick.tick(500);

    // then
    deepEqual( fnTarget.withArgs("매개변수1", "매개변수2").calledOnce, true );
    fnTarget.reset();
});