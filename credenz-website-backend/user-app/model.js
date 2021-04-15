const mongoose = require("mongoose");

const user_schema = mongoose.Schema({
  _id: { type: Number, require: true, unique: true },
  username: { type: String, require: true, unique: true, lowercase: true },
  password: { type: String, require: true },
  email: { type: String, require: true, unique: true, lowercase: true },
  phoneno: { type: Number, require: true },
  clgname: { type: String, require: true },
  name: { type: String, require: true },
  role: { type: String, require: true },
  ieee: { type: Boolean, require: true },
  ieeeid: { type: String, require: true },
  ispict: {type: Boolean, require: true}
});

const teams_schema = mongoose.Schema({
  // _id: {type: Number, require: true, unique: true},
  team_username: { type: String, require: true, lowercase: true },
  no_of_players: { type: Number, require: true },
  players: [{ type: String, lowercase: true }],
  count: { type: Number },
  logedin_players: [{ type: String, lowercase: true }],
  event_name: { type: String },
});

const event_schema = mongoose.Schema({
  _id: { type: Number, require: true, unique: true },
  event_username: {
    type: String,
    require: true,
    lowercase: true,
    unique: true,
  },
  event_name: { type: String, require: true },
  event_des: { type: String, require: true },
  event_time: { type: Date, require: true },
  event_price: { type: Number, require: true },
});

const register_schema = mongoose.Schema({
  event_username: { type: String, require: true, lowercase: true },
  username: { type: String, require: true },
  price: { type: Number, require: true },
  random_pw: { type: String, require: true },
  played: { type: Boolean, require: true, default: false },
  gain_score: { type: Number, require: true, default: null },
  outof_score: { type: Number, require: true, default: null },
  approved: { type: Boolean, require: true, default: false },
  transaction_id: { type: String, default: null },
  reg_time: { type: Date, require: true }
});

const leaderboard_schema = mongoose.Schema({
  _id: { type: Number, require: true, unique: true },
  username: { type: String, require: true },
  college: { type: String, require: true },
  score: { type: Number, require: true, default: null },
});

const update_schema = mongoose.Schema({
  _id: { type: Number, require: true, unique: true },
  event: { type: String, require: true },
  headline: { type: String, require: true },
  info: { type: String, require: true },
});

const sponsors_schema = mongoose.Schema({
  _id: { type: Number, require: true, unique: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  imageurl: { type: String, require: true, default: null },
});

User = mongoose.model("User", user_schema, "users");
Event = mongoose.model("Event", event_schema, "events");
Register = mongoose.model("Register", register_schema, "register");
Update = mongoose.model("Update", update_schema, "updates");
Teams = mongoose.model("Teams", teams_schema, "teams");
Leaderboard = mongoose.model("Leaderboard", leaderboard_schema, "leaderboard");
Sponsors = mongoose.model("Sponsors", sponsors_schema, "sponsors");

module.exports = {
  User,
  Event,
  Register,
  Update,
  Teams,
  Leaderboard,
  Sponsors,
};
