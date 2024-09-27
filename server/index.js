const express = require("express");
const app = express()
const cors = require("cors");
const axios = require('axios');
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api/data", (req, res) => {
//     res.json({"fruits": ["apple", "orange", "banana"]});
// });

    axios.get('https://www.dnd5eapi.co/api/spells/acid-arrow').then(response => {
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