module.exports = function (sequelize, DataTypes) {
  var Tech = sequelize.define("Tech", {
    userid: {
      type: DataTypes.INTEGER,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      Validite: {
        is: ["^[a-z]+$", 'i'],
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", 'i'],
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
      type: DataTypes.STRING,
    },
    heightinches: {
      type: DataTypes.STRING,
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
        len: [0, 255]
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
    zodiac: {
      type: DataTypes.STRING,
    },
    ethnicity: {
      type: DataTypes.STRING,
    },
    job: {
      type: DataTypes.STRING,
    },
    company: {
      type: DataTypes.STRING,
    },
    interest1: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500]
      },
    },
    interest2: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500]
      },
    },
    interest3: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500]
      },
    },
    interest4: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500]
      },
    },
    interest5: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 500]
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    imgurl: {
      type: DataTypes.TEXT,
      validate: {
        len: [0, 500]
      },
    }
  });
  return Tech;
};
