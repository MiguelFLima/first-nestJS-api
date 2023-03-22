/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import { EmailValidator } from './validation/email-is-unique';

@Module({
  controllers: [UsersController],
  providers: [UserRepository, EmailValidator],
})
export class UserModule {}
