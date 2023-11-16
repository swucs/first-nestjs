import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BoardsModule } from './boards/boards.module';
import { UsersService } from './users/users.service';
import { EmailService } from './email/email.service';

@Module({
  imports: [BoardsModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, EmailService],
})
export class AppModule {}
