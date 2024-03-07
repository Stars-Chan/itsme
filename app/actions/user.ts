'use server';

import { hashSync } from 'bcryptjs';

import { type CreateUserReq } from '@/types';

import { prisma } from '@/lib/prisma';

export async function createUser(params: CreateUserReq) {
  const hashedPassword = hashSync(params.password);
  const user = await prisma.user.create({
    data: {
      name: params.name,
      password: hashedPassword,
      email: params.email,
    },
  });

  return user;
}
