const BASE_URL = 'http://localhost:3100/api';
console.log('services.js');

async function getServices() {
  try {
    const resp = await fetch(`${BASE_URL}/services`);
    console.log('resp===', resp);
    // fetch nepermeta kodo i catch bloka jei status yra klaidos
    if (resp.ok === false) throw new Error('something is wrong');

    const servicesArr = await resp.json();
    console.log('servicesArr===', servicesArr);
    console.log('piesiam korteles');
  } catch (error) {
    console.log('error ===', error);
    console.log('atvaizduojam klaida');
  }
}
getServices();
