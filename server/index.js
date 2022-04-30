let {SqlWrapper} = require('../server/sql/sql_wrapper');

const express = require("express");

const PORT = process.env.PORT || 4001;

const app = express();


app.get("/", (req, res) => {
    SqlWrapper();
    res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});