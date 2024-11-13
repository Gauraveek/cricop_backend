const express = require('express');

const app = express();
app.use(express.json());

const news = require('./src/routes/news.routes')
const accessTokenRoute = require('./src/routes/accessToken.routes');
const associationRoute = require('./src/routes/associations.routes');
const tournamentsRoute = require('./src/routes/tournaments.routes');
const matchRoutes = require('./src/routes/match.routes');
const statsRoutes = require('./src/routes/stats.routes');
const fantasyRoutes = require('./src/routes/fantasy.routes');
const matchOddsRoutes = require('./src/routes/matchOdds.routes');

app.use('/api', accessTokenRoute);
app.use('/associations', associationRoute);
app.use('/tournaments', tournamentsRoute);
app.use('/match', matchRoutes);
app.use('/stats', statsRoutes);
app.use('/fantasy', fantasyRoutes);
app.use('/matchOdds', matchOddsRoutes);


module.exports=app;