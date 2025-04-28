const hamburger = document.querySelector('#hamburger')
const navBar = document.querySelector('#nav-bar')


hamburger.addEventListener('mousedown', () => {
  navBar.classList.toggle('active')
})