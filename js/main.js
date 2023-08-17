const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal')
const modal_close = document.querySelector('.modal-close');
const modal_container = document.querySelector('.modal-container');
function showBuyticket() {
    modal.classList.add('open')
}
function hideBuyticket() {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyticket);
}
modal_close.addEventListener('click',hideBuyticket);
modal.addEventListener('click',hideBuyticket);
modal_container.addEventListener('click', function (event) {
    event.stopPropagation();
});
