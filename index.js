const express = require("express");
const morgan = require("morgan");
const app = express();

// Config
app.set("port", 3000);

// Middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Starting to server

app.listen(app.get("port"), () => {
    console.log("Server connect in port " + app.get("port"));
})