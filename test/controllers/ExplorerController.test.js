const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for explorer controller file", () => {
    test("1) Test for getExplorerByMission not null", () => {
        const explorersByMission = ExplorerController.getExplorerByMission("node");
        expect(explorersByMission).not.toBeNull();        
    });
    test("2) Test for getExplorerByMission length", () => {
        const explorerByMissionLength = ExplorerController.getExplorerByMission("node");
        expect(explorerByMissionLength).toHaveLength(10);
    });
    test("3) Test for getExplorersUsernamesByMission method", () => {
        const explorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsernamesByMission).toContain("ajolonauta1");
    });
    test("4) Test for getExplorersUsernamesByMission, not to be null", () => {
        const explorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission("java");
        expect(explorersUsernamesByMission).not.toBeNull();
    });
    test("5) Test for getExplorerAmountByMission method", () => {
        const explorersAmountByMissions = ExplorerController.getExplorersAmountByMission("java");
        expect(explorersAmountByMissions).toBe(5);
    });
    test("6) Test for getExplorerAmountByMission length", () => {
        const explorersAmountByMissions = ExplorerController.getExplorersAmountByMission("node");
        expect(explorersAmountByMissions).toBe(explorersAmountByMissions);
    });
    test("7) Test for getFizzBuzzService controller equal to 5", () => {
        const number5 = ExplorerController.getFizzBuzzService(5);
        expect(number5).toBe("BUZZ");
    });
    test("7) Test for getFizzBuzzService controller equal to 3", () => {
        const number3 = ExplorerController.getFizzBuzzService(3);
        expect(number3).toBe("FIZZ");
    });
    test("8) Test for getFizzBuzzService controller qual to 15", () => {
        const number15 = ExplorerController.getFizzBuzzService(15);
        expect(number15).toBe("FIZZBUZZ");
    });
    test("7) Test for new service applyValidationInNumber with number not divisible by 3 or 5", () => {
        const number1 = ExplorerController.getFizzBuzzService(1);
        const number2 = ExplorerController.getFizzBuzzService(2);
        const number7 = ExplorerController.getFizzBuzzService(7);
        
        expect(number1).toBe(1);
        expect(number2).toBe(2);
        expect(number7).toBe(7);
    });
});