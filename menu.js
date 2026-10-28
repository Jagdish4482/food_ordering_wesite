// menu.js

const addButtons = document.querySelectorAll(".btn");
let total = 0;
let cartItems = [];

// Add items to cart
addButtons.forEach(button => {
  button.addEventListener("click", () => {
    const itemElement = button.parentElement;
    const name = itemElement.querySelector("h3").textContent;
    const price = parseInt(itemElement.querySelector(".price").textContent.replace("₹", ""));
    
    total += price;
    cartItems.push({ name, price });
  });
});

// Complete order → redirect to total.html
const completeBtn = document.querySelector(".bt");
if (completeBtn) {
  completeBtn.addEventListener("click", () => {
    // Save cart data in localStorage
    localStorage.setItem("cartTotal", total);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    
    // Redirect to total.html
    window.location.href = "total.html";
  });
}
