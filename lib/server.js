const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost: ${port}`);
});

app.get("/", (request, response) => {
    response.json({ message: "my basic server in localhost"} );
});
app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorerByMission(mission);
    response.json(explorerInMission);
});