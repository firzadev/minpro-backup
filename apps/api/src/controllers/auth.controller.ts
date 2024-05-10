import { getUserDiscount } from '@/services/auth/getUserDiscount.service';
import { getUserPointService } from '@/services/auth/getUserPoint.service';
import { registerService } from '@/services/auth/register.service';
import { NextFunction, Request, Response } from 'express';

export class AuthController {
  async registerController(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await registerService(req.body);

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserPointController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getUserPointService();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserDiscountController(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const result = await getUserDiscount();

      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
