const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const config = require("./config");
const userCtrl = require("./controllers/userCtrl");
const profileCtrl = require("./controllers/profileCtrl");

const app = express();
app.use(json());


const port = 8080;
const corsOption = {
  origin: `http://localhost:${port}`
};
app.use(cors(corsOption));
app.use(session(config));


app.post("/api/login", userCtrl.login);
app.get("/api/profiles", profileCtrl.getCurrentUsersFriendsList);

app.listen(port, function() {
  console.log(`It's running on ${port}`);
})
