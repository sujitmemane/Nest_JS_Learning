import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEnum(['INTERN', 'ENGINNER', 'ADMIN'], {
    message: 'Provide correct role',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  @IsEmail()
  email: string;
}
