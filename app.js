const express = require('express');
const hbs = require('hbs');
const path = require('path');
require('dotenv').config();

const mongodb = require('./models/db');
mongodb.connectDB();

const app = express();

app.set('view engine', 'hbs');

const partialsPath = path.join(__dirname, './views/partial');
hbs.registerPartials(partialsPath); 

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/beranda') );
app.use('/jadwal', require('./routes/jadwal') );
app.use('/pesan-tiket', require('./routes/pesan-tiket') );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

