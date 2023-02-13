import {AppDataSource} from "./data-source";
import app from "./app";
  
(async () => {
    await AppDataSource.initialize().then(() => {
    console.log("Data Source initialized")
    }).catch((err) => {
    console.error("Error during Data Source initialization", err);
});

  const port = process.env.PORT || 8000

  app.listen(port, () => console.log(`Running at http://localhost:${port}`));
})();