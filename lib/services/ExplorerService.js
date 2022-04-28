
const exporers = require('../../explorers.json')
class ExplorerService {

    static filterByMission(explorers, mission) {
        const explorerByMission = explorers.filter(explorer => explorer.mission == mission)
        return explorerByMission.length
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        
    }
    static getAmountOfExplorersByMission(explorers, mission) {

    }
}

module.exports = ExplorerService