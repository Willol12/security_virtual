function VerificarEntrada() {
  NomeConvidade = document.getElementById("nome").value;
  ConvidadosCristian =['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan', 'Willian']
  if (ConvidadosCristian.includes(NomeConvidade)) {
    document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar'
  } else {
    document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode Entrar!'
  }
}