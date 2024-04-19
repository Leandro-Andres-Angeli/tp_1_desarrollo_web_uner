const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configura Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));


// Ruta de inicio
app.get('/', (req, res) => {
  res.send('index');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
