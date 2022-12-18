import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { To_doEntity, To_doInput } from './to_do.entity';

@Injectable()
export class To_doService {
  constructor(
    @InjectRepository(To_doEntity)
    private to_dosRepository: Repository<To_doEntity>,
  ) {}
  find(): Promise<To_doEntity[]> {
    return this.to_dosRepository.find();
  }
  async getAll(): Promise<To_doEntity[]> {
    const res = await this.to_dosRepository.query(
      'exec [dbo].[To_DO_List_Get]',
    );
    console.log('get', res);
    return res;
  }
  insert(to_do: To_doInput): string {
    // eslint-disable-next-line prettier/prettier
    const q = "exec [dbo].[To_DO_List_Insert] @To_Name='"+to_do.To_Do_Name + "', @Date='"+to_do.To_Do_Date +  "', @Time='"+to_do.To_Do_Time +"', @Remark='" + to_do.Remark+ "'";
    console.log(q);
    this.to_dosRepository.query(q);
    return 'success';
  }
}
