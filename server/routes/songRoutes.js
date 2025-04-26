const express = require('express');
const Song = require('../models/Song');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newSong = new Song(req.body);
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json(songs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;