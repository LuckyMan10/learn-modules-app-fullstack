import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class CheckAuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.authorization) {
            const error = new ForbiddenException("Необходимо авторизоваться");
            next(error);
        }
        next();
    }
}