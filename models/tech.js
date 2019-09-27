module.exports = function (sequelize, DataTypes) {
  var Tech = sequelize.define("Tech", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      Validite: {
        is: ["^[a-z]+$", 'i'],
        len: [2, 50],
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        not: ["[a-z]", 'i'],
        isInt: true,
      }
    },
    gender: {
      type: DataTypes.STRING,
      Validite: {
        is: ["^[a-z]+$", 'i'],
      }
    },
    heightfeet: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        isInt: true,
      }
    },
    heightinches: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        isInt: true,
      }
    },
    drinks: {
      type: DataTypes.STRING,
      Validite: {
        is: ["^[a-z]+$", 'i'],
      }
    },
    city: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 50]
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$", 'i'],
        isIn: [["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA",
          "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT",
          "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC",
          "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]]
      },
    },
    // email: {
    //   type: DataTypes.STRING,
    //   validate: {
    //     isEmail: true
    //   }
    // },
  });
  return Tech;
};
