const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const categoryRoutes = require('./routes/category');
const analyticsRoutes = require('./routes/analytics');
const keys = require('./config/keys')
const app = express();

mongoose.connect(keys.mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(e => console.log(e));

app.use(passport.initialize({}));
require('./middleware/passport')(passport);

app.use('/uploads', express.static('uploads'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/analytics', analyticsRoutes);

module.exports = app;
