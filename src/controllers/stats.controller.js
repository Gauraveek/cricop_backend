const axios = require("axios");
const mongoose = require("mongoose");
const apiDataSchema = new mongoose.Schema({}, { strict: false });

function getModel(collectionName) {
  return mongoose.model(collectionName, apiDataSchema, collectionName);
}

exports.tournamentStats = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const tournament_key = "ausind_2020";
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/stats/`;

    const response = await axios.get(url, { headers: { "rs-token": token } });
    const collectionName = 'tournament_stats';
    const Model = getModel(collectionName);
    const tournamentStats = response.data.data;
    const newData = Model(tournamentStats);
    await newData.save();

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error while fetching tournament stats : ${error}`);
  }
};

exports.playerStats = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const tournament_key = "ausind_2020";
    var player_key = "s_samson";
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/player/${player_key}/stats/`;

    const response = await axios.get(url, { headers: { "rs-token": token } });
    const collectionName = 'player_stats';
    const Model = getModel(collectionName);
    const playerStats = response.data.data.stats;
    const newData = Model(playerStats);
    await newData.save();
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error while fetching player stats : ${error}`);
  }
};

exports.associationPlayerStats = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    //var competition = "ipl";
    var association_key = "bcci";
    var player_key = "v_kohli";
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/${association_key}/player/${player_key}/stats/`;

    const response = await axios.get(url, { headers: { "rs-token": token } });
    const collectionName = 'association_player_stats';
    const Model = getModel(collectionName);
    const associationPlayerStats = response.data.data;
    const newData = Model(associationPlayerStats);
    await newData.save();
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error while fetching player stats : ${error}`);
  }
};
