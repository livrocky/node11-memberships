/* <div class="membership-card">
<h2 class="membership-title">$1.99 Trial</h2>
<p class="membership-desc">This is 2 days membership</p>
<hr>
<div class="trash-icon">
    <i class="fa fa-trash" aria-hidden="true"></i>
</div>
</div> */

function createCard() {
  const divEl = document.createElement('div');
  makeEl('h2', 'Price Title', divEl);
  makeEl('p', 'Price Title', divEl);
  makeEl('h2', 'Price Title', divEl);
}

function makeEl(tagName, text, dest, eClass = null) {
  const el = document.createElement(tagName);
  el.textContent = text;
  if (eClass) el.className = eClass;
  dest.
}
