import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }
    async getOneUser(id: string, req: Request) {
        const user = await this.prisma.user.findUnique({ where: { id } })

        if (!user) {
            throw new NotFoundException('User not found!')
        }

        const decodedUser = req.user as { id: string, email: string }

        if (user.id !== decodedUser.id) {
            throw new ForbiddenException('Usere not allow')
        }
        delete user.hashedPassword;

        return { user };
    }

    async getAllUsers() {
        // return await this.prisma.user.findMany();
        return await this.prisma.user.findMany({ select: { id: true, email: true } })
    }
}
