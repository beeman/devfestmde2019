import { Injectable } from '@nestjs/common';
import { Prisma } from './generated/prisma-client';

const endpoint = 'http://localhost:4466';

@Injectable()
export class PrismaService {
  client: Prisma;

  constructor() {
    this.client = new Prisma({
      endpoint,
      secret: 'MY_PRISMA_SECRET',
      debug: true,
      // debug: NODE_ENV === 'development',
    });
  }
}
