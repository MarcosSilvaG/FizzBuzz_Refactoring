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
});