const supabase = require("./db");

async function testar() {
  const { data, error } = await supabase.from("user").select("*").limit(5);

  if (error) {
    console.error("Erro na conexão:", error.message);
  } else {
    console.log("Conexão OK! Dados encontrados:", data);
  }
}

testar();
