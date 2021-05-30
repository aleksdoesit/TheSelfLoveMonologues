const emailLogo = document.querySelector('.emailLogo');
const emailAnchor = document.querySelector('.footerEmail');

emailAnchor.addEventListener('mouseover', () => {


  if (emailLogo.classList.contains('fa-envelope')) {

    emailLogo.classList.remove('fa-envelope');
    emailLogo.classList.add('fa-envelope-open');

  } else if (emailLogo.classList.contains('fa-envelope-open')) {

    emailLogo.classList.remove('fa-envelope-open');
    emailLogo.classList.add('fa-envelope');
  }

})