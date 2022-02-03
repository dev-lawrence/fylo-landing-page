const form = document.querySelector('.form');
const userEmail = document.querySelector('.email');
const formBtn = document.querySelector('.form-btn');
const upBtn = document.querySelector('.up-btn');

// function to submit form
const submitForm = () => {
  const errorMsg = form.querySelector('.error-msg');
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // check if the values entered matches the pattern above
  if (userEmail.value.match(pattern)) {
    userEmail.value = '';
  }

  // if it does not match the pattern
  else {
    errorMsg.textContent = 'Please enter a valid email address';
    errorMsg.classList.add('clr');
    setTimeout(() => (errorMsg.textContent = ''), 3000);
  }
};

// show up button
const showTopBtn = () => {
  const scroll = window.scrollY;

  if (scroll > 2000) {
    upBtn.classList.add('toTopBtn');
  } else {
    upBtn.classList.remove('toTopBtn');
  }
};

// go to top
const goToTop = () => {
  window.scrollTo(0, 0);
};

// add event listner to the form button
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
formBtn.addEventListener('click', submitForm);
window.addEventListener('scroll', showTopBtn);
upBtn.addEventListener('click', goToTop);
