const items = [
    { id: 1, name: 'Porshe Panamera', price: 100000, img_link: './img/img-not-found.png'},
    { id: 2, name: 'Opel Astra', price: 15000, img_link: './img/img-not-found.png' },
    { id: 3, name: 'Ford Focus', price: 12000, img_link: './img/img-not-found.png' },
    { id: 4, name: 'Volvo XC90', price: 20000, img_link: './img/img-not-found.png' },
    { id: 5, name: 'Volvo XC80', price: 150000, img_link: './img/img-not-found.png' }
  ];

function displayData(data) {
  const tableBody = document.getElementById('dataDisplay');
  tableBody.innerHTML = '';
  data.forEach(item => {
    const row = `
      <li class="card-list-item" id="${item.id}">
        <button type='button' class='card-item-btn-del' title="Delete">
          <svg width='24' height='24' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M6,12v15c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V12H6z M12,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9  c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M17,25c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z M22,25  c0,0.552-0.448,1-1,1s-1-0.448-1-1v-9c0-0.552,0.448-1,1-1s1,0.448,1,1V25z" fill="#ff0000"/><path d="M27,6h-6V5c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v1H5C3.897,6,3,6.897,3,8v1c0,0.552,0.448,1,1,1h24  c0.552,0,1-0.448,1-1V8C29,6.897,28.103,6,27,6z M13,5c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1v1h-6V5z" fill="#ff0000"/>
          </svg>
        </button>
        <button type='button' class='card-item-btn-res' title="Edit">
          <svg width='24' height='24' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M495.6 49.23l-32.82-32.82C451.8 5.471 437.5 0 423.1 0c-14.33 0-28.66 5.469-39.6 16.41L167.5 232.5C159.1 240 154.8 249.5 152.4 259.8L128.3 367.2C126.5 376.1 133.4 384 141.1 384c.916 0 1.852-.0918 2.797-.2813c0 0 74.03-15.71 107.4-23.56c10.1-2.377 19.13-7.459 26.46-14.79l217-217C517.5 106.5 517.4 71.1 495.6 49.23zM461.7 94.4L244.7 311.4C243.6 312.5 242.5 313.1 241.2 313.4c-13.7 3.227-34.65 7.857-54.3 12.14l12.41-55.2C199.6 268.9 200.3 267.5 201.4 266.5l216.1-216.1C419.4 48.41 421.6 48 423.1 48s3.715 .4062 5.65 2.342l32.82 32.83C464.8 86.34 464.8 91.27 461.7 94.4zM424 288c-13.25 0-24 10.75-24 24v128c0 13.23-10.78 24-24 24h-304c-13.22 0-24-10.77-24-24v-304c0-13.23 10.78-24 24-24h144c13.25 0 24-10.75 24-24S229.3 64 216 64L71.1 63.99C32.31 63.99 0 96.29 0 135.1v304C0 479.7 32.31 512 71.1 512h303.1c39.69 0 71.1-32.3 71.1-72L448 312C448 298.8 437.3 288 424 288z"/>
          </svg>
        </button>
        <img src="${item.img_link}" width='250px' alt="" class="card-item-img">
        <div class="card-text-box">
          <h3 class="card-item-title">${item.name}</h3>
          <p class='card-item-price'>${item.price}$</p> 
        </div>
      </li>
    `;
    tableBody.insertAdjacentHTML('beforeend', row);
  });
}

function displayTotal(data){
  const box = document.getElementById("car-total-box");
  box.innerHTML = ''
  const total = `
    <p class='card-total'>Amount of cars: ${data.length}</p> 
  `
  box.insertAdjacentHTML('beforeend', total)
}

function displayTotalPrice(data){
  const priceBox = document.getElementById('car-total-price');
  priceBox.innerHTML = '';
  let price = 0;
  for (let i = 0; i < data.length; i++) {
    price += data[i].price
  }
  const totalPrice = `
    <p class='card-total'>Total cars price: ${price}</p> 
  `
  priceBox.insertAdjacentHTML('beforeend', totalPrice)
}

displayData(items);
displayTotal(items);
displayTotalPrice(items);

function sortCars(data) {
  displayData(data)
  document.getElementById('sortDropdown').addEventListener('change', (event) => {
    const sortBy = event.target.value;
    let sortedItems;
  
    if (sortBy === 'name') {
      sortedItems = [...data].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price') {
      sortedItems = [...data].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'default'){
      sortedItems = [...data]
    }
  
    displayData(sortedItems)
  });
}

document.getElementById('searchInput').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const filteredItems = items.filter(item => item.name.trim().toLowerCase().includes(searchTerm));
    console.log(filteredItems)
    sortCars(filteredItems);
    displayTotal(filteredItems);
    displayTotalPrice(filteredItems);
  });


  const modal = document.getElementById('carModal');
  const closeModalBtn = document.getElementsByClassName('close')[0];
  const modalTitle = document.getElementById('modalTitle');
  const submitCarModalBtn = document.getElementById('submitCarModal');
  
  function openModal() {
    modal.style.display = 'flex';
  }
  
  closeModalBtn.onclick = function() {
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  
  document.getElementById('carFormModal').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const name = document.getElementById('carNameModal').value;
    const price = Number(document.getElementById('carPriceModal').value);
    const img_link = document.getElementById('carImgLinkModal').value;
    if (price < 0){
      alert("The prise is negative value!")
    }
    else {
      if (submitCarModalBtn.textContent === 'Add Car') {
        const newCar = {
          id: items.length + 1,
          name,
          price,
          img_link
        };
    
        items.push(newCar);
      } 
      else {
        const carId = submitCarModalBtn.getAttribute('data-id');
        const carIndex = items.findIndex(item => item.id == carId);
    
        if (carIndex !== -1) {
          items[carIndex].name = name ? name > 0 : alert("The value is negative") ;
          items[carIndex].price = price;
          items[carIndex].img_link = img_link;
        }
    
        submitCarModalBtn.textContent = 'Add Car';
        submitCarModalBtn.removeAttribute('data-id');
      }
      sortCars(items);
      displayTotal(items);
      displayTotalPrice(items);
  
      modal.style.display = 'none';
  
      document.getElementById('carNameModal').value = '';
      document.getElementById('carPriceModal').value = '';
      document.getElementById('carImgLinkModal').value = './img/img-not-found.png';
    }
  });
  
  document.getElementById('dataDisplay').addEventListener('click', (event) => {
    if (event.target.closest('.card-item-btn-res')) {
      const carId = event.target.closest('li').id;
      const car = items.find(item => item.id == carId);
  
      if (car) {
        document.getElementById('carNameModal').value = car.name;
        document.getElementById('carPriceModal').value = car.price;
        document.getElementById('carImgLinkModal').value = car.img_link;
  
        modalTitle.textContent = 'Edit Car';
        submitCarModalBtn.textContent = 'Update Car';
        submitCarModalBtn.setAttribute('data-id', car.id);
  
        openModal();
      }
    }
  });
  
  document.getElementById('addCarBtn').addEventListener('click', () => {
    document.getElementById('carNameModal').value = '';
    document.getElementById('carPriceModal').value = '';
    document.getElementById('carImgLinkModal').value = './img/img-not-found.png';
  
    modalTitle.textContent = 'Add Car';
    submitCarModalBtn.textContent = 'Add Car';
    submitCarModalBtn.removeAttribute('data-id');
  
    openModal();
  });
