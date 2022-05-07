const ExplorerController = require("./ExplorerController");
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

class BotController {
    static listener() {
        const bot = new TelegramBot(process.env.TOKEN, {polling: true});

        bot.onText(/\/echo (.+)/, (msg, match) => {
            const chatId = msg.chat.id;
            const resp = match[1]; 
        
            bot.sendMessage(chatId, resp);
        });
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getFizzBuzzService(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else if (msg.text === "node" || msg.text === "java") {
                const explorersByMission = ExplorerController.getExplorerByMission(msg.text);
                
                const nameOfExplorers = explorersByMission.map(explorer => { return `Explorer: ${explorer.name}`;});
                
                const responseBot = `Explorers de la misión ${msg.text}:\n${nameOfExplorers.join("\n")}`;
                bot.sendMessage(chatId, responseBot);
            }
            else {
                bot.sendMessage(chatId, "Envía un número válido");
            }
        });
    }
}

module.exports = BotController;