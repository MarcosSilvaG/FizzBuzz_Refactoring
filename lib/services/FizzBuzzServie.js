class FizzBuzzService {
    static applyValidationInExplorer(explorer){
        if(explorer.score % 3 === 0) {
            explorer.trick = "FIZZ"
            return explorer
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ"
            return explorer
        } else if (explorer.score % 5 === 0 && explorer.score % 3 === 0){
            explorer.trick = "FIZZBUZZ"
            return explorer
        } else {
            return explorer.score
        }
    }
}

module.exports = FizzBuzzService