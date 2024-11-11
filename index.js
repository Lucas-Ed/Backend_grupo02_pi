// const { createClient } = require('@supabase/supabase-js');
// const supabase = require('./supabaseClient');




require("dotenv").config();

const db = require("./db");
//const app = express();
const port = process.env.PORT;

const express = require("express");
const app = express();

app.use(express.json());

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);

// module.exports = supabase;


app.get("/", (req, res) => res.json({ message: "Funcionando!" }));

// Rota para obter dados de 'cadastrados'
app.get("/cadastrados", async (req, res) => {
  try {
    const customers = await db.selectCustomers();
    res.json(customers);
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
    res.status(500).json({ message: "Erro ao buscar dados." });
  }
});

// Rota para obter dados de 'cadastrados' no supabase
// app.post('/cadastrar', async (req, res) => {
//     const { name, email } = req.body;
//     const { data, error } = await supabase
//       .from('users')
//       .insert([{ name, email }]);
  
//     if (error) {
//       return res.status(400).json({ error: error.message });
//     }
  
//     res.json(data);
//   });
  
// Rota para adicionar um novo cliente
app.post("/cadastrar", async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Nome e e-mail são obrigatórios." });
    }

    try {
        const newCustomer = await db.insertCustomer(name, email);
        res.status(201).json(newCustomer);
    } catch (error) {
        console.error("Erro ao adicionar cliente:", error);
        res.status(500).json({ message: "Erro ao adicionar cliente." });
    }
});

// Inicia o servidor
app.listen(port, () => console.log(`API funcionando na porta ${port}!`));
