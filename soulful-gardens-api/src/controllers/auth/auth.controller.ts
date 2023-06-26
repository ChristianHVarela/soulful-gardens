import { Body, Controller, Post } from '@nestjs/common';
import { signUpDto } from 'src/dtos/signUpDto';

@Controller('auth')
export class AuthController {

    @Post('sign-in')
    signIn(): void {

    }

    @Post('sign-up')
    signUp(@Body() signUpDto: signUpDto): void {
        console.log(signUpDto);
    }
}
