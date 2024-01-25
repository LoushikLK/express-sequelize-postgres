import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from "../database/connector";
import Note from "./notes.model";

class User extends Model {
  declare id: string;
  declare username: string;
  declare displayName: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize: sequelizeInstance, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
    tableName: "Users",
    timestamps: true,
  }
);

User.hasMany(Note, { as: "notes" });
Note.belongsTo(User, { foreignKey: "userId" });

export default User;
