const express = require('express');
const router = express.Router();

// Sample endpoint for videos
router.get('/', (req, res) => {
  res.json({ message: 'Video route works' });
});

module.exports = router;
