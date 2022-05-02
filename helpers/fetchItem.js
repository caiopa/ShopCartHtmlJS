const fetchItem = async (id) => {
  const URLs = `https://api.mercadolibre.com/items/${id}`;

  try {
    const promiss = await fetch(URLs);
    const jsonPromiss = await promiss.json();
    // console.log(jsonPromiss);
    return jsonPromiss;
  } catch (error) {
    return error;
  }
};
// fetchItem('MLB1341706310'); 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
