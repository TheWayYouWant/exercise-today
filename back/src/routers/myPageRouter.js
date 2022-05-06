import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { myPageService } from "../services/myPageService";

const myPageRouter = Router();

myPageRouter.get(
  "/mypage/weight/all",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const weightInfo = await myPageService.getWeight({ userId });

      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

myPageRouter.get(
  "/mypage/weight/week",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const weightInfo = await myPageService.getWeightWeek({ userId });
      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

myPageRouter.get(
  "/mypage/weight/month",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const weightInfo = await myPageService.getWeightMonth({ userId });
      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

myPageRouter.get(
  "/mypage/weight/threemonth",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const weightInfo = await myPageService.getWeightThreeMonth({ userId });
      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

myPageRouter.get(
  "/mypage/weight/sixmonth",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const weightInfo = await myPageService.getWeightSixMonth({ userId });
      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

myPageRouter.get(
  "/mypage/weight/year",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const weightInfo = await myPageService.getWeightYear({ userId });
      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

myPageRouter.get(
  "/mypage/weight/:startdate/:finishdate",
  login_required,
  async function (req, res, next) {
    try {
      const userId = req.currentUserId;
      const startDate = req.params.startdate;
      const finishDate = req.params.finishdate;
      const weightInfo = await myPageService.getWeightSelectedDate({
        userId,
        startDate,
        finishDate,
      });
      res.status(200).send(weightInfo);
    } catch (error) {
      next(error);
    }
  }
);

export { myPageRouter };
