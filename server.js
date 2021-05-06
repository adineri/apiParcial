require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cfenv = require("cfenv");


const app = express();

const port = process.env.PORT || 4000
var db = "";


try {
    // mongoose.connect("mongodb+srv://desarrolloAnahuac:desarrollo2021@clustermongo.jilwu.mongodb.net/tareas?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
        console.log("connected"));

    db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Conectando a la base de datos..."));
} catch (error) {
    console.log("could not connect");
}


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tareas", require("./routes/tareas-routes"));

app.listen(port, () =>{
    console.log("El servidor esta escuchando");
})
