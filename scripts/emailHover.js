const emailLogo = document.querySelector('.emailLogo');
const emailAnchor = document.querySelector('.footerEmail');

emailAnchor.addEventListener('mouseover', () => {

  emailLogo.classList.remove('fa-envelope');
  emailLogo.classList.add('fa-envelope-open');

})

emailAnchor.addEventListener('mouseout', () => {

  emailLogo.classList.remove('fa-envelope-open');
  emailLogo.classList.add('fa-envelope');

})