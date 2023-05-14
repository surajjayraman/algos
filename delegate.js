// Define the Model
const model = {
  products: [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 10 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 5 },
    { id: 3, name: 'Product 3', price: 39.99, quantity: 2 }
  ],
  cart: []
};
  
// Define the View
function renderProductList(model) {
  const productList = document.createElement('ul');
  model.products.forEach(product => {
    const productItem = document.createElement('li');
    const addButton = document.createElement('button');
    addButton.innerText = 'Add to cart';
    addButton.addEventListener('click', () => {
      delegate.addToCart(product.id);
    });
    productItem.innerText = `${product.name} - $${product.price}`;
    productItem.appendChild(addButton);
    productList.appendChild(productItem);
  });
  return productList;
}
  
function renderCart(model) {
  const cartList = document.createElement('ul');
  model.cart.forEach(cartItem => {
    const cartItemElement = document.createElement('li');
    cartItemElement.innerText = `${cartItem.name} x ${cartItem.quantity} - $${cartItem.price}`;
    cartList.appendChild(cartItemElement);
  });
  return cartList;
}
  
// Define the Delegate
const delegate = {
  addToCart(productId) {
    const product = model.products.find(p => p.id === productId);
    if (product && product.quantity > 0) {
      const cartItem = model.cart.find(ci => ci.productId === productId);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        model.cart.push({
          productId: productId,
          name: product.name,
          price: product.price,
          quantity: 1
        });
      }
      product.quantity--;
      render();
    }
  }
};
  
// Define the Controller
renderProductList(model);  