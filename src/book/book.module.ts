import { PrismaService } from "src/prisma/prisma.service";
import { BookController } from "./book.controller";
import { Module } from "@nestjs/common";
import { BookService } from "./book.service";

@Module({
    controllers: [BookController],
    providers: [BookService, PrismaService]
})



export class BookModule { }