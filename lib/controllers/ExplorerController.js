const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
// const FizzBuzzService = require("./../services/FizzBuzzService");

class ExplorerController {

    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerByMission = ExplorerService.filterByMission(explorers, mission);
        return explorerByMission;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorerUsernameByMission = ExplorerService(mission);
        return explorerUsernameByMission;
    }

}
module.exports = ExplorerController;