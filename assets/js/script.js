const html = document.querySelector('html');
const light = document.querySelector('.light');

light.addEventListener('click', function() {
   html.classList.toggle('light');
   if(html.classList.contains('light')) {
      light.setAttribute('src', './assets/img/dark.svg')
   } else {
      light.setAttribute('src', './assets/img/light.svg')
   }
});