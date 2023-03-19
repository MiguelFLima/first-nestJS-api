/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @IsString()
  nome: string;

  @IsEmail(null, { message: 'Invalid email' })
  @IsNotEmpty()
  email: string;

  @MinLength(6, { message: 'Password should be at least 6 characters' })
  @IsNotEmpty()
  password: string;
}
