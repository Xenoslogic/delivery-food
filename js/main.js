const cartButton = document.querySelector('#cart-button');
const modalClose = document.querySelector('#modal-close');
const modal = document.querySelector('.modal');
cartButton.addEventListener('click', function(Event) {
	modal.classList.add('modal-open');
});
modalClose.addEventListener('click', function(Event) {
	modal.classList.remove('modal-open');
});

new WOW().init();

