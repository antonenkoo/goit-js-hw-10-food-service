import './sass/main.scss';
import menu from './json/menu.json';
import cardTpl from './templates/card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeCheck();


document.getElementById('theme-switch-toggle').onclick = function () {
  let input = document.getElementById('theme-switch-toggle');
  if (input.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', JSON.stringify('dark'));
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify('light'));
  }
};

function themeCheck() {
  const theme = localStorage.getItem('theme');
  const currentTheme = JSON.parse(theme);

  if (currentTheme === 'dark') {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', JSON.stringify('dark'));
    document.getElementById('theme-switch-toggle').checked = true;
  } else {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify('light'));
    document.getElementById('theme-switch-toggle').checked = false;
  }
}

let jsMenu = document.querySelector('.js-menu');
jsMenu.insertAdjacentHTML('beforeend', cardTpl(menu));
