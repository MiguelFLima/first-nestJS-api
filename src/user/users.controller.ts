/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UsersController {
  constructor(private readonly userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData) {
    this.userRepository.save(userData);
    return userData;
  }

  @Get()
  async getUsers() {
    return this.userRepository.getAll();
  }
}
