/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';
import { IsEmailUnique } from '../validation/email-is-unique';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  nome: string;

  @IsEmail(undefined, { message: 'Invalid email' })
  @IsNotEmpty()
  @IsEmailUnique({ message: 'Email already exists' })
  email: string;

  @MinLength(6, { message: 'Password should be at least 6 characters' })
  @IsNotEmpty()
  password: string;
}
