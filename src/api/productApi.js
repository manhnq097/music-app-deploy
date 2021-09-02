import axios from 'axios';

export default function productApi() {
  var items = [];
  axios.get('http://localhost:4000/products')
    .then(response => {
      items = response.data;
    })
  return items;
}

