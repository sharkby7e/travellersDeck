const Traveller = require("./Traveller");
const Trip = require("./Trip");
const Location = require("./Location");

Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "planned_trips",
});

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "travellers_locations",
});

// Trip.hasMany(Location, {
//   foreignKey: "location_id",
// });

module.exports = {
  Traveller,
  Trip,
  Location,
};
