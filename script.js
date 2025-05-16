const boxes = document.querySelectorAll('.offer-box');

boxes.forEach(box => {
  const radio = box.querySelector('input[type="radio"]');
  if (!radio) return; 

  radio.addEventListener('change', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');
  });
});

const addToCartBtn = document.querySelector('.add-to-cart');
const message = document.getElementById('cart-message');

addToCartBtn.addEventListener('click', () => {
  message.style.display = 'block';
  message.textContent = " Item added to cart!";
  
  // optionally added so that the pop up message will disappear
  setTimeout(() => {
    message.style.display = 'none';
  }, 2000);
});
