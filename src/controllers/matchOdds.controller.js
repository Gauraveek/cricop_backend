const axios  = require('axios');
//const req = require('express/lib/request');

exports.liveMatchOdds = async(req, res) => {
    try {
        const project_key = req.params.project_key;
    const token = req.body.token;
    var key = 'iplt20_2021_g042'
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/match/${key}/live-match-odds/`
    const response = await axios.get(url, {headers :{
        'rs-token' : token
    }});
    res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching live match odds : ${error}`);
    }
}