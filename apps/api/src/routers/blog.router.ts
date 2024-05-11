import { BlogController } from '@/controllers/blog.controller';
import { uploader } from '@/libs/uploader';
import { Router } from 'express';

export class BlogRouter {
  private router: Router;
  private blogController: BlogController;

  constructor() {
    this.blogController = new BlogController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/',
      uploader('IMG', '/images').array('thumbnail', 1),
      this.blogController.createBlogController,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
