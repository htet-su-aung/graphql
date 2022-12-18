import { Controller, Get, Post } from '@nestjs/common';
import { To_doService } from './to_do.service';
import { To_doEntity, To_doInput } from './to_do.entity';

@Controller('to_do')
export class To_doController {
  constructor(private service: To_doService) {}
  @Get()
  async getAll(): Promise<To_doEntity[]> {
    return await this.service.getAll();
  }
  @Post()
  insert(to_do: To_doInput): string {
    return this.service.insert(to_do);
  }
}
