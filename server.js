const express = require("express");
const app = express();
var cors = require('cors')
const morgan = require("morgan");
const home = require("./routes/home");
const path = require("path");

var database = require('./Database');


const port = process.env.PORT || 4000;

// Middleware
app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true })); //key=value&key=value as req.body

// serves the built version of your react app
app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());
app.use(morgan("tiny")); // HTTP request logger

// Routes
app.use("/api/home", home);

app.get("/api/status", (req, res) =>{
  res.send("Server is running");
})
app.get("/api/createuser", async (req, res) =>{
  const response = await database.CreateUser(req.query.username,req.query.password,req.query.type);
  res.json(response);
})
app.get("/api/verifyuser", async (req, res) =>{
  const response = await database.VerifyUser(req.query.username,req.query.password,req.query.type);
  res.json(response);
})
app.get("/api/updateseller", async (req, res) =>{
  const response = await database.UpdateSeller(req.query.username,req.query.price);
  res.json(response);
})
app.get("/api/getproperties", async (req, res) =>{
  const response = await database.Get_AllProperties();
  res.json(response);
})

app.get("/api/getproperty", async (req, res) =>{
  const response = await database.Get_Property(req.query.amount,req.query.state, req.query.city,req.query.type, req.query.rooms);
  res.json(response);
})
app.get("/api/getpropertybyID", async (req, res) =>{
  const response = await database.Get_Property_id(req.query.id);
  res.json(response);
})
app.get("/api/getmyproperties", async (req, res) =>{
  const response = await database.Get_MyProperties(req.query.username);
  res.json(response);
})
app.post("/api/createproperty", async (req, res) =>{
  const response = await database.Create_Property(req.body.username, req.body.title, req.body.description, req.body.url, req.body.amount, req.body.state, req.body.city, req.body.zipcode,req.body.type, req.body.rooms, req.body.bathrooms, req.body.purchase);
  //res.json(response);
})

app.get("/api/remove_property", async (req, res) =>{
  const response = await database.Remove_Property(req.query.id);
  res.json(response);
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});



//database.Connect();