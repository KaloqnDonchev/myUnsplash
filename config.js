const config = {
  backendPort: 4000,
  
  db: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "unsplash",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    shouldForceDBSync: false,
    shouldSeedDemoData: false
  }
};

module.exports = config;