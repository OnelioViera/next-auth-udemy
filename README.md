# Full Stack - Next Auth App

## Next.js 13, Prisma 2, Postgresql, Tailwind CSS, and Next Auth

### Installing Prisma Database - Postgresql

Setup a free account with Neon and follow the instructions. 

[https://neon.tech/](https://neon.tech/ "Neon")

Once setup, open up a terminal and `cd` to your project.  Enter the following commands.

- `npm install prisma --save-dev`

- `npx prisma init --datasource-provider postgresql`

- `npx prisma db pull`

- `npx prisma generate`

- `npx prisma migrate dev --name <give it a name>`

- `npx prisma studio`

- `npm install @prisma/client`

### Install NextAuth.js

- `npm install next-auth`