const User = require("./User");
const Activity = require("./Activity");
const Recs = require("./Recs");

User.hasMany(Activity, {
  foreignKey: "user_id",
});

Activity.belongsTo(User, {
  foreignKey: "user_id",
});

Recs.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Activity, Recs };
