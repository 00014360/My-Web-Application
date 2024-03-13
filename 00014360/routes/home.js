const { Router } = require("express");
const router = Router();
const fs = require('fs');
const path = require('path'); // Import the path module

router.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'database.json')));
    res.render("index", {posts: data})
})

module.exports = router;