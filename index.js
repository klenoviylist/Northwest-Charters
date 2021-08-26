$(function () {
  $('.book-trip, .nav-contact, .card').click(function () {
    $('.contact-container').addClass('contact-active');
  });

  $('.form-close-btn').click(function () {
    $('.contact-container').removeClass('contact-active');
  });
});

$('.contact-container').mouseup(function (e) {
  let formContent = $(".contact-content");
  if (!formContent.is(e.target) && formContent.has(e.target).length === 0) {
    $(this).removeClass('contact-active');
  }
});
