const axios = require('axios');

exports.getMatchCredits = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        var match_key = 'rsaeng_2020_t20_03';
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/fantasy-match-credits/${match_key}/`;

        const response = await axios.get(url, {headers : {'rs-token' : token}});
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching fantasy match credits : ${error}`);
    }
}

exports.getMatchPoints = async(req, res) => {
    try {
        const project_key = req.params.project_key;
        const token = req.body.token;
        var match_key = 'rsaeng_2020_t20_03';
        const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/fantasy-match-points/${match_key}/`;

        const response = await axios.get(url, {headers : {'rs-token' : token}});
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json(`Error while fetching fantasy match credits : ${error}`);
    }
}