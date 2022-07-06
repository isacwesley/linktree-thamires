const html = document.querySelector('html');
const dark = document.querySelector('.dark');

dark.addEventListener('click', function() {
   html.classList.toggle('dark');
   if(html.classList.contains('dark')) {
      dark.setAttribute('src', './assets/img/light.svg')
   } else {
      dark.setAttribute('src', './assets/img/dark.svg')

   }
});