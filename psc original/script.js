document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnLogin').addEventListener('click', handleLogin);
});

function handleLogin() {
  const tipo = document.getElementById('tipo').value;
  const user = document.getElementById('user').value.trim();
  const pass = document.getElementById('pass').value.trim();
  const msg = document.getElementById('msg');

  msg.className = 'msg';
  msg.textContent = '';

  if (!user || !pass) {
    showMessage('Preencha usuário e senha.', 'error');
    return;
  }

  // Simulação
  showMessage('Login bem-sucedido (simulado)!', 'success');

  setTimeout(() => {
    if (tipo === 'paciente') {
      window.location.href = 'painel_paciente.html';
    } else {
      window.location.href = 'painel_psicologo.html';
    }
  }, 700);
}

function showMessage(text, type = 'error') {
  const msg = document.getElementById('msg');
  msg.textContent = text;
  msg.className = 'msg ' + type;
}
