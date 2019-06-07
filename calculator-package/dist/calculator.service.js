"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalculatorService;
(function (CalculatorService) {
    function add() {
        var number = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            number[_i] = arguments[_i];
        }
        var sum = 0;
        number.forEach(function (number) { return sum += number; });
        return sum;
    }
    CalculatorService.add = add;
})(CalculatorService = exports.CalculatorService || (exports.CalculatorService = {}));
