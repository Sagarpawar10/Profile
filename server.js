const express = require('express');
const path = require('path');
const requestLogger = require('./middleware/requestLogger');
const injectProfile = require('./middleware/injectProfile');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(requestLogger);
app.use(injectProfile);

app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express + Creativity');
  next();
});

app.use('/', routes);

app.use((req, res) => {
  res.status(404).render('pages/404', { title: 'Page Not Found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Creative Profile running at http://localhost:${PORT}`);
});
