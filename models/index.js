const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  foreignKey: "location_id",
  foreignKey: "traveller_id",
});

// Trip.hasMany(Location, {
//   foreignKey: "location_id",
// });

module.exports = {
  Traveller,
  Trip,
  Location,
};
