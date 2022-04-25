function makeEl(tagName, text, dest, elClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (elClass) el.className = elClass;
  dest.appendChild(el);
  return el;
}

// eslint-disable-next-line import/prefer-default-export
export function createCard(newCardObj) {
  const articleEl = document.createElement('article');

  articleEl.className = 'card';
  makeEl('p', `${newCardObj.name} ${newCardObj.surname}`, articleEl);
  makeEl('p', `Email Address: ${newCardObj.email}`, articleEl);
  makeEl('p', `Membership:${newCardObj.membership}`, articleEl);
  makeEl('p', `ip:78.20.42.19`, articleEl);

  // console.log('articleEl ===', articleEl);
  return articleEl;
}

export function renderCards(cardArr, dest) {
  // isvalyti dest kad neliktu pries tai buvusiu korteliu
  dest.innerHTML = '';
  // sukti cikla ir irasyti visas gautas korteles
  cardArr.forEach((cObj) => {
    const card = createCard(cObj);
    dest.append(card);
  });
}
