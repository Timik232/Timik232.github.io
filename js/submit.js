let submit =  document.querySelector('.sendMessage');

submit.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Сообщение отправлено");
  location.reload ()
});
