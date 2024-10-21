const https = require("https");
const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve les fichiers statiques du build React
app.use(express.static(path.join(__dirname, "build")));

const certOptions = {
  key: fs.readFileSync("../selfsigned.key"),
  cert: fs.readFileSync("../selfsigned.crt"),
};

// Pour toutes les autres routes, renvoie le fichier index.html de React
app.get("/", (req, res) => {
  res.send("Hello https");
});
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

https
  .createServer(options, app)
  .listen(443, () => console.log("Https server running on port 443"));