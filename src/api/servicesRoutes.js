const express = require('express');
const { ObjectId } = require('mongodb');
const { dbClient } = require('../config');

const servicesRoutes = express.Router();

servicesRoutes.get('/services', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    const collection = dbClient.db('memberships11').collection('services');
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

servicesRoutes.post('/services', async (req, res) => {
  try {
    await dbClient.connect();
    console.log('connected');
    // paimti gautus duomenis
    console.log('new service ===', req.body);
    const newServiceObj = req.body;
    // su jais sukurti nauja servisa
    const collection = dbClient.db('memberships11').collection('services');
    const insertResult = await collection.insertOne(newServiceObj);
    res.status(201).json(insertResult);
  } catch (error) {
    console.error('error in creating a service', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

//DELETE /api/services/:serId - tuecias routes kuris grazina serId
servicesRoutes.delete('/services/:delServiceId', async (req, res) => {
  try {
    const { delServiceId } = req.params;
    await dbClient.connect();
    const collection = dbClient.db('memberships11').collection('services');
    const deleteRezult = await collection.deleteOne({ _id: ObjectId(delServiceId) });
    console.log('deleteResult ===', deleteRezult);
    // isitikinti kad is tikro buvo istrinta
    if (deleteRezult.deletedCount === 1) {
      res.status(200).json({ success: true });
      return;
    }
    if (deleteRezult.deletedCount === 0) {
      res.status(400).json({ err: 'no thing was deleted' });
      return;
    }
    res.status(500).json('something is wrong');
  } catch (error) {
    console.error('error in delete user', error);
    res.status(500).json('something is wrong');
  } finally {
    await dbClient.close();
  }
});

module.exports = servicesRoutes;
