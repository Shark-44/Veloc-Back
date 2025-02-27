import dotenv from "dotenv";
import { AppDataSource } from "./config/data-source";

import app from "./app";


dotenv.config();

const PORT = parseInt(process.env.APP_PORT ?? "4242", 10)


async function startServer() {
  try {
      await AppDataSource.initialize();  

      app.listen(PORT, () => {
          console.log(`Serveur démarré sur le port ${PORT}`);
      });
  } catch (error) {
      console.error("Erreur au démarrage du serveur:", error);
      process.exit(1);
  }
}

startServer();
