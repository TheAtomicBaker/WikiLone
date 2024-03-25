function dropDown() {
  document.getElementById("theme-toggle").classList.toggle("show");
}

function themeToggle(theme) {
  document.getElementById("theme").className = theme;
  if (theme != 'light-mode'){
    return document.getElementById('logo').src = 'images/lone2.png'
  } else {
    return document.getElementById('logo').src = 'images/lone1.png'
  }
}