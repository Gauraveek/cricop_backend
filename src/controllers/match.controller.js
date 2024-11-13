const axios = require("axios");
const mongoose = require('mongoose');
const apiDataSchema = new mongoose.Schema({}, {strict : false});

function getModel(collectionName){
    return mongoose.model(collectionName, apiDataSchema, collectionName);
}

exports.featuredMatches = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/featured-matches-2/`;

    const response = await axios.get(url, {
      headers: {
        "rs-token": token,
      },
    });
    const collectionName = 'all_featured_matches';
    const Model = getModel(collectionName);
    const matches = response.data.data.matches;
    for(const match of matches){
        const newData = Model(match);
        await newData.save();
    }
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error fetching featured matches : ${error}`);
  }
};


                         
exports.matchDetails = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        var key = 'a-rz--cricket--SP1850904316072906838'  
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${key}/`;
    
        const response = await axios.get(url, {
          headers: {
            "rs-token": token,
          },
        });

        const collectionName = 'match_details';
        const Model = getModel(collectionName);
        const match_details = response.data.data;

        const newData = Model(match_details);
        await newData.save();

        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json(`Error fetching match details : ${error}`);
      }
}

exports.matchBallByBall = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        var key = 'a-rz--cricket--SP1850904316072906838'  
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${key}/ball-by-ball/`;
    
        const response = await axios.get(url, {
          headers: {
            "rs-token": token,
          },
        });
        const collectionName = 'match_ball_by_ball';
        const Model = getModel(collectionName);
        const match_details = response.data.data;

        const newData = Model(match_details);
        await newData.save();

        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json(`Error fetching match ball by ball : ${error}`);
      }
}

exports.matchBallByBallFirstOver = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        var key = 'a-rz--cricket--SP1850904316072906838'  
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${key}/ball-by-ball/FIRST-OVER/`;
    
        const response = await axios.get(url, {
          headers: {
            "rs-token": token,
          },
        });
        const collectionName = 'match_ball_by_ball_first_over';
        const Model = getModel(collectionName);
        const match_details = response.data.data;

        const newData = Model(match_details);
        await newData.save();
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json(`Error fetching match ball by ball first over : ${error}`);
      }
}

exports.matchBallByBallOverIndex = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        var key = 'a-rz--cricket--SP1850904316072906838';
        var over_key = 'b_1_11'
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${key}/ball-by-ball/${over_key}/`;
    
        const response = await axios.get(url, {
          headers: {
            "rs-token": token,
          },
        });
        const collectionName = 'match_ball_by_ball_over_index';
        const Model = getModel(collectionName);
        const match_details = response.data.data;

        const newData = Model(match_details);
        await newData.save();
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json(`Error fetching match ball by ball by over index : ${error}`);
      }
}

exports.matchOverSummary = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        var key = 'a-rz--cricket--SP1850904316072906838';
        var over_key = 'b_1_11'
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${key}/ball-by-ball/${over_key}/`;
    
        const response = await axios.get(url, {
          headers: {
            "rs-token": token,
          },
        });
        const collectionName = 'match_over_summary';
        const Model = getModel(collectionName);
        const match_details = response.data.data;

        const newData = Model(match_details);
        await newData.save();
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json(`Error fetching match ball by ball by over index : ${error}`);
      }
}   

 ////////all the below apis returns 403 : Access limited to specific users////
exports.getFixtures = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/fixtures/`;

        const response = await axios.get(url, {headers : {'rs-token' : token}});
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching fixtures : ${error}`);
    }
}


///got the scorecard

