const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
// const nodemailer = require("nodemailer");
// 나중에 메일을 보내는 시스템까지 설치하기 sendgridTransport
const _ = require("lodash");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../util/config");

// const transporter = nodemailer.createTransport(
// sendgridTransport({
//     auth: {
//         api_key:
//             "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",
//     },
// })
// );

exports.test = (req, res, next) => {
  // auth 에서 미들웨어로 토큰 검증 설정함
  const decodedToken = req.decodedToken;
  res.json({ message: "Protected resource accessed", user: decodedToken });
};

exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  //   const fullName = req.body.fullName;
  //   const gender = req.body.gender;
  //   const phoneNumber = req.body.phoneNumber;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let errorMsg = _.map(
      _.uniqBy(errors.array(), "path"),
      (value) => value.msg
    );
    return res.status(422).json({
      message: errorMsg,
      oldInput: {
        email: email,
      },
    });
  }

  const user = await User.findOne({ email: email });

  console.log(user);

  if (user) {
    console.log("회원 중복");
    return res.status(422).json({
      message: "already exists!",
      oldInput: {
        email: email,
      },
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  try {
    const newUser = new User({
      email: email,
      password: hashedPassword,
      //   fullName: fullName,
      //   phoneNumber: phoneNumber,
      //   gender: gender,
    });
    await newUser.save();

    // 알맞은 json 데이터 반환
    return res.status(200).json({
      message: ["signup successful"],
    });
  } catch (err) {
    // 오류 메시지 반환
    return res.status(422).json({
      message: ["error happened during signup"], // 추후에 공통에러 파일 따로 만들기
      oldInput: {
        email: email,
        // fullName: fullName,
        // gender: gender,
        // phoneNumber: phoneNumber,
      },
    });
  }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("유효성 검사 실패");
    let errorMsg = _.map(
      _.uniqBy(errors.array(), "path"),
      (value) => value.msg
    );
    console.log(errorMsg);
    return res.status(422).json({
      message: errorMsg,
      oldInput: {
        email: email,
      },
    });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(422).json({
      message: ["There is no user"],
      oldInput: {
        email: email,
      },
    });
  }

  const doMatch = await bcrypt.compare(password, user.password);

  if (doMatch) {
    const token = jwt.sign({ email: email }, config.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({
      message: ["Login successful"],
      token: token,
    });
  } else {
    res.status(401).json({
      message: ["Password does not match"],
      oldInput: {
        email: email,
      },
    });
  }
};
