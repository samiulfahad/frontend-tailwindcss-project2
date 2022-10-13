const menuButton = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const navToggle = () => {
    menuButton.classList.toggle('open')
    // menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}
menuButton.addEventListener('click', navToggle)