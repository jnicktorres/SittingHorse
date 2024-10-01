const express = require("express");
const app = express()
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

<<<<<<< Updated upstream
app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "orange", "banana"]});
=======
app.get("/api/data", (req, res) => {
//     res.json({"fruits": ["apple", "orange", "banana"]});
// });

    axios.get('https://www.dnd5eapi.co/api/spells/eldritch-blast').then(response => {
        console.log(response.data);
        res.json(response.data);
    }).catch(error => {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    });
>>>>>>> Stashed changes
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});