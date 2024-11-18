//const { createClient } = require('@supabase/supabase-js');
//const supabase = require('./supabaseClient');

const express = require("express");
const supabase = require("./supabaseClient"); // importa o cliente do Supabase
require("dotenv").config();

// const db = require("./db");
//const app = express();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

// const supabase = createClient(supabaseUrl, supabaseKey);

// module.exports = supabase;


// Redefine a sequência antes de iniciar o servidor
resetSequence().then(() => {
  // Inicia o servidor
  app.listen(port, () => console.log(`API funcionando na porta ${port}!`));
});

// Rota get para saber se a api esta funcionando.
app.get("/", (req, res) => res.json({ message: "Funcionando !" }));

// Rota para obter dados de 'cadastrados' no Supabase
app.get("/cadastrados", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('cadastrados') // Certifique-se de que o nome da tabela esteja correto
      .select('*');

    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar clientes no Supabase:", error);
    res.status(500).json({ message: "Erro ao buscar dados no Supabase." });
  }
});


// Rota para obter dados de 'cadastrados'-(usar localmente)
// app.get("/cadastrados", async (req, res) => {
//   try {
//     const customers = await db.selectCustomers();
//     res.json(customers);
//   } catch (error) {
//     console.error("Erro ao buscar clientes:", error);
//     res.status(500).json({ message: "Erro ao buscar dados." });
//   }
// });

// Rota para obter dados de 'cadastrados' no supabase
app.post('/cadastrar', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Nome e e-mail são obrigatórios." });
  }

  try {
    const { data, error } = await supabase
      .from('cadastrados') // Certifique-se de que o nome da tabela esteja correto aqui
      .insert([{ name, email }])
      .select(); // Adiciona a seleção para retornar o registro inserido

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.json(data); // Retorna os dados inseridos
  } catch (error) {
    console.error("Erro ao inserir dados no Supabase:", error);
    res.status(500).json({ message: "Erro ao inserir dados no Supabase." });
  }
});

  
// Rota para adicionar um novo cliente-(usar localmente)
// app.post("/cadastrar", async (req, res) => {
//     const { name, email } = req.body;

//     if (!name || !email) {
//         return res.status(400).json({ message: "Nome e e-mail são obrigatórios." });
//     }

//     try {
//         const newCustomer = await db.insertCustomer(name, email);
//         res.status(201).json(newCustomer);
//     } catch (error) {
//         console.error("Erro ao adicionar cliente:", error);
//         res.status(500).json({ message: "Erro ao adicionar cliente." });
//     }
// });

// Inicia o servidor
// app.listen(port, () => console.log(`API funcionando na porta ${port}!`));

// Função para redefinir a sequência do ID
async function resetSequence() {
  try {
    const { data: maxIdData, error: maxIdError } = await supabase
      .from('cadastrados')
      .select('id')
      .order('id', { ascending: false })
      .limit(1);

    if (maxIdError) {
      throw maxIdError;
    }

    const maxId = (maxIdData && maxIdData.length > 0) ? maxIdData[0].id : 1;

    const { error: setvalError } = await supabase.rpc('setval_sequence', {
      sequence_name: 'cadastrados_id_seq',
      last_value: maxId
    });

    if (setvalError) {
      throw setvalError;
    }

    console.log("Sequência redefinida com sucesso.");
  } catch (error) {
    console.error("Erro ao redefinir a sequência:", error);
  }
}