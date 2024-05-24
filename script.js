if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('Service Worker registrado com sucesso:', registration);
  }).catch(function(error) {
    console.log('Falha ao registrar o Service Worker:', error);
  });
}

// Adiciona o manifesto ao documento
let link = document.createElement('link');
link.rel = 'manifest';
link.href = '/manifest.json';
document.head.appendChild(link);
