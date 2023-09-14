const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
require("dotenv").config();
const {routesInit} = require("./routes/config_routes");
// const { Console } = require("console");
require("./db/mongoconnect");

const app = express();

// נותן גישה לכל הדומיינים לגשת לשרת שלנו
app.use(cors());
// כדי שנוכל לקבל באדי ויתרגם אותו לפורמט ג'ייסון
app.use(express.json());
// הגדרת תקיית הפאבליק כתקייה ראשית
app.use(express.static(path.join(__dirname,"public")))

routesInit(app);

const server = http.createServer(app);
// console.log(process.env.USER_DB)
let port = process.env.PORT || 3002
server.listen(port);