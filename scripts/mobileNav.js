const mobileButton = document.querySelector('.menuBarsMobile');
const mobileMenu = document.querySelector('.mobileNav');
const overlay = document.querySelector('.overlay')

mobileButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobileMenuOpen')
  overlay.classList.toggle('overlayActive')
})

overlay.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobileMenuOpen')
  overlay.classList.toggle('overlayActive')
})