import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
