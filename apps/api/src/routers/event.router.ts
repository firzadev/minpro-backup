import { EventController } from '@/controllers/event.controller';
import { uploader } from '@/libs/uploader';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.eventController = new EventController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      uploader('IMG', '/images').single('thumbnail'),
      this.eventController.createEventController,
    );
    // this.router.get('/user-point', this.authController.getUserPointController);
  }

  getRouter(): Router {
    return this.router;
  }
}
