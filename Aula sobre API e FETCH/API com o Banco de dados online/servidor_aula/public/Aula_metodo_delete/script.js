async function usuarios() {
  try {
    const resposta = await fetch("https://6a68c259b2789286ad702aef.mockapi.io/usuarios");
    const jsondata = await resposta.json();

    const lista = document.querySelector("#lista-usuarios");
    lista.innerHTML = ""; // limpa antes de recriar, evita duplicar ao recarregar

    for (const post of jsondata) {
      const conteiner = document.createElement("div");
      conteiner.classList.add("conteiner");

      const lixeira = document.createElement("button");
      lixeira.classList.add("lixeira"); // classe, não id
      lixeira.textContent = "🗑️";
      lixeira.dataset.id = post.id; // <- aqui guardamos o id do usuário no próprio botão

      const nome = document.createElement("p");
      nome.textContent = post.name;

      conteiner.appendChild(nome);
      conteiner.appendChild(lixeira);
      lista.appendChild(conteiner);
    }
  } catch (error) {
    console.log("Erro ao buscar dados:", error);
  }
}

async function apagarUsuario(id) {
  try {
    await fetch(`https://6a68c259b2789286ad702aef.mockapi.io/usuarios/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Erro ao excluir usuário:", error);
  }
}

usuarios();

document.querySelector("#lista-usuarios").addEventListener("click", (evento) => {
  if (evento.target.classList.contains("lixeira")) {
    const id = evento.target.dataset.id;
    apagarUsuario(id);
    evento.target.closest(".conteiner").remove(); // remove visualmente também
  }
});
