const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const app = express();

const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'WeatherApp',
    name: 'Levent Kutay',
    header: 'Ana Sayfa'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Hakkında',
    name: 'Levent Kutay'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Yardım',
    name: 'Levent Kutay'
  });
});

app.get('/weather', (req, res) => {
  res.render('weather', {
    title: 'Hava Durumu',
    name: 'Levent Kutay'
  });
});

app.get('/api/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Adres parametresi gereklidir.'
    });
  }

  geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error });
    }

    forecast(latitude, longitude, (error, { sicaklik, hissedilen, yagis, hava } = {}) => {
      if (error) {
        return res.send({ error });
      }

      res.send({
        location,
        address: req.query.address,
        forecast: {
          temperature: sicaklik,
          feelsLike: hissedilen,
          precipitation: yagis,
          weather: hava
        }
      });
    });
  });
});

app.get('/help/*', (req, res) => {
  res.status(404).render('404', {
    title: '404',
    name: 'Levent Kutay',
    errorMessage: '404 help alt sayfası bulunamadı.'
  });
});

app.get('*', (req, res) => {
  res.status(404).render('404', {
    title: '404',
    name: 'Levent Kutay',
    errorMessage: '404 sayfa bulunamadı.'
  });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Search terimini doldurunuz.'
    });
  }
  res.send({
    products: []
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
}); 