import faker from 'faker';

const mount = (el) => {
    let products = '';
    
    for (let index = 0; index < 3; index++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products;

}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    if (el) {
        mount(el);
    }
}

export {mount};