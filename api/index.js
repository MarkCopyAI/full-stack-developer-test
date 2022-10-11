const express = require("express");
const templateRoutes = require("./routes/template.routes");

const app = express();

const port = process.env.PORT || 3001;
app.listen(port);

app.use("/templates", templateRoutes);

console.log("App is listening on port " + port);
