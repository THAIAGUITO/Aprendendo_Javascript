async function pesquisarfuncionario(name) {
  try {
    const resposta = await fetch(`https://6a68c259b2789286ad702aef.mockapi.io/usuarios?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const lista = document.querySelector("#lista-usuarios");
    lista.innerHTML = "";

    if (resposta.status === 404) {
      console.log("Usuário não encontrado (404)");
      const mensagem = document.createElement("p");
      mensagem.textContent = "Usuário não existe";
      lista.appendChild(mensagem);
      return;
    }

    if (!resposta.ok) {
      console.log("Erro na requisição, status:", resposta.status);
      const mensagem = document.createElement("p");
      mensagem.textContent = "Erro ao buscar usuário, tente novamente";
      lista.appendChild(mensagem);
      return;
    }

    const jsondata = await resposta.json();
    console.log("Dados recebidos:", jsondata);

    if (!Array.isArray(jsondata) || jsondata.length === 0) {
      console.log("Usuário não encontrado");
      const mensagem = document.createElement("p");
      mensagem.textContent = "Usuário não existe";
      lista.appendChild(mensagem);
      return;
    }

    console.log("Usuário encontrado:", jsondata[0]);

    const nome = document.createElement("li");
    const idade = document.createElement("li");
    const cidade = document.createElement("li");

    nome.textContent = jsondata[0].name;
    idade.textContent = `${jsondata[0].idade} Anos`;
    cidade.textContent = `Residente de ${jsondata[0].cidade}`;

    lista.appendChild(nome);
    lista.appendChild(idade);
    lista.appendChild(cidade);
  } catch (erro) {
    console.log("Erro ao pesquisar usuário:", erro);
  }
}

const pesquisarBtn = document.querySelector("#pesquisarBtn");
pesquisarBtn.addEventListener("click", (evento) => {
  evento.preventDefault();
  const nome = document.querySelector("#pesquisar").value;
  pesquisarfuncionario(nome);
});
