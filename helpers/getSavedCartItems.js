const getSavedCartItems = () => {
    /* const pegarCarrinho = document.querySelector('.cart__items');
    pegarCarrinho.innerHTML =  */
    localStorage.getItem('cartItems');
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
