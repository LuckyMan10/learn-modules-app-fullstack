import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class CheckConnectMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const accessKey = process.env.API_KEY || '1f518b6c-60d5-11ec-8607-0242ac130002';
        const apiKey = req.headers.api_key;
        if (apiKey && apiKey === accessKey) {
            next();
        } else {
            const error = new ForbiddenException("Для работы с api нужен ключ");
            next(error);
        }
    }
}
