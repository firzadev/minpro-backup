import { getUserPointService } from '@/services/auth/getUserPoint.service';
import { registerService } from '@/services/auth/register.service';
import { createEventService } from '@/services/events/createEvent.service';
import { NextFunction, Request, Response } from 'express';

export class EventController {
  async createEventController(req: Request, res: Response, next: NextFunction) {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files?.length) {
        throw new Error('no file uploaded');
      }
      const result = await createEventService(req.body, files[0]);

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
}
