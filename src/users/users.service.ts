import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }
    async getOneUser(id: string) { }

    async getAllUsers() {
        // return await this.prisma.user.findMany();
        return await this.prisma.user.findMany({ select: { id: true, email: true } })
    }
}
