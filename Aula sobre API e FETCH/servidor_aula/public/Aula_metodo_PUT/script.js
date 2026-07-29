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

async function atualizarUsuario(id) {
  try {
    await fetch(`https://6a68c259b2789286ad702aef.mockapi.io/usuarios/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: name,
        idade: idade,
        cidade: cidade,
      }),
    });
  } catch (error) {
    console.log("Erro ao atualizar usuário:", error);
  }
}

usuarios();

document.querySelector("#lista-usuarios").addEventListener("click", (evento) => {
  if (evento.target.classList.contains("update")) {
    const id = evento.target.dataset.id;
    atualizarUsuario(id);
    evento.target.closest(".conteiner").remove();
  }
});
