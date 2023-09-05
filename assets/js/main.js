//! Main JS Start

//* DataBase
let dataBase = [
  {
    id: "1",
    title: "Chanel Rings",
    price: "49.90",
    image: "./assets/image/1.jpg",
  },
  {
    id: "2",
    title: "Dont burn creeme",
    price: "59.90",
    image: "./assets/image/2.jpg",
  },
  {
    id: "3",
    title: "Glasse clock",
    price: "189.90",
    image: "./assets/image/3.jpg",
  },
  {
    id: "4",
    title: "Vellvet tonic",
    price: "94.90",
    image: "./assets/image/4.jpg",
  },
];


//* Show products
function showProducts() {
  let productList = document.querySelector(".productList");

  dataBase.map((item) => {
    productList.innerHTML += `
            <li class="product">
                <div class="productImg">
                    <img src="${item.image}" alt="product image" />
                </div>
                <div class="aboutProduct">
                    <h3 class="productTitle">${item.title}</h3>
                    <p class="price">$
                        <span> ${item.price}</span>
                    </p>
                </div>
                <button class="btn" type="submit" id="${item.id}" onclick="addToCard(id)">Add to card</button>
            </li>
        `;
  });
}

showProducts();


//* Card Data
let card = [];

//* Add to Card
function addToCard(id) {
  dataBase.find((item) => {
    if (item.id === id) {
      card.unshift(item);
    }
  });
}

console.log(card);


//* Show Card
// function showCard() {
//   let cardProducts = document.querySelector(".cardProducts");

//   card.map((item) => {
//     cardProducts.innerHTML += `
//         <li class="cardProduct">
//             <button class="removeBtn">X</button>
//                 <div class="cardImg">
//                     <img src="${item.image}" alt="product image" />
//                 </div>
//             <div class="cardAboutProduct">
//                 <h3 class="productTitle">${item.title}</h3>
//                 <p class="price">$
//                     <span> ${item.price}</span>
//                 </p>
//             </div>
//         </li>
//     `;
//   });
// }
