const express = require("express");
const app = express()
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "orange", "banana"]});
});

app.get("/ability-scores", (req, res) => {
    res.json({"abilityScores": [12, 11, 14, 9, 14, 16]});
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});