import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { BasicController } from './basic/basic.controller';
import { BasicService } from './basic/basic.service';
import { Basic } from './model/basic.entity';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Basic])],
  controllers: [AppController, BasicController],
  providers: [AppService, BasicService],
})
export class AppModule {}

//TypeOrmModule.forFeature([Basic])