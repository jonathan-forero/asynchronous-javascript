import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/products`)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (products) {
//     console.log(products);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

fetchData(`${API}/products`)
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    console.log(products);
    return fetchData(`${API}/products/${products[0].id}`);
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (product) {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`);
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (category) {
    console.log(category.name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Finally");
  });
