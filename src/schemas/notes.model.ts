import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from "../database/connector";

class Note extends Model {
  declare id: string;
}

Note.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "NO ACTION",
      onDelete: "CASCADE",
    },
  },
  {
    // Other model options go here
    sequelize: sequelizeInstance, // We need to pass the connection instance
    modelName: "Note", // We need to choose the model name
    tableName: "Notes",
    timestamps: true,
  }
);

export default Note;
