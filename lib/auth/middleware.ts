
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function authenticateUser(request: Request) {
  const token = cookies().get('token')?.value;
  
  if (!token) {
    throw new Error('Unauthorized');
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET!) as any;
    const user = await db.query.users.findFirst({
      where: eq(users.id, decoded.id)
    });
    
    if (!user) {
      throw new Error('User not found');
    }
    
    return user;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

export async function checkRole(request: Request, allowedRoles: string[]) {
  const user = await authenticateUser(request);
  if (!allowedRoles.includes(user.role)) {
    throw new Error('Forbidden');
  }
  return user;
}
