const mysql = require('mysql2/promises');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'teste_db'
});

async function getUserById(id) {
    const [row] = await connection.query('SELECT * FROM  users WHERE id = ?', [id]);
    return rows[0];
}

module.exports = { getUserById, connection };