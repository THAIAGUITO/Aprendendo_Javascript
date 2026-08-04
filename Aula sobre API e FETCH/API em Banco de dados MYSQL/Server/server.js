const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste, só pra confirmar que a API está no ar
app.get("/", (req, res) => {
  res.send("API rodando! 🚀");
});

// Rota de teste de conexão com o banco
app.get("/testar-conexao", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS resultado");
    res.json({ mensagem: "Conexão com o banco OK!", resultado: rows[0].resultado });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Rota GET - Listar todos os funcionários
app.get("/funcionarios", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Rota POST - Cadastrar novo funcionário
app.post("/funcionarios", async (req, res) => {
  const { nome, sobrenome, email, telefone } = req.body;

  // Validação básica
  if (!nome || !sobrenome || !email || !telefone) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
  }

  try {
    const [result] = await pool.query("INSERT INTO users (nome, sobrenome, email, telefone) VALUES (?, ?, ?, ?)", [
      nome,
      sobrenome,
      email,
      telefone,
    ]);

    res.status(201).json({
      id: result.insertId,
      nome,
      sobrenome,
      email,
      telefone,
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Rota DELETE - Remover funcionário
app.delete("/funcionarios/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Funcionário não encontrado." });
    }

    res.status(200).json({ mensagem: "Funcionário removido com sucesso." });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
