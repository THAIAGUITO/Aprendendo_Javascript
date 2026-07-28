// Um exemplo de como usar o fetch para buscar dados de uma API e lidar com a resposta

// const respostaFetch = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resposta) => {
//     return resposta.json();
//   })
//   .then((jsonData) => {
//     console.log(jsonData[0].name);
//   })
//   .catch((erro) => {
//     console.log("Erro ao buscar os dados:", erro);
//   });

// Outro exemplo mais simples de como utilizar o fetch para buscar dados de uma API e lidar com a resposta

(async function () {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const adicionarUsuario = document.querySelector("#adicionar-usuario");

    adicionarUsuario.addEventListener("click", async (evento) => {
      evento.preventDefault();

      const init = {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          nome: document.querySelector("#nome").value,
        }),
      };

      try {
        const resposta = await fetch("dados.json", init);
        const jsonData = await resposta.json();
        console.log(jsonData);
      } catch (erro) {
        console.log("Erro ao adicionar usuário:", erro);
      }
    });
  } catch (erro) {
    console.log("Erro ao configurar o listener:", erro);
  }
})();

(async function () {
  try {
    const resposta = await fetch("dados.json");
    const jsonData = await resposta.json();

    const lista = document.querySelector("#lista-usuarios");
    // Exibir os nomes dos usuários do banco de dados no DOM
    for (const post of jsonData) {
      const nome = document.createElement("p");
      nome.textContent = post.nome;
      lista.appendChild(nome);
    }
  } catch (erro) {
    console.log("Erro ao buscar os dados:", erro);
  }
})();
