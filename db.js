const { Pool } = require('pg');
require("dotenv").config();

let pool;

async function connect() {
    if (!pool) {
        // Cria um pool de conexões uma única vez e armazena na variável `pool`
        pool = new Pool({
            connectionString: process.env.CONNECTION_STRING,
        });
        console.log("Criou pool de conexões no PostgreSQL!");

        // Testa a conexão inicial
        const client = await pool.connect();
        const res = await client.query('SELECT NOW()');
        console.log("Conexão de teste estabelecida:", res.rows[0]);
        client.release();
    }
    return pool;
}

// Função para selecionar clientes da tabela 'cadastrados'
async function selectCustomers() {
    const db = await connect();
    const res = await db.query('SELECT * FROM cadastrados');
    return res.rows;
}

// Função para inserir um novo cliente na tabela 'cadastrados'
async function insertCustomer(name, email) {
    const db = await connect();
    const query = 'INSERT INTO cadastrados (name, email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];
    const res = await db.query(query, values);
    return res.rows[0];
}

module.exports = { selectCustomers, insertCustomer };

