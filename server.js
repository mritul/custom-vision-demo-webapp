const express = require("express");
const dotenv = require("dotenv");
const ejs = require("ejs");
const path = require("path")
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Custom modules
const save_image = require("./multer");
const upload = save_image();

const process_image = require("./process");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// For serving images
app.use(express.static(path.join(__dirname,"/images")))

app.listen(PORT, () => {
  console.log(`Server up and running at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

// uploaded_image is the name of the file input from the form in HTML
app.post("/upload-image", upload.single("uploaded_image"), async(req, res) => {
  const prediction = await process_image();
  res.render("result", { percentage:(prediction.probability*100).toFixed(2),animal:prediction.tagName})
});

