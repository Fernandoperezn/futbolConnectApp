require('dotenv').config();
const express = require('express');
const cors = require('cors');
const UserRoutes = require('./routes/userRoutes');


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
res.status(200).send('Bienvenido a la API')
})

app.use(UserRoutes);

app.listen(3000, ()=> console.log("El servidor esta corriendo correctamente"));