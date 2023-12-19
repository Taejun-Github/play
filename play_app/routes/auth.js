const express = require('express');
const router = express.Router();
const {  body } = require("express-validator");

const authController = require('../controllers/auth');
const User = require('../models/user');

router.get('/', authController.test);

router.post('/signup', [
    body("email")
        .isEmail()
        .withMessage("Please enter a valid email address.")
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8, max: 12 })
        .withMessage('Password must be at least 8~12 characters long.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.')
        .trim(),
    body("confirmPassword")
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords have to match!");
            }
            return true;
        }),
], authController.postSignup);

router.post('/login',[
    body("email")
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),
    body('password')
        .isLength({ min: 8, max: 12 })
        .withMessage('Password must be at least 8~12 characters long.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.')
        .trim()
], authController.login);

module.exports = router;
