let cartBody = document.getElementById('cart');
let inputCart = document.getElementById('cartFF');
function addCartToForm(id){
  inputCart.value += id + ", ";
  }
window.addEventListener('click', (event) => {
  console.log('click');

  // клік на кнопку "Купити"
  if(event.target.classList.contains('button')){
    console.log('клік на кнопку');
    addItems(event.target);
  }
  if(event.target.classList.contains('delete-items')){
    console.log('клік на кнопку за видалення товару');
    deleteItems(event.target);
  }
  function deleteItems(element){
    console.log('Видалення товау')
    element.parentNode.remove();
  }
});

function addItems(element){
  console.log('додавання товару');
  let li = document.createElement('li');
  li.innerHTML = element.dataset.img
               + element.dataset.name
               + element.dataset.price
               + '<div class="delete-items"> X </div>';
  cartBody.appendChild(li);                   
 addCartToForm(element.dataset.id);
 }


