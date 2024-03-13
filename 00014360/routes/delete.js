const { Router } = require("express");
const router = Router();
const fs = require('fs');
const path = require('path'); // Import the path module

router.get("/:id", (req, res) => {    
    const itemId = parseInt(req.params.id);    
    let data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'database.json')));
    data = data.filter(item => item.id !== itemId);
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'database.json'), JSON.stringify(data, null, 2)); // Adjust the file path
    res.redirect('/');
})

module.exports = router;