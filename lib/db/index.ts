
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = process.env.DATABASE_URL ? neon(process.env.DATABASE_URL) : null;

if (!sql) {
  console.error('Database connection failed - missing DATABASE_URL');
}

export const db = sql ? drizzle(sql) : null;

export async function checkDatabaseConnection() {
  try {
    if (!db) throw new Error('Database not initialized');
    const result = await sql`SELECT 1`;
    return result ? true : false;
  } catch (error) {
    console.error('Database connection error:', error);
    return false;
  }
}
