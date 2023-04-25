const add_product_btn = document.querySelector(".add__product");
const price_input = document.querySelector("#price_input");
const name_input = document.querySelector("#name_input");
const carts = document.querySelector(".carts");
const add_to_wishlist_btn = document.querySelector(".add_to_wishlist_btn");
const wishlistItems =
  localStorage.getItem("wishlistItems") !== null
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [];
let productId = 0;
const arr = [];

const initialState = {
  wishlistItems,
};

let productPrice;
let productName;


function addToWishlist(item) {
  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(item));

    document.querySelector('body').innerHTML = `
        
    `
}


const addProduct = (e) => {
  productPrice = price_input.value;
  productName = name_input.value;
  productId++;
  let product = new Product(productId, productName, productPrice);
  arr.push(product);
  carts.innerHTML = arr.map((item) => {
    return `
    <div class="cart cart${item.id}">
        <img
        src="https://images.unsplash.com/photo-1680951765696-d75829fd46b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ2fF84ekZIdWhSaHlvfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        />
        <h4 id="product_title">
        ${item.name}
        </h4>
        <i
        class="bi bi-star-fill"
        ></i>
        <i style="color: yellow" class="bi bi-star-fill"></i>
        <i style="color: yellow" class="bi bi-star-fill"></i>
        <i style="color: yellow" class="bi bi-star-fill"></i>
        <i style="color: yellow" class="bi bi-star-fill"></i>
        <p style="text-align: center; margin-top: 10px">
        <del id="product_price">$${item.price}.00</del>-$50.00
        </p>
        <button class="btn1">Add to</button>
        <button onClick=${addToWishlist(item)} class="add_to_wishlist_btn">Wishlist</button>
    </div> 
    `;
  });
};

add_product_btn.addEventListener("click", addProduct);

class Product {
  constructor(id, name, category, price) {
    (this.id = id),
      (this.name = name),
      (this.category = category),
      (this.price = price);
  }
}
