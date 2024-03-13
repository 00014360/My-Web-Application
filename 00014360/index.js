const express = require("express");
const fileUpload = require("express-fileupload");

const HomePage = require("./routes/home");
const CreateRoute = require("./routes/create");
const EditRoute = require("./routes/edit");
const DeleteRoute = require("./routes/delete");

const app = express();
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs')
app.set("views", `${__dirname}/views`);

//Rendering index.ejs 
app.use('/', HomePage);
app.use('/create', CreateRoute);
app.use('/edit', EditRoute);
app.use('/delete', DeleteRoute);

app.listen(5000, () => {
    console.log("Server has been started on Port 5000...");
});
  