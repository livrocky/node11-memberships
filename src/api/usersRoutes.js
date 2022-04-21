const express = require('express');
const { dbClient } = require('../config');

const userRoutes = express.Router();

// ROUTES
userRoutes.get('/users', async (req, res) => {
  try {
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    console.log('connected');
    const collection = dbClient.db('memberships11').collection('users');
    const allUsers = await collection.find().toArray();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error('error in getting all users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

userRoutes.post('/users', async (req, res) => {
  try {
    await dbClient.connect();
    console.log('connected');
    // paimti gautus duomenis
    console.log('new service', req.body);
    const newServiceObj = req.body;
    // su jais sukurti nauja servisa
    const collection = dbClient.db('memberships11').collection('users');
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

userRoutes.get('/users/:order', async (req, res) => {
  try {
    // const { sortOrder } = req.params;
    // let order = 1;
    // order = sortOrder === 'dsc' ? -1 : 1;
    // const options = {
    //   sort: { age: order },
    // };
    // prisijungti
    await dbClient.connect();
    // atlikti veiksma
    // parsisiusti visus userius is node7 ir grazinti json [] pavidalu
    const collection = dbClient.db('memberships11').collection('users');
    const usersArr = await collection.find({}).sort({ name: -1 }).toArray();
    console.log('connected');
    res.json(usersArr);
  } catch (error) {
    console.error('error in getting users', error);
    res.status(500).json('something is wrong');
  } finally {
    // uzdaryti prisijungima
    await dbClient.close();
  }
});

module.exports = userRoutes;
