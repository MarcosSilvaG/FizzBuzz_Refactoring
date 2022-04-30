const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for explorer controller file", () => {
    test("1) Test for getExplorerByMission not null", () => {
        const explorersByMission = ExplorerController.getExplorerByMission("node");
        expect(explorersByMission).not.toBeNull();        
    });
});