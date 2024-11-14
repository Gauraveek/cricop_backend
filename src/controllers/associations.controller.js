const axios = require("axios");

const mongoose = require("mongoose");

// A generic schema to hold any data structure.
const apiDataSchema = new mongoose.Schema({}, { strict: false });

function getModel(collectionName) {
  return mongoose.model(collectionName, apiDataSchema, collectionName);
}

exports.getAssociatons = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const rs_token = req.body.rs_token; //get this token as a header instead of body
    const page_key = "2";
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/list/`;

    const response = await axios.get(url, {
      headers: {
        "rs-token": rs_token,
      },
    });
    const collectionName = "associations"; // Use a unique name for each endpoint
    const Model = getModel(collectionName);
    const associations = response.data.data.associations;

    for (const association of associations) {
      const newData = new Model(association);
      await newData.save();
    }

    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error while fethcing list of associations`, error });
  }
};

exports.getCountry = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/country/list/`;
    const response = await axios.get(url, {
      headers: {
        "rs-token": token,
      },
    });

    const collectionName = "countries";
    const Model = getModel(collectionName);
    const countries = response.data.data.countries;
    for (const country of countries) {
      const newData = new Model(country);
      await newData.save();
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error while fetching list of countries : ${error} `);
  }
};

///venue api returning 404, contact help
exports.getVenue = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const page_key = "1";
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/venue/list/${page_key}`;

    const response = await axios.get(url, {
      heaaders: {
        "rs-token": token,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error while fetching venues : ${error}`);
  }
};

exports.getAssociationsByCountryInternational = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/list-by-country/INTERNATIONAL/`;
    const response = await axios.get(url, {
      headers: {
        "rs-token": token,
      },
    });
    const collectionName = "international_assocaitions";
    const Model = getModel(collectionName);
    const associations = response.data.data.associations;
    for (const association of associations) {
      const newData = Model(association);
      await newData.save();
    }

    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json(
        `Error while fetching associations by Country International: ${error}`
      );
  }
};

exports.getAssociatonsByCountry = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const country_code = "IND";
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/list-by-country/${country_code}/`;
    const response = await axios.get(url, {
      headers: {
        "rs-token": token,
      },
    });

    const collectionName = "national_associations";
    const Model = getModel(collectionName);
    const someData = response.data.data.associations;
    // console.log(someData);
    for (const association of someData) {
      const newData = Model(association);
      await newData.save();
    }

    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json(`Error while fetching associations by Country: ${error}`);
  }
};

exports.getFeaturedTournaments = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const association_key = "c.board.bcci.b13f0";
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/association/${association_key}/featured-tournaments/`;
    const response = await axios.get(url, {
      headers: {
        "rs-token": token,
      },
    });
    const collectionName = "featured_tournaments";
    const Model = getModel(collectionName);
    const tournaments = response.data.data.tournaments;

    for (const tournament of tournaments) {
      const newData = Model(tournament);
      newData.save();
    }

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error while fetching featured tournaments: ${error}`);
  }
};

///getCountryFlag api is returning 404, contact help
exports.getCountryFlag = async (req, res) => {
  try {
    const project_key = req.params.project_key;
    const token = req.body.token;
    const url = `https://api.sports.roanuz.com/v5/cricket/${project_key}/country/ind/flags/`;
    const response = await axios.get(url, {
      headers: {
        "rs-token": token,
      },
    });

    const collectionName = "country_flags";
    const Model = getModel(collectionName);
    //api is giving 404

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(`Error while fetching country flags: ${error}`);
  }
};
