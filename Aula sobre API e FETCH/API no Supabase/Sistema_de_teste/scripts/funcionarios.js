const tabela_funcionarios = document.getElementById("tbody_funcionarios");
const empty = document.getElementById("empty_state");

async function usuarios() {
  try {
    const resposta = await fetch("http://localhost:3000/funcionarios");
    const jsondata = await resposta.json();

    for (const funcionarios of jsondata) {
      const caixa = document.createElement("div");
      caixa.classList.add("caixa_funcionario");
      caixa.innerHTML = `
        <div class="cel_texto">${funcionarios.nome}</div>
        <div class="cel_texto">${funcionarios.sobrenome}</div>
        <div class="cel_texto">${funcionarios.telefone}</div>
        <div class="cel_texto">${funcionarios.email}</div>
        <div class="acoes">
          <button class="btn_acao ver"    title="Ver detalhes"><i class="fa-solid fa-eye"></i></button>
          <button class="btn_acao editar" title="Editar"><i class="fa-solid fa-pen"></i></button>
          <button class="btn_acao del" data-id="${funcionarios.id}" title="Remover">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
      tabela_funcionarios.appendChild(caixa);

      const numero_status = document.querySelector(".numero_status");
      numero_status.textContent = jsondata.length;
    }
  } catch (error) {
    console.log("Erro ao buscar dados:", error);
  }
}

usuarios();

async function apagarFuncionario(id) {
  try {
    await fetch(`http://localhost:3000/funcionarios/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("Erro ao excluir funcionário:", error);
  }
}

tabela_funcionarios.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".btn_acao.del");
  if (botao) {
    const id = botao.dataset.id;
    apagarFuncionario(id);
    botao.closest(".caixa_funcionario").remove();
  }
});
