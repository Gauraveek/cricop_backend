const axios = require('axios');
exports.getToken = async (req, res) => {
    var project_key = req.params.project_key;
    var api_key = req.body.api_key;
    try {
        const response = await axios.post(`https://api.sports.roanuz.com/v5/core/${project_key}/auth/`, { api_key }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching auth token', error: error.message });
    }

};
