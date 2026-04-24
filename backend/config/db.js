import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

// Only use DATABASE_URL – no individual DB variables
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

pool.connect((err) => {
    if (err) {
        console.error('❌ DB connection error:', err.message);
    } else {
        console.log('✅ DB connected');
    }
});

export default pool;
