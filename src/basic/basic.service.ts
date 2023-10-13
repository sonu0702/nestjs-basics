import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Basic } from '../model/basic.entity';
import { Repository } from 'typeorm';
import { v4 } from "uuid";
@Injectable()
export class BasicService {
  constructor(@InjectRepository(Basic) private readonly repo: Repository<Basic>) { }

  public async getAll() {
    return await this.repo.find();
  }
  
  public async getValueById(uuid: string) {
    let data = await this.repo.findOne({
      where: { basic_uuid: uuid }
    })
    return data;
  }

  public async insertValues(str_value: string, num_value: number) {
    let basic = new Basic();
    basic.basic_uuid = v4();
    basic.number_value = num_value;
    basic.str_value = str_value;
    await this.repo.save(basic);
    return { uuid: basic.basic_uuid }
  }
}