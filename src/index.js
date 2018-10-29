import Menu from './components/Menu';

const initMenu = () => {
  const menu = new Menu(document.querySelector('.Menu'));
  menu.init();
};

window.onload = () => {
  initMenu();
};
