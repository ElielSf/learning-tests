import { createPool } from 'mysql2/promise';

const connection = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'teste_db'
});

async function getUserById(id) {
    const [row] = await connection.query('SELECT * FROM  users WHERE id = ?', [id]);
    return row[0];
}

export { getUserById, connection };