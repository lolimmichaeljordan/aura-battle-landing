import './style.css';

// URL de la aplicación existente de Aura Battle.
const PLAY_URL = 'https://aura-battle-nine.vercel.app';
// URL del APK de Android. Configurable con la variable de entorno de Vite
// VITE_ANDROID_DOWNLOAD_URL; si no está definida, se usa esta URL por defecto.
const DEFAULT_DOWNLOAD_URL =
  'https://github.com/lolimmichaeljordan/aura-battle/releases/download/v1.0.0/Aura-Battle.apk';
const ANDROID_DOWNLOAD_URL = import.meta.env.VITE_ANDROID_DOWNLOAD_URL || DEFAULT_DOWNLOAD_URL;

const joinForm = document.getElementById('join-form');
const codeInput = document.getElementById('code-input');
const codeError = document.getElementById('code-error');

function showError() {
  codeError.hidden = false;
  codeInput.classList.add('input-error');
}

function hideError() {
  codeError.hidden = true;
  codeInput.classList.remove('input-error');
}

function joinGame() {
  const code = codeInput.value.trim();
  if (!/^\d{3}$/.test(code)) {
    showError();
    codeInput.focus();
    return;
  }
  window.location.href = `${PLAY_URL}/${code}`;
}

codeInput.addEventListener('input', () => {
  codeInput.value = codeInput.value.replace(/\D/g, '');
  hideError();
});

codeInput.addEventListener('paste', () => {
  hideError();
});

joinForm.addEventListener('submit', (event) => {
  event.preventDefault();
  joinGame();
});

document.querySelectorAll('[data-download]').forEach((link) => {
  link.setAttribute('href', ANDROID_DOWNLOAD_URL);
});