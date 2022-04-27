require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {

  test('Verificar se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');

  });

  test('Verificar se fetch é chamada ao executa fetchProducts com o argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('Ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  test('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch)
  });

  test('Ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const respnse = await fetchProducts()
    expect(respnse).toEqual(new Error('You must provide an url'))
  })
});
