const express = require('express')
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();
const loginLimiter = require('../middleware/loginLimiter')
const { register, login, refresh, logout  } = require('../controllers/authController');

router.post('/register', register);  // Register a new user
router.post('/login', login);    // Login with username or email
router.post('/refresh', refresh);
router.post('/logout', logout);

// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);

router.get('/protected', verifyJWT, (req, res) => {
    res.status(200).json({ message: 'Access granted', user: req.user });
});

module.exports = router