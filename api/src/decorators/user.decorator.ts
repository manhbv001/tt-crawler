import { User } from '@/entities/user.entity';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthUser = createParamDecorator(
  (key: string, context: ExecutionContext): User => {
    const request: Express.Request = context.switchToHttp().getRequest();
    const user = request.user;
    return key ? user?.[key] : user;
  },
);
