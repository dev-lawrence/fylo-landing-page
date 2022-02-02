const form = document.querySelector('.form');
const userEmail = document.querySelector('.email');
const formBtn = document.querySelector('.form-btn');

// function to submit form
const submitForm = () => {
  const errorMsg = form.querySelector('.error-msg');
  // check if field is empty
  //   if (userEmail.value === '') {

  //   } else {
  //     console.log('false');
  //   }
  console.log(errorMsg);
};

// add event listner to the form button
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
formBtn.addEventListener('click', submitForm);
