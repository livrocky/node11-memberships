/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
import { deleteService } from '../services.js';

function makeEl(tagName, text, dest, elClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  dest.appendChild(el);
  return el;
}

export function createCard(newCardObj) {
  const articleEl = document.createElement('article');
  articleEl.className = 'membership-card';
  makeEl('h3', `${newCardObj.price}eur ${newCardObj.name}`, articleEl);
  makeEl('p', newCardObj.description, articleEl);
  makeEl('div', '', articleEl, 'hr');
  // makeEl('button', 'delete', articleEl, 'btn btn-delete');
  const btn = makeEl('button', '', articleEl, 'btn btn-delete');
  makeEl('i', '', btn, 'fa fa-trash');
  btn.onclick = () => {
    console.log('delete', newCardObj.id);
    deleteService(newCardObj.id);
  };

  return articleEl;
}

export function renderCards(cardArr, dest) {
  // isvalyti dest kad neliktu pries tai buvusiu korteliu
  // dest.innerHTML = '';
  // sukti cikla ir irasyti visas gautas korteles
  cardArr.forEach((cObj) => {
    const card = createCard(cObj);
    dest.append(card);
  });
}
