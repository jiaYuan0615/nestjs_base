import { ApiTags } from "@nestjs/swagger";
import { Controller, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from "./auth.service";
import { Public } from "src/decorators/public.decorator";
import { LocalAuthGuard } from "src/guards/local-auth.guard";
import { Request, Response } from "express";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  public async postLogin(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { user } = req;
    console.log(user);

    const token = this.authService.yieldToken(user);
    res.status(HttpStatus.OK).json({ message: '登入成功', token });
  }
}