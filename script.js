let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addProduct(name, price, image, size, color = "Default"){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({
name,
price,
image,
size,
color
})

localStorage.setItem("cart", JSON.stringify(cart))

alert("Added to cart")

}

cart.push({
name: name,
price: price
});

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart!");

