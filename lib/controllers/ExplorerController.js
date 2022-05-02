const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzBuzzService = require("./../services/FizzBuzzService");
class ExplorerController {
    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerByMission = ExplorerService.filterByMission(explorers, mission);
        return explorerByMission;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorerUsernameByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorerUsernameByMission;
    }
    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        const explorersAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmountByMission;
    }
    static getFizzBuzzService(number) {
        const result = FizzBuzzService.applyValidationInNumber(number);
        return result;
    }
}
module.exports = ExplorerController;