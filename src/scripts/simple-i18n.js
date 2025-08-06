

// Función para verificar si estamos en el navegador
const isClient = typeof window !== 'undefined';

let currentLanguage = isClient ? (localStorage.getItem('language') || 'es') : 'es';
let translations = {};

async function loadLanguage(lang) {
  if (!isClient) return {};
  
  try {
    const response = await fetch(`/locales/${lang.toLowerCase()}/translation.json`);
    translations = await response.json();
    currentLanguage = lang;
    console.log(`Loaded translations for ${lang}`, translations);
    localStorage.setItem('language', lang);
    return translations;
  } catch (error) {
    console.warn(`Could not load ${lang}, falling back to Spanish`);
    if (lang !== 'es') {
      return loadLanguage('es');
    }
    return {};
  }
}

function t(key, defaultValue = key) {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return defaultValue;
    }
  }
  
  return value || defaultValue;
}


export async function changeLanguage(newLang) {
  if (!isClient) return;
  await loadLanguage(newLang);
  window.location.reload();
}

// Inicializar al cargar la página (solo en el cliente)
if (isClient) {
  window.addEventListener('DOMContentLoaded', () => {
    loadLanguage(currentLanguage);
  });

  // Exportar funciones globalmente
  window.t = t;
  window.changeLanguage = changeLanguage;
  window.currentLanguage = currentLanguage;
}
