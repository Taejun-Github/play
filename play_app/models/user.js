const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  resetToken: {
    type: String,
    required: false,
  },
  resetTokenExpiration: {
    type: Date,
    required: false,
  },
  // 비밀번호 reset 에 관련된 것은 추후에 메일 보내기를 구현한 다음에 구현한다.
  // chats: {
  //
  // }
  // 추후에 데이터 만들기(채팅방)
});

module.exports = mongoose.model("User", userSchema);
