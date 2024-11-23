import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  console.log("halo ini user");
  res.send("Halo ini user");
});

export default router;
