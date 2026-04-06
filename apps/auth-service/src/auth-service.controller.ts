import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';

@Controller()
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) {}

  @Get()
  getHello(): string {
    return this.authServiceService.getHello();
  }

  // get request for simualate-user-registration
  @Post('register')
  async register(
    @Body() body: { email: string; password: string; name: string },
  ) {
    return this.authServiceService.register(
      body.email,
      body.password,
      body.name,
    );
  }
}
