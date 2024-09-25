import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINER' | 'STAFF') {
    return this.UsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.findOne(id);
  }

  @Post()
  create(
    @Body(ValidationPipe)
    createUserDto: createUserDto,
  ) {
    return this.UsersService.create(createUserDto);
  }

  @Patch(':id')
  findUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateUserDto: updateUserDto,
  ) {
    return this.UsersService.update(id, {
      ...updateUserDto,
    });
  }

  @Delete(':id')
  findDelete(@Param('id', ParseIntPipe) id: number) {
    return this.UsersService.delete(id);
  }
}
