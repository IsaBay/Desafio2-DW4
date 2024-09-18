import express from 'express';

const app = express();
const puerto = 3000;


app.get('/', (req, res) => {
res.send('¡Hola, mundo con Express! ');
});

app.listen(puerto, () => {
console.log(`Servidor en funcionamiento en el puerto${puerto}`);
});