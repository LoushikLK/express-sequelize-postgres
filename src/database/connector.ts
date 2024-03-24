import { Sequelize } from "sequelize";

const sequelizeInstance = new Sequelize(process.env.DATABASE_URL as string, {
  logging: console.log,
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
