const pegarCarrinho = document.querySelector('.cart__items');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

/* remover item lista */
const cartItemClickListener = (event) => {
  event.target.remove();
  saveCartItems(pegarCarrinho.innerHTML);
};

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

/* ex1 */

const criandoItems = async () => {
  const json = await fetchProducts();
  const jsonResults = await json.results;
  
  jsonResults.forEach((obj) => {
    const { id: sku, title: name, thumbnail: image } = obj;
    const secItem = createProductItemElement({ sku, name, image });
    const pegandoDivPai = document.querySelector('.items');
    pegandoDivPai.appendChild(secItem);
  });
};

/* ex2 */

const addItems = () => {
  const Button = document.querySelectorAll('.item__add');
  Button.forEach((b) => {
    b.addEventListener('click', async () => {
      const pegarID = b.parentNode.firstChild.innerText;
      const result = await fetchItem(pegarID);
      const { id: sku, title: name, price: salePrice } = result;

      const secItem = createCartItemElement({ 
        sku, 
        name, 
        salePrice,
      });
      pegarCarrinho.appendChild(secItem);
    
      saveCartItems(pegarCarrinho.innerHTML);
    });
  });
};

/* ex6 */

const limpar = () => {
  const lista = document.querySelector('.cart__items');
  lista.innerText = '';
  localStorage.clear();
};

const btnLimpar = document.querySelector('.empty-cart');
btnLimpar.addEventListener('click', limpar);

/* 4 */

const recarregar = () => {
  pegarCarrinho.innerHTML = getSavedCartItems();
  pegarCarrinho.addEventListener('click', cartItemClickListener);
};

window.onload = async () => {
  await criandoItems();
  addItems(); 
  recarregar();
  getSavedCartItems();
};
