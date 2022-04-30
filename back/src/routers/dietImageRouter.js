import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { dietImageService } from "../services/dietImageService";

const dietImageRouter = Router();
const { upload } = require("../utils/s3");
dietImageRouter.use(login_required);

dietImageRouter.post(
  "/dietimage",
  upload.single("dietImg"),
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const { whenDate, type } = req.body;
      const imgurl = req.file.location;
      console.log("s3 이미지 경로 :", imgurl);

      const newItem = await dietImageService.addItem({
        userId,
        whenDate,
        type,
        imgurl,
      });

      res.status(201).send(newItem);
    } catch (error) {
      next(error);
    }
  }
);

dietImageRouter.get("/dietimage/item/:itemId", async function (req, res, next) {
  try {
    const { itemId } = req.params;
    const foundItem = await dietImageService.getItem({ itemId });

    res.status(200).send(foundItem);
  } catch (error) {
    next(error);
  }
});

dietImageRouter.get("/dietimage/items", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    const { whenDate, type } = req.body;
    const foundItem = await dietImageService.getItemList({
      userId,
      whenDate,
      type,
    });

    res.status(200).send(foundItem);
  } catch (error) {
    next(error);
  }
});

dietImageRouter.put(
  "/dietimage/item/:itemId",
  upload.single("dietImg"),
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      console.log("itemId :", itemId);
      const Img = req.file;
      console.log("이미지 정보 :", Img);
      const imgurl = Img.location;
      console.log("s3 이미지 경로 :", imgurl);

      const toUpdate = { imgurl };

      const updatedItem = await dietImageService.setItem({
        itemId,
        toUpdate,
      });

      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  }
);

dietImageRouter.delete(
  "/dietimage/item/:itemId",
  async function (req, res, next) {
    try {
      const { itemId } = req.params;
      await dietImageService.deleteItem({ itemId });

      res.status(200).end();
    } catch (error) {
      next(error);
    }
  }
);

dietImageRouter.delete("/dietimage/items", async function (req, res, next) {
  try {
    const userId = req.currentUserId;
    await dietImageService.deleteItemList({ userId });

    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

export { dietImageRouter };