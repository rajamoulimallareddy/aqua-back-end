import { Controller, Get, Res, Post, Req, UseGuards } from '@nestjs/common';
import { Routes } from 'src/utils/constants';
import { Response, Request } from 'express';
import { AuthenticateGaurd, DiscordAuthGaurd } from 'src/utils/Gaurds';
import { AuthUser } from 'src/utils/decorators';
import { UserReport } from 'src/typeorm/entities/UserReport';

@Controller(Routes.AUTH)
export class AuthController {
    constructor() { }
    @Get('login')
    @UseGuards(DiscordAuthGaurd)
    login() {
        console.log('login');
    }

    @Get('redirect')
    @UseGuards(DiscordAuthGaurd)
    redirect(@Res() res: Response) {
        res.redirect('http://localhost:3000');
    }

    @Get('status')
    @UseGuards(AuthenticateGaurd)
    status(@AuthUser() user: UserReport) {
        // return user;
    }

    @Post('logout')
    logout() {

    }
}
