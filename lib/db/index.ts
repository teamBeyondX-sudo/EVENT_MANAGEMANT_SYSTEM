
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set');
}

const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;
export const db = sql ? drizzle(sql, { schema }) : null;

export async function checkDatabaseConnection() {
  try {
    if (!db) throw new Error('Database not initialized');
    const result = await sql`SELECT 1`;
    return !!result;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}
