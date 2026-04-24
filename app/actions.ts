'use server';

import { sql } from '@vercel/postgres';

export type Review = {
  id?: number;
  name: string;
  rating: number;
  text: string;
  date: string;
};

// This helper ensures that the database environment variable is set 
// even if there was a typo in the Vercel dashboard.
function ensureEnv() {
  const connString = 
    process.env.POSTGRES_URL || 
    process.env.DATABASE_URL || 
    process.env.POSTGERS_POSTGRES_URL || 
    process.env.POSTGERS_DATABASE_URL;
  
  if (connString && !process.env.POSTGRES_URL) {
    process.env.POSTGRES_URL = connString;
  }
  return connString;
}

export async function initDb() {
  ensureEnv();
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        rating INTEGER NOT NULL,
        text TEXT NOT NULL,
        date VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    const { rows } = await sql`SELECT COUNT(*) FROM reviews`;
    if (rows[0].count === '0') {
      await sql`
        INSERT INTO reviews (name, rating, text, date)
        VALUES 
        ('Priya Ramachandran', 5, 'Abishag transformed my mother''s daily life. The caregiver assigned was patient, professional, and treated her like family. We are truly grateful.', 'April 2026'),
        ('Karthik Sundaram', 5, 'The nursing team is exceptional. Their attention to detail with medication management gave our entire family peace of mind. Highly recommended.', 'March 2026')
      `;
    }
    return { success: true };
  } catch (error: any) {
    console.error('Error initializing database:', error);
    return { success: false, error: error.message };
  }
}

export async function getReviews() {
  const conn = ensureEnv();
  if (!conn) {
    return { error: 'no_connection_string' };
  }

  try {
    const { rows } = await sql`
      SELECT id, name, rating, text, date 
      FROM reviews 
      ORDER BY created_at DESC
    `;
    return rows as Review[];
  } catch (error: any) {
    // If table doesn't exist, try initializing it
    await initDb();
    try {
      const { rows } = await sql`
        SELECT id, name, rating, text, date 
        FROM reviews 
        ORDER BY created_at DESC
      `;
      return rows as Review[];
    } catch (e: any) {
      return [];
    }
  }
}

export async function addReview(review: Review) {
  ensureEnv();
  try {
    await sql`
      INSERT INTO reviews (name, rating, text, date)
      VALUES (${review.name}, ${review.rating}, ${review.text}, ${review.date})
    `;
    return { success: true };
  } catch (error: any) {
    // Try to init table and retry
    try {
      await initDb();
      await sql`
        INSERT INTO reviews (name, rating, text, date)
        VALUES (${review.name}, ${review.rating}, ${review.text}, ${review.date})
      `;
      return { success: true };
    } catch (retryError: any) {
      return { success: false, error: retryError.message };
    }
  }
}
