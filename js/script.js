document.querySelector( ".menu i" ).addEventListener('click',() => {
  const menu = document.querySelector('ul');
  const menuButton = document.getElementById('menuButton');

  if(menu.classList.contains('close')){
    menu.classList.remove('close');
    menu.classList.add('open');
    menuButton.classList.remove('fa-bars');
    menuButton.classList.add('fa-times');
    } else {
    menu.classList.remove('open');
    menu.classList.add('close');
    menuButton.classList.remove('fa-times');
    menuButton.classList.add('fa-bars');
  }
});