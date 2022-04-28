class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorerByMission = explorers.filter(explorer => explorer.mission === mission)
        return explorerByMission
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersMission = ExplorerService.filterByMission(explorers, mission)
        return explorersMission.length
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorerMission = ExplorerService.filterByMission(explorers, mission)
        const explorerUserName = explorerMission.map(explorer => explorer.githubUsername)
        return explorerUserName
    }
}

module.exports = ExplorerService