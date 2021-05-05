const { db } = require("../config.js");
const imagesModel = require("./models/image");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: db.dialect,
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

imagesModel(sequelize);

module.exports = {
  db,
  startDBConnection: () =>
    new Promise((resolve, reject) => {
      sequelize
        .authenticate()
        .then(() => {
          sequelize
            .sync({ force: db.shouldForceDBSync })
            .then(() => {
              if (db.shouldForceDBSync && db.shouldSeedDemoData) {
                exec("npx sequelize-cli db:seed:all --debug", (error) => {
                  if (error) {
                    console.log(error);
                  }
                  console.log("DB sync and seed has been successfully.");
                  resolve();
                });
              } else {
                console.log("DB sync has been successfully.");
                resolve();
              }
            })
            .catch((error) => {
              console.log(error);
              reject(`Unable to sync database: ${error}`);
            });
        })
        .catch((error) => {
          console.log(error);
          reject(`Unable to connect to the database: ${error}`);
        });
    }),
    getDBModels: () => sequelize.models
};
