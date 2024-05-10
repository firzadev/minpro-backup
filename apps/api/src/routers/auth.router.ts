import { AuthController } from '@/controllers/auth.controller';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.authController.registerController);
    this.router.get('/user-point', this.authController.getUserPointController);
    this.router.get(
      '/user-discount',
      this.authController.getUserDiscountController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
