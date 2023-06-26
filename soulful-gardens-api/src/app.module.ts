import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  imports: [],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService],
})
export class AppModule {}
