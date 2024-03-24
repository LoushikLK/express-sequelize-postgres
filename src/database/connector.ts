import { Sequelize } from "sequelize";

require("dotenv").config();
const sequelizeInstance = new Sequelize(process.env.DATABASE_URL as string, {
  logging: console.log,
  dialectModule: require("pg"),
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      // For self-signed certificates, set to true
      rejectUnauthorized: false,
      // Other SSL options as needed
    },
  },
});

const connectToDb = async () => {
  try {
    await sequelizeInstance.authenticate();
    await sequelizeInstance.sync();
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connectToDb, sequelizeInstance };
