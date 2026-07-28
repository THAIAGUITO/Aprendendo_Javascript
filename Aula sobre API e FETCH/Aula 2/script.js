async function usuarios() {
  try {
    const resposta = await fetch("https://6a68c259b2789286ad702aef.mockapi.io/usuarios");
    const jsondata = await resposta.json();

    const lista = document.querySelector("#lista-usuarios");
    // Exibir os nomes dos do banco de dados no DOM
    for (const post of jsondata) {
      const nome = document.createElement("li");
      nome.textContent = post.name;
      lista.appendChild(nome);
    }
  } catch (error) {
    console.log("Erro ao buscar dados:", error);
  }
}

usuarios();

async function adicionarUsuario(name, idade, cidade) {
  try {
    const resposta = await fetch("https://6a68c259b2789286ad702aef.mockapi.io/usuarios", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        idade: idade,
        cidade: cidade,
      }),
    });

    const jsondata = await resposta.json();
    console.log("Usuário adicionado:", jsondata);
  } catch (erro) {
    console.log("Erro ao adicionar usuário:", erro);
  }
}

const adicionarUsuarioBtn = document.querySelector("#botao-usuarios");
adicionarUsuarioBtn.addEventListener("click", (evento) => {
  evento.preventDefault();
  const nome = document.querySelector("#nome").value;
  const idade = document.querySelector("#idade").value;
  const cidade = document.querySelector("#cidade").value;
  adicionarUsuario(nome, parseInt(idade), cidade);
});
