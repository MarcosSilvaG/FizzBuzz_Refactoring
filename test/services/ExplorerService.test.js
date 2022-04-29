const ExplorerService = require("../../lib/services/ExplorerService");

describe("Unit tests for ExplorerService class", () => {
    test("1) Test for FilterByMission()", () => {
        const explorers = [
            {name: "Mingo", mission: "node"},
            {name: "Rafael", mission: "java"},
            {name: "Harolf", mission: "node"}
        ];
        const filteredExplorers = ExplorerService.filterByMission(explorers, "node");
        expect(filteredExplorers.length).toBe(2);
        expect(filteredExplorers).toEqual(
            [
                {name: "Mingo", mission: "node"},
                {name: "Harolf", mission: "node"}
            ]
        );
    });
    test("2) Test for getAmountOfExplorersByMission()",() => {
        const explorers = [
            {name: "Mingo", mission: "node"},
            {name: "Rafael", mission: "java"},
            {name: "Harolf", mission: "node"}
        ];
        const amountExplorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        
        expect(amountExplorersInMission).toBe(1);
        expect(amountExplorersInMission).not.toBe(4);
    });
    test("3) Test for getExplorersUsernamesByMission()", () => {
        const explorers = [
            {name: "Mingo", githubUsername: "ajolote", mission: "node"},
            {name: "Rafael",githubUsername: "ajolopesos", mission: "java"},
            {name: "Harolf",githubUsername: "woopa!", mission: "node"}
        ];
        const explorerByGithubName = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorerByGithubName).toStrictEqual(["ajolote","woopa!"]);
        expect(explorerByGithubName.length).toBe(2);
    });
});