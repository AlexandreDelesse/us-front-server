const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve les fichiers statiques du build React
app.use(express.static(path.join(__dirname, 'build')));

// Pour toutes les autres routes, renvoie le fichier index.html de React
app.get('*', (req, res) => {
  res.send('coucou')
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});