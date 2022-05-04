const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");

Traveller.belongsToMany(Location, {
  through: Trip,
  foreignKey: "location_id",
  foreignKey: "traveller_id",
  unique: false,
});

// Trip.hasMany(Location, {
//   foreignKey: "location_id",
// });

module.exports = {
  Traveller,
  Trip,
  Location,
};
