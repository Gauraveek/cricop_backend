const axios = require('axios');
const mongoose = require('mongoose');

const apiDataSchema = new mongoose.Schema({}, {strict: false});

function getModel(collectionName){
    return mongoose.model(collectionName, apiDataSchema, collectionName);
}

exports.getAllFeauteredTournaments = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/featured-tournaments/`;

        const response = await axios.get(url, {
            headers : {
                'rs-token' : token
            }
        });

        const collectionName = 'featured_tournaments';
        const Model = getModel(collectionName);
        const tournaments = response.data.data.tournaments;

        for(const tournament of tournaments){
            const newData = Model(tournament);
            await newData.save();
        }

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching all featured tournaments : ${error}`);        
    }
}

exports.getFeaturedMatches = async(req,res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        const tournament_key = 'ausind_2020';
        const page_key = '2'
        const url =`https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/featured-matches-2/`;

        const response = await axios.get(url, {
            headers : {
                'rs-token' : token
            }
        });

        const collectionName = 'featured_matches';
        const Model = getModel(collectionName);
        const matches = response.data.data.matches;
        
        for(const match of matches){
            const newData = Model(match);
            await newData.save();
        }

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching all featured tournaments : ${error}`);        
    }
}


exports.getFixtures = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        const tournament_key = 'ausind_2020';
        const url =`https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/fixtures/`;

        const response = await axios.get(url, {
            headers : {
                'rs-token' : token
            }
        });

        const collectionName = 'fixtures';
        const Model = getModel(collectionName);
        const fixtures = response.data.data.matches;

        for(const fixture of fixtures){
            const newData = Model(fixture);
            await newData.save();
        }

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching all featured tournaments : ${error}`);        
    }
}

exports.getTournamentDetails = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        const tournament_key = 'ausind_2020';
        const url =`https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/`;

        const response = await axios.get(url, {
            headers : {
                'rs-token' : token
            }
        });

        const collectionName = 'tournament_details';
        const Model = getModel(collectionName);
        const details = response.data.data;

        const newData = Model(details);
        await newData.save();

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching all featured tournaments : ${error}`);        
    }
}

///This api is supposed to give points table as a response but the response object does not contain any points so check that out 
//also the data is being saved in the same collection as getTournamentDetails, figure this out
exports.getTournamentTables = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        const tournament_key = 'ausind_2020';
        const url =`https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/points/`;

        const response = await axios.get(url, {
            headers : {
                'rs-token' : token
            }
        });

        const collectionName = 'tournament_tables';
        const Model = getModel(collectionName);
        const tables = response.data.data;
        const newData = Model(tables);
        await newData.save();
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching all featured tournaments : ${error}`);        
    }
}


exports.getTeamDetails = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        const tournament_key = 'ausind_2020';
        const team_key = 'ind';
        const url =`https://api.sports.roanuz.com/v5/cricket/${project_key}/tournament/${tournament_key}/team/${team_key}/`;

        const response = await axios.get(url, {
            headers : {
                'rs-token' : token
            }
        });
        const collectionName = 'team_details';
        const Model = getModel(collectionName);
        const details = response.data.data;
        const newData = Model(details);
        newData.save();

        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching all featured tournaments : ${error}`);        
    }   
}