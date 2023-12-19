const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
// const nodemailer = require("nodemailer");
// 나중에 메일을 보내는 시스템까지 설치하기 sendgridTransport
const _ = require('lodash');
const User = require('../models/user');

// const transporter = nodemailer.createTransport(
    // sendgridTransport({
    //     auth: {
    //         api_key:
    //             "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",
    //     },
    // })
// );

exports.test = (req, res, next) => {
    console.log('test');
    return res.status(200).json({
        data: 'test'
    })
}

exports.postSignup = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('유효성 검사 실패');
        let errorMsg = _.map(_.uniqBy(errors.array(), 'path'), (value) => value.msg)
        console.log(errorMsg);
        return res.status(422).json({
            message: errorMsg,
            oldInput: {
                email: email,
            },
        })
    }

    // 이메일을 확인해서 중복 회원가입이 되지 않아야 한다.
    const user = await User.findOne({email: email});
    // console.log(user);

    if (user) {
        console.log('회원 중복');
        return res.status(422).json({
            message: 'already exists!',
            oldInput: {
                email: email,
            },
        })
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        const user = new User({email: email, password: hashedPassword});
        await user.save();
        
        // 알맞은 json 데이터 반환
        res.status(200).json({
            message: 'signup successful',
        })
    } catch(err) {
        // 오류 메시지 반환
        res.status(422).json({
            message: 'error happened during signup', // 추후에 공통에러 파일 따로 만들기
            oldInput: {
                email: email,
            },
        })
    }
};
