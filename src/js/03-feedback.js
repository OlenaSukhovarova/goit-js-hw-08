import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormData, 500));
formEl.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(event) {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

document.addEventListener('DOMContentLoaded', function () {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (data) {
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    email.value = data.email;
    message.value = data.message;
  }
});
