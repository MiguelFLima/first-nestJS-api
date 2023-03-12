/* eslint-disable prettier/prettier */

import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UsersController {
  private userRepository = new UserRepository();

  @Post()
  async createUser(@Body() userData) {
    this.userRepository.save(userData);
    return userData;
  }
}
