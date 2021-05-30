const emailLogo = document.querySelector('.emailLogo');
const emailAnchor = document.querySelector('.footerEmail');

emailAnchor.addEventListener('mouseover', () => {

  emailLogo.classList.toggle('fa-envelope');
  emailLogo.classList.add('fa-envelope-open')
})