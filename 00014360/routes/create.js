const { Router } = require("express");
const router = Router();
const fs = require('fs');
const path = require('path'); // Import the path module

router.get("/", (req, res) => {
    res.render("create", {title: "creating new post"})
})

router.post("/", (req,res) => {
    const {title, description, location, date, image} = req.body;
    console.log(req.body);
    const newItem = { id: Date.now(), title: title, description: description, date: date, image: image, location: location };
    const dataBase = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'database.json')));
    dataBase.push(newItem);
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'database.json'), JSON.stringify(dataBase, null, 2));
    res.redirect('/');
})

module.exports = router;