import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BasicService } from './basic.service';

@Controller('basic')
export class BasicController {
  constructor(private serv: BasicService) { }

  @Get()
  public async getAll() {
    return await this.serv.getAll();
  }

  @Get(':id')
  public async getById(@Param() params: any) {
    let { id } = params;
    return await this.serv.getValueById(id);
  }

  @Post('/add')
  public async insertValue(@Body() body: { str_value: string, num_value: number }) {
    return await this.serv.insertValues(body.str_value, body.num_value);
  }
}