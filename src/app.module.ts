import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { BookService } from './book/book.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    BookModule,
    AuthModule,
    UsersModule,
    ProductsModule,
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'maliyu1015@gmail.com',
          pass: 'Maliyu_1015',
        },

      },

    })],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule { }
