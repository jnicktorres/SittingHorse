const express = require("express");
const app = express()
const cors = require("cors");
const axios = require('axios');
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.use(express.json());

app.post("/api/data", (req, res) => {
//     res.json({"fruits": ["apple", "orange", "banana"]});
// });
    console.log(req.body);
    const spellname = req.body.spellName;
    var endpoint = 'https://www.dnd5eapi.co/api/spells/' + spellname;

    axios.get(endpoint).then(response => {
        console.log(response.data);
        res.json(response.data);
    }).catch(error => {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    });
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});