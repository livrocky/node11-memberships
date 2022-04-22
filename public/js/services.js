import { renderCards } from './modules/html.js';

const BASE_URL = 'http://localhost:3100/api';
console.log('sevices.js');

const cardContainerEl = document.querySelector('.cards-container');

async function getServices() {
  try {
    const resp = await fetch(`${BASE_URL}/services`);
    console.log('resp ===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('something is wrong');

    const servicesArr = await resp.json();
    console.log('servicesArr ===', servicesArr);
    console.log('piesiam korteles');
    renderCards(servicesArr, cardContainerEl);
    // createCard(servicesArr[0]);
  } catch (error) {
    console.warn('error ===', error);
    console.log('atvaizduojam klaida');
  }
}

getServices();
