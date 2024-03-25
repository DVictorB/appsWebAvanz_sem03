const express = require ("express");
const port = 3500;
const app = express();

app.get("/", (req, res)=> {
    res.send("Hola mundo")
})

app.get("/myfile", (req, res) => {
    res.sendFile("./img/tecsup.jpg", {
    root: __dirname
    })
})

app.get("/user", (req, res) => {
    res.json({
        nombres:"Genaro",
        apellidos:"Delgado Parker",
        edad:65,
        points:[1,2,3],
        address:{
            ciudad: "Lima - Perú",
            distrito: "San Isidro",
            calle: "Av. Las gardenias 177"
        }
    })
})

app.get("/isAlive", (req, res) => {
    res.sendStatus(204)
})

app.listen(port)
console.log("Server on port #{port}")