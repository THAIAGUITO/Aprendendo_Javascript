async function usuarios() {
  try {
    const resposta = await fetch("https://6a68c259b2789286ad702aef.mockapi.io/usuarios");
    const jsondata = await resposta.json();

    const lista = document.querySelector("#lista-usuarios");
    lista.innerHTML = "";

    for (const post of jsondata) {
      const conteiner = document.createElement("div");
      conteiner.classList.add("conteiner");

      const atualizar = document.createElement("button");
      atualizar.classList.add("update");
      atualizar.textContent = "✏️";
      atualizar.dataset.id = post.id; // <- aqui guardamos o id do usuário no próprio botão

      const nome = document.createElement("p");
      nome.textContent = post.name;

      conteiner.appendChild(nome);
      conteiner.appendChild(atualizar);
      lista.appendChild(conteiner);
    }
  } catch (error) {
    console.log("Erro ao buscar dados:", error);
  }
}

async function atualizarUsuario(id, novoNome, novaIdade, novaCidade) {
  try {
    await fetch(`https://6a68c259b2789286ad702aef.mockapi.io/usuarios/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: novoNome,
        idade: novaIdade,
        cidade: novaCidade,
      }),
    });
  } catch (error) {
    console.log("Erro ao atualizar usuário:", error);
  }
}

usuarios();

document.querySelector("#lista-usuarios").addEventListener("click", (evento) => {
  const novoNome = prompt("Digite o novo nome do usuário:");
  const novaIdade = prompt("Digite a nova idade do usuário:");
  const novaCidade = prompt("Digite a nova cidade do usuário:");

  if (evento.target.classList.contains("update")) {
    const id = evento.target.dataset.id;
    if (!novoNome || !novaIdade || !novaCidade) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }
    atualizarUsuario(id, novoNome, novaIdade, novaCidade).then(() => {
      usuarios();
    });
  }
});
