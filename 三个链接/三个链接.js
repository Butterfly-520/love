window.onload = function() {
  // 默认为白天主题
  document.body.classList.add('day-theme');
  var checkBox = document.querySelector('.theme-switch__checkbox');
  checkBox.addEventListener('change', function(e) {
    if(e.target.checked) {
      document.body.classList.remove('day-theme');
      document.body.classList.add('night-theme');
    } else {
      document.body.classList.remove('night-theme');
      document.body.classList.add('day-theme');
    }
  });
}

