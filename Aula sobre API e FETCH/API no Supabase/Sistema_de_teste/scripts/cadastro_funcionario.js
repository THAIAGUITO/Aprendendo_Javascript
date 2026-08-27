class Funcionario {
  constructor(dados) {
    this.foto = dados.foto;
    this.nome = dados.nome;
    this.sobrenome = dados.sobrenome;
    this.telefone = dados.telefone;
    this.email = dados.email;
  }

  exibirInformacoes() {
    console.log(`Nome: ${this.nome} ${this.sobrenome}`);
    console.log(`Telefone: ${this.telefone}`);
    console.log(`Email: ${this.email}`);
  }
}

const cadastrar = document.getElementById("salvar_cadastro");

cadastrar.addEventListener("click", async () => {
  const campos = {
    nome: document.getElementById("nome").value.trim(),
    sobrenome: document.getElementById("sobrenome").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    email: document.getElementById("email").value.trim(),
  };

  const erros = [];

  if (!campos.nome) erros.push("Nome");
  if (campos.telefone.length < 15) erros.push("Telefone (formato: (00) 99999-9999)");
  if (!campos.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campos.email)) erros.push("E-mail válido");

  if (erros.length > 0) {
    alert("Preencha os campos obrigatórios antes de cadastrar:\n\n• " + erros.join("\n• "));
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/funcionarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: campos.nome,
        sobrenome: campos.sobrenome,
        telefone: campos.telefone,
        email: campos.email,
      }),
    });

    if (!response.ok) {
      const erroData = await response.json();
      throw new Error(erroData.erro || "Erro ao cadastrar funcionário.");
    }

    const data = await response.json();
    console.log("Funcionário cadastrado:", data);

    alert("Funcionário cadastrado com sucesso!");
    limparInputs();
  } catch (err) {
    console.error("Erro:", err);
    alert("Erro ao cadastrar funcionário: " + err.message);
  }
});

const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "");

  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d{4})(\d)/, "$1-$2");

  this.value = valor;
});

const btnImage = document.getElementById("btn_image");

btnImage.addEventListener("click", function () {
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/jpeg, image/png";

  fileInput.click();

  fileInput.addEventListener("change", function () {
    const arquivo = fileInput.files[0];
    if (!arquivo) return;

    if (arquivo.size > 2 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const dataUrl = e.target.result;

      window.perfilFotoDataUrl = dataUrl;
      atualizarChecklist();

      const avatar = document.querySelector(".avatar");
      avatar.style.backgroundImage = `url(${dataUrl})`;
      avatar.style.backgroundSize = "cover";
      avatar.style.backgroundPosition = "center";
      avatar.textContent = "";

      const avatarPreview = document.querySelector(".visualizacao_avatar");
      avatarPreview.style.backgroundImage = `url(${dataUrl})`;
      avatarPreview.style.backgroundSize = "cover";
      avatarPreview.style.backgroundPosition = "center";
      avatarPreview.textContent = "";
    };

    reader.readAsDataURL(arquivo);
  });
});

const inputs_inf_funcionario = [...document.querySelectorAll(".input_inf")];

inputs_inf_funcionario.forEach((el) => {
  el.addEventListener("focus", (evt) => {
    inputs_inf_funcionario.forEach((i) => {
      i.parentElement.classList.remove("falta_preencher");
      i.parentElement.classList.remove("selecionado");
    });
    evt.target.parentElement.classList.add("selecionado");
  });

  el.addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("selecionado");
    if (evt.target.value === "") {
      evt.target.parentElement.classList.add("falta_preencher");
    }
  });
});

function limparInputs() {
  inputs_inf_funcionario.forEach((el) => {
    el.value = "";
    el.parentElement.classList.remove("falta_preencher", "selecionado");
  });

  document.getElementById("nome").textContent = "";
  document.getElementById("sobrenome").textContent = "";
  document.getElementById("telefone").textContent = "";
  document.getElementById("email").textContent = "";
}

document.getElementById("nome").addEventListener("input", atualizarPreview);
document.getElementById("sobrenome").addEventListener("input", atualizarPreview);
document.getElementById("telefone").addEventListener("input", atualizarPreview);
document.getElementById("email").addEventListener("input", atualizarPreview);

function atualizarPreview() {
  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("sobrenome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();

  const nomeCompleto = [nome, sobrenome].filter(Boolean).join(" ");
  const iniciais = [nome[0] || "", sobrenome[0] || ""].join("").toUpperCase();

  document.querySelector(".visualizacao_nome").textContent = nomeCompleto || "Nome do Funcionário";

  const avatarPreview = document.querySelector(".visualizacao_avatar");
  if (!window.perfilFotoDataUrl) {
    avatarPreview.textContent = iniciais || "??";
  }

  document.getElementById("inf_telefone").textContent = telefone || "—";
  document.getElementById("inf_email").textContent = email || "—";
}
