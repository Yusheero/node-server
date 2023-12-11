const express = require('express');
const path = require('path');

const app = express();
app.set('view-engine', 'html');

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`)

app.listen(PORT, 'localhost', (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.use(express.static('styles')); // Подключение стилей

//Главная страница
app.get('/', (req, res) => {
  res.sendFile(createPath('index'));
})

//Страница с контактами
app.get('/contacts', (req, res) => {
  res.sendFile(createPath('contacts'));
})

//Страница о нас с редиректом
app.get('/about-us', (req, res) => {
  res.redirect('contacts');
})

//Страница с ошибкой
app.use((req, res) => {
  res
    .sendFile(createPath('error'));
})