// Modal e envio
const modal = document.getElementById("modal");

function mudarModal() {
  modal.showModal();
}

const fecharmodal = document.querySelector("#enviar");

fecharmodal.addEventListener("click", () => {
    modal.close();
    window.alert("Seu cadastro foi realizado!")
})

// Máscara
function mascara_telefone() {
  var tel_formatado = document.getElementById("telefone").value;
  localStorage.setItem("tele", tel_formatado);

  if (tel_formatado[0] != "(" && tel_formatado[0] != undefined) {
    document.getElementById("telefone").value = "(" + tel_formatado[0];
  }

  if (tel_formatado[3] != ")" && tel_formatado[3] != undefined) {
    document.getElementById("telefone").value =
      tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
  }

  if (tel_formatado[9] != "-" && tel_formatado[9] != undefined) {
    document.getElementById("telefone").value =
      tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
  }
}

function mascara_cpf() {
  var cpf_formatado = document.getElementById("cpf").value;
  localStorage.setItem("localcpf", cpf_formatado)

  if (cpf_formatado[3] != "." && cpf_formatado[3] != undefined) {
    document.getElementById("cpf").value =
      cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
  }

  if (cpf_formatado[7] != "." && cpf_formatado[7] != undefined) {
    document.getElementById("cpf").value =
      cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
  }

  if (cpf_formatado[11] != "-" && cpf_formatado[11] != undefined) {
    document.getElementById("cpf").value =
      cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
  }
}

// Pegando os outros valores
function pegar_nome(){
  const Nome = document.getElementById("nome").value
  localStorage.setItem("localNome", Nome)
}

function pegar_email(){
  const email = document.getElementById("email").value
  localStorage.setItem("localEmail", email)
}

function pegar_senha(){
  const senha = document.getElementById("senha").value
  localStorage.setItem("localSenha", senha)
}