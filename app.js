const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const Routes = require('./src/routes/index');

app.use('/api/v1/token', Routes.accessTokenRoutes);
app.use('/api/v1/associations', Routes.associationRoutes);
app.use('/api/v1/tournaments', Routes.tournamentRoutes);
app.use('/api/v1/match', Routes.matchRoutes);
app.use('/api/v1/stats', Routes.statsRoutes);
app.use('/api/v1/fantasy', Routes.fantasyRoutes);
app.use('/api/v1/matchOdds', Routes.matchOddRoutes);


module.exports=app;