import express, { Express } from "express";
import dotenv from "dotenv";
import routerProduct from "./product/product.controller";
import routerUser from "./user/user.controller";

dotenv.config();
const port = process.env.PORT;
const app: Express = express();
app.use(express.json()); // parse body message for JSON type

app.use("/products", routerProduct);
app.use("/users", routerUser);

app.listen(port, () => {
  console.log(`Now Listening on port ${port}`);
});
