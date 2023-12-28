const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const authController = require("../controllers/auth");
const User = require("../models/user");
const isAuth = require("../middleware/token_verify");

router.get("/", isAuth, authController.test);

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 8, max: 12 })
      .withMessage("Password must be at least 8~12 characters long.")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
      .withMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      )
      .trim(),
    body("confirmPassword")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          res.status(422).json({
            message: ["Password have to match"],
            oldInput: {
              email: email,
            },
          });
        }
        return true;
      }),
    //나머지 요소에 대해서 유효성 검사를 추가하기
  ],
  authController.postSignup
);

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email address.")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 8, max: 12 })
      .withMessage("Password must be at least 8~12 characters long.")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/)
      .withMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      )
      .trim(),
  ],
  authController.login
);

module.exports = router;
