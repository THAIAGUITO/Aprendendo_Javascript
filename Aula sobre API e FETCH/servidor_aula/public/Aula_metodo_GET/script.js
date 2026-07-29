async function pesquisarfuncionario(name) {
  try {
    const resposta = await fetch(`https://6a68c259b2789286ad702aef.mockapi.io/usuarios?name=${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsondata = await resposta.json();

    const lista = document.querySelector("#lista-usuarios");

    const nome = document.createElement("li");
    const idade = document.createElement("li");
    const cidade = document.createElement("li");

    idade.textContent = `${jsondata[0].idade} Anos`;
    cidade.textContent = `Residente de ${jsondata[0].cidade}`;
    nome.textContent = jsondata[0].name;
    lista.appendChild(nome);
    lista.appendChild(idade);
    lista.appendChild(cidade);

    console.log("Usuário encontrado:", jsondata);
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
