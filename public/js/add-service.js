import { BASE_URL } from './modules/config.js';

console.log('add service');

// back button //
const backBtn = document.querySelector('.btn');
console.log('backBtn===', backBtn);
backBtn.addEventListener('click', () => {
  window.location.href = 'user.html';
});

const nameEl = document.getElementById('name');
const priceEl = document.getElementById('price');
const descriptionEl = document.getElementById('description');

const formEl = document.forms[0];

console.log('formEl ===', formEl);

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('js is in controll');
  const newServiceObj = {
    name: nameEl.value,
    price: priceEl.value,
    description: descriptionEl.value,
  };
  console.log('newServiceObj ===', newServiceObj);
  createService(newServiceObj);
});

async function createService(obj) {
  const resp = await fetch(`${BASE_URL}/services`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log('resp ===', resp);

  if (resp.status === 201) {
    // sukurta sekmingai
    window.location.href = 'index.html';
  } else {
    console.error('something went wrong');
  }
}
