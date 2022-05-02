const FizzBuzzService = require("../../lib/services/FizzBuzzService");

describe("Tests for FizBuzz class", () => {
    test("1) Test for user who does not meet any conditions",() => {
        const explorer1 = {name: "Explorer1", score: 1};
        const explorerFizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer1);
        expect(explorerFizzBuzz.trick).toBe(explorerFizzBuzz.score);
    });
    test("2) Test for users who are divisible by 3", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const explorerFizz = FizzBuzzService.applyValidationInExplorer(explorer3);
        expect(explorerFizz.trick).toBe("FIZZ");
    });
    test("3) Test for users who are divisble by 5", () => {
        const explorer5 = {name: "Explorer3", score: 5};
        const explorerBuzz = FizzBuzzService.applyValidationInExplorer(explorer5);
        expect(explorerBuzz.trick).toBe("BUZZ");
    });
    test("4) Test for users who are divisible by 3 and 5", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const explorerFizzBuzz = FizzBuzzService.applyValidationInExplorer(explorer15);
        expect(explorerFizzBuzz.trick).toBe("FIZZBUZZ");
    });
    test("5) Test for new service applyValidationInNumber equal to 15", () => {
        const number15 = FizzBuzzService.applyValidationInNumber(15);
        expect(number15).toBe("FIZZBUZZ");
    });
    test("6) Test for new service applyValidationInNumber equal to 3", () => {
        const number3 = FizzBuzzService.applyValidationInNumber(3);
        expect(number3).toBe("FIZZ");
    });
    test("6) Test for new service applyValidationInNumber equal to 3", () => {
        const number5 = FizzBuzzService.applyValidationInNumber(5);
        expect(number5).toBe("BUZZ");
    });
    test("7) Test for new service applyValidationInNumber with number not divisible by 3 or 5", () => {
        const number1 = FizzBuzzService.applyValidationInNumber(1);
        expect(number1).toBe(1);
    });
});