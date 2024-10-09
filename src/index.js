const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const collection = require("./mongodb");
const detail=require("./mongo");
const tempelatepath = path.join(__dirname, "../temelates");
app.use(express.json());
app.set("view engine", "hbs");
app.set("views", tempelatepath);
app.use("/images",express.static('images'));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };

  await collection.insertMany([data]);
  res.render("home");
});




app.get("/register1", (req, res) => {
  res.render("register1");
});
app.post("/register1", async (req, res) => {
  const data = {
    name: req.body.name,
    department: req.body.department,
    email: req.body.email,
    password: req.body.password,
    ac: req.body.ac,
    phoneno: req.body.phoneno,
    gender: req.body.gender,
  };

  await detail.insertMany([data]);
  res.render("sucs");
});

app.post("/login", async (req, res) => {
    console.log("super yogi")
  try {
    const check = await collection.findOne({ name: req.body.name });
    if (check.password === req.body.password) {
      res.render("home");
    } else {
      res.send("wrong password");
    }
  } catch {
    res.send("wrong details");
  }
});

app.listen(3000, () => {
  console.log("port connnected");
});
