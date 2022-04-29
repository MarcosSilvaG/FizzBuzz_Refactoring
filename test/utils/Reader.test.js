const Reader = require('../../lib/utils/Reader')

describe("Unit tests for Reader file", () => {
    test("1. Return data from json file", () => {
        const explorer = Reader.readJsonFile("test/data/explorers_1.json")
        const explorerName = explorer.map(explorerName1 => explorerName1.name)
        expect(explorerName).toContain('Mingo')
    })
    test("2. Get total number of explorers", () => {
        const explorers = Reader.readJsonFile("test/data/explorers_1.json")       
        expect(explorers.length).toBe(16)
    })
})