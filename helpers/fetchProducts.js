const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = async (item) => {
  // seu código aqui
  try {
    const promiss = await fetch(`${URL}${item}`);
    const promissJSON = await promiss.json();
    // console.log(jsonResults);
    return promissJSON;
  } catch (error) {
    return error;
  }
};

// fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

 /* chamandoJson.then((data) => {
    const Obj = {
      sku: data.results.id,
      name: data.results.title,
      image: (data.results.original_price).toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
      }),
    };
    return Obj;
  })
  .catch((error) => console.log('ocorreu um erro', error));
}; */