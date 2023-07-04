import { PrismaClient } from "@prisma/client";

//initialize Prisma Client

const prisma = new PrismaClient();

async function main() {
    //Creating two dummy articles

    const post1 = await prisma.article.upsert({
        where: { title: 'Prisma Adds Support for mysql' },
        update: {},
        create: {
            title: 'Primsa Adds Support for mysql',
            body: 'Requested feature of Mysql',
            description: "Am excited to share Primsa ORM release stable support!",
            published: false,
        },
    });

    const post2 = await prisma.article.upsert({
        where:
            { title: 'What is new in Prisma?' },
        update: {},
        create: {
            title: 'What is new in Prisma?',
            body: 'Our developers have been working hard, issueing new release with many improvemenys!',
            description: 'Learn about everything in the prisma ecosystem community!',
            published: true,
        },
    });

    console.log({ post1, post2 });
}

//execute the main function

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        //close Prisma Client at the end
        await prisma.$disconnect();
    })