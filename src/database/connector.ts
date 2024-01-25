import { Sequelize } from "sequelize";

const sequelizeInstance = new Sequelize(
  "postgres://postgres:1qaz2wsx@127.0.0.1:5432/test-db",
  {
    logging: console.log,
  }
);

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
