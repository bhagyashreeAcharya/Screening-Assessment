// Select all offer boxes
const boxes = document.querySelectorAll('.offer-box');

boxes.forEach(box => {
  const radio = box.querySelector('input[type="radio"]');
  if (!radio) return; // 🚨 This prevents crash if radio is missing

  radio.addEventListener('change', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
  });
});

const addToCartBtn = document.querySelector('.add-to-cart');
const message = document.getElementById('cart-message');

addToCartBtn.addEventListener('click', () => {
  message.style.display = 'block';
  message.textContent = "🎉 Item added to cart!";
  
  // Optional: auto-hide after 2 seconds
  setTimeout(() => {
    message.style.display = 'none';
  }, 2000);
});
