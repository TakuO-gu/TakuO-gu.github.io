window.onload = function () {
  const menu_btn = document.querySelector('.openbtn');
  const mobile_menu = document.querySelector('.mobile-nav') 

$(".openbtn").click(function () {
  $(this).toggleClass('active');
  mobile_menu.classList.toggle('is-active')
});

}