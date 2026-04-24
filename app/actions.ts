'use server';
// Support both POSTGRES_URL and DATABASE_URL for maximum compatibility
import { createPool } from '@vercel/postgres';

const pool = createPool({
  connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URL
});

const sql = pool.sql;

export type Review = {
  id?: number;
  name: string;
  rating: number;
  text: string;
  date: string;
};

// Create the table if it doesn't exist
export async function initDb() {
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
    
    // Seed initial reviews if the table is empty
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
  } catch (error) {
    console.error('Error initializing database:', error);
    return { success: false, error };
  }
}

export async function getReviews() {
  if (!process.env.POSTGRES_URL && !process.env.DATABASE_URL) {
    console.error('No database connection string found in environment variables');
    return { error: 'no_connection_string' };
  }

  try {
    // Try to fetch reviews
    const { rows } = await sql`
      SELECT id, name, rating, text, date 
      FROM reviews 
      ORDER BY created_at DESC
    `;
    return rows as Review[];
  } catch (error: any) {
    console.error('Database error, attempting to initialize:', error.message);
    
    // Always try to initialize the DB if anything goes wrong (like table missing)
    await initDb();
    
    try {
      // Try fetching again after initialization
      const { rows } = await sql`
        SELECT id, name, rating, text, date 
        FROM reviews 
        ORDER BY created_at DESC
      `;
      return rows as Review[];
    } catch (secondError) {
      console.error('Initialization failed or still no table:', secondError);
      return [];
    }
  }
}

export async function addReview(review: Review) {
  try {
    await sql`
      INSERT INTO reviews (name, rating, text, date)
      VALUES (${review.name}, ${review.rating}, ${review.text}, ${review.date})
    `;
    return { success: true };
  } catch (error) {
    console.error('Error adding review:', error);
    return { success: false, error };
  }
}
