/**
 * 공통으로 사용되는 인터랙션에 관련된 스크립트를 모아둔 모듈.
 * @module valid
 * @submodule ui
 */
clean.module.Validator = (function(){
    "use strict";

    /**
     * 값 검증을 위한 객체.<br/>
     * method chain 형식으로 구현되어있다.</br>
     * TODO fail 시 기본 동작 지정에 대한 기능 구현을 붙이자. 가령 검증에 실패한 input에 대해 focus가 자동으로 할당된다던가...
     * ex) var valid = new Validator();
     *     valid.isNotEmpty($("#target"), "대상이 비었습니다")
     *          .isNotEmpty($("#target2"), "대상이 비었습니다2")
     *          .result();
     * @author TaeHee Kim
     * @class Validator
     * @param options.onlyFirstMessageNotify true인 경우, 에러 메시지가 여러개여도 최초의 메시지만 notify 된다. 기본값 true
     * @param options.notifier 에러 메시지를 notify할 함수. 기본동작은 alert함수.
     * @constructor
     */
    var Validator = function(options){
        var that = this;
        var addErrorMessageAndValidFalse = function(failMessage, failCallback){
            var failIndex = that.failMessageList.length;
            if(failMessage){
                that.failMessageList.push(failMessage);
            }
            if(failCallback){
                that.failCallbackMap[failIndex] = failCallback;
            }
            that.isValid = false;
        };

        var defaultNotifier = function(failMessage, failCallback){
            alert(failMessage);
            if(failCallback){
                failCallback();
            }
        };

        if(!options){
            options = {};
        }

        /**
         * @property isValid 검증 성공 여부.<br/>
         * 검증이 1개라도 실패했다면 해당 값은 false로 바뀐다.
         * @type {Boolean}
         */
        this.isValid = true;
        this.validCount = 0;

        this.failMessageList = [];
        this.failCallbackMap = {};
        this.onlyFirstMessageNofify = options.onlyFirstMessageNofify || true;
        this.notifier = options.notifier || defaultNotifier;

        /**
         * condition이 false인지 체크한다.<br/>
         * condition에 함수를 넘길경우 해당 함수를 실행하며,
         * 해당 함수는 실행결과값으로 true 혹은 false를 리턴해야 한다.<br/>
         * condition의 값이 false거나 실행결과가 false인 경우 검증 실패처리한다.
         * @param conditionOrFunction 검증 조건 혹은 검증을 실행할 function
         * @param failMessage 검증 실패 시 추가될 메시지
         * @chainable
         */
        this.is = function(conditionOrFunction, failMessage, failCallback){
            that.validCount++;
            var condition;
            var validResult;
            // condition에 function이 넘어온 경우 해당 function을 실행하고 결과값을 얻음
            if(typeof conditionOrFunction === "function"){
                validResult = conditionOrFunction();
                if(typeof validResult === "object"){
                    if(validResult.hasOwnProperty("condition") &&
                        validResult.hasOwnProperty("failMessage")){

                        failMessage = validResult.failMessage;
                        condition = validResult.condition;
                    }else{
                        throw new Error("함수 실행 결과는 boolean 형이거나 condition, " +
                            "failMessage를 담은 object여야 합니다. " + JSON.stringify(validResult));
                    }
                }else if(typeof validResult === "boolean"){
                    condition = validResult;
                }
            }else{
                condition = conditionOrFunction;
            }


            if(!condition){
                addErrorMessageAndValidFalse(failMessage, failCallback);
            }
            return that;
        };

        /**
         * value의 값이 비어있지 않은지 체크한다.
         * @method isNotEmpty
         * @param value 비어있는지 여부를 체크할 값
         * @param failMessage 검증 실패 시 추가될 메시지
         * @chainable
         */
        this.isNotEmpty = function(value, failMessage, failCallback){
            return that.is(value && value !== "", failMessage, failCallback);
        };

        /**
         * a와 b가 같은지 체크한다.<br/>
         * === 를 이용해 비교하므로, true와 'true'는 같지 않다고 판단한다.
         * @method equals
         * @param a
         * @param b
         * @param failMessage
         * @chainable
         */
        this.equals = function(a, b, failMessage, failCallback){
            return that.is(a === b, failMessage, failCallback);
        };

        /**
         * a와 b가 같지 않은지 체크한다.
         * @param a
         * @param b
         * @param failMessage
         * @chainable
         */
        this.notEquals = function(a, b, failMessage, failCallback){
            return that.is(a !== b, failMessage, failCallback);
        };

        this.isOnlyNumber = function(value, failMessage, failCallback){
            return that.is(/^\d+$/.test(value), failMessage, failCallback);
        };

        /**
         * 검증결과를 강제로 실패처리한다.
         * @method fail
         * @param failMessage
         * @chainable
         */
        this.fail = function(failMessage, failCallback){
            that.is(false, failMessage, failCallback);
        };

        /**
         * 검증 결과를 실행한다.<br/>
         * 만일 검증 결과가 false인 경우
         * 설정된 notifier를 실행한다.
         * run 호출 이후 method chaining은 종료되며, 검증결과를 반환한다.
         * @chainable
         */
        this.run = function(){
            var notifyCount;
            var i;
            if(!that.isValid && that.failMessageList.length > 0){
                if(that.onlyFirstMessageNofify){
                    notifyCount = 1;

                }else{
                    notifyCount = that.failMessageList.length;
                }
                for( i = 0 ; i < notifyCount; i++){
                    var failCallback = that.failCallbackMap[i];
                    that.notifier(that.failMessageList[i], failCallback);
                }
            }

            return that.isValid;
        };

        this.isPass = function(){
            return that.isValid;
        };

        this.isFail = function(){
            return !that.isValid;
        };
    };

    return Validator;
})();

