const { Router } = require("express");
const router = Router();
const fs = require('fs');
const path = require('path'); // Import the path module

router.get("/:id", (req, res) => {    
    const itemId = parseInt(req.params.id);
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'database.json')));
    const selectedItem = data.find(item => item.id === itemId);
    if (selectedItem) {        
        res.render("edit", {title: "creating new post", post: selectedItem})
    } else {
        res.status(404).send('Item not found');
    }
})

router.post("/:id", (req,res) => {
    const itemId = parseInt(req.params.id);
    const {title, description, location, date, image} = req.body;    
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'database.json'))); // Adjust the file path
    data.forEach(item => {
        if (item.id === itemId) {
            item.title = title,
            item.description = description,
            item.location = location,
            item.date = date,
            item.image = image
        }
    });
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'database.json'), JSON.stringify(data, null, 2)); // Adjust the file path
    res.redirect('/');
})

module.exports = router;