import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {

  constructor(private readonly mailerService: MailerService) { }
  sendMail(): void {
    this.mailerService.sendMail({
      to: 'maliyu1015@gmail.com',
      from: 'mdlo_ibb@yahoo.com',
      subject: 'Testing Nest mailerModule',
      text: 'Welcome',
      html: '<b>Welcome to sending email via nest js node mailer!</b>',
    })
  }

}
