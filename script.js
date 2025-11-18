/* script.js - Menu hambúrguer e acessibilidade
   O script adiciona: alternância do menu e atualização do aria-expanded
*/

document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('primary-navigation');

  navToggle.addEventListener('click', function(){
    const isVisible = navList.getAttribute('data-visible') === 'true';
    navList.setAttribute('data-visible', String(!isVisible));
    navToggle.setAttribute('aria-expanded', String(!isVisible));
  });

  // Fecha menu ao clicar em um link (útil em mobile)
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navList.getAttribute('data-visible') === 'true') {
        navList.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
});