import express, { Request, Response, Router } from "express";
import {
  createProduct,
  deleteProductByID,
  getAllProducts,
  getProductByID,
} from "./product.service";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.send(products);
});

router.get("/:id", async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const product = await getProductByID(productId);
  res.send(product);
});

router.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const product = await createProduct(data);
  res.send({
    result: product,
    message: "success",
  });
});

// router.delete("/:id", async (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   await deleteProductByID(id);
//   res.send("ok");
// });

router.put("/:id", async (req: Request, res: Response) => {
});

router.patch("/:id", async (req: Request, res: Response) => {
});

export default router;
