const express = require('express');
const router = express.Router();

// Sample endpoint for users
router.post('/login', (req, res) => {
  res.json({ token: 'user_token' });
});

module.exports = router;
