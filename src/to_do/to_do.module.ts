import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { To_doController } from './to_do.controller';
import { To_doEntity } from './to_do.entity';
import { To_doService } from './to_do.service';
import { To_doResolver } from './to_do.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([To_doEntity])],
  providers: [To_doService, To_doResolver],
  exports: [To_doService],
  controllers: [To_doController],
})
export class To_doModule {}
