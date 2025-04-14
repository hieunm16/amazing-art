import { sequelize } from "./models/index.js";

export default async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ alter: true });
      console.log("✅ Database synced");
    }
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}
