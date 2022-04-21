const express = require('express');
const { dbClient } = require('../config');

const servicesRoutes = express.Router();

servicesRoutes.get('/services', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    const collection = dbClient.db('membership11').collection('services');
    const allServices = await collection.find().toArray();
    res.status(200).json(allServices);
  } catch (error) {
    console.error('error in getting all services', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

module.exports = servicesRoutes;
