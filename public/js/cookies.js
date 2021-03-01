
console.log("hello!")

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Not sure where my cookies are :(")
  // Your JavaScript goes here...
  const newWindow = window.open("https://www.google.com/", "Google", "width=100", 'height=100');
  // newWindow.resizeTo(500,500);
  document.cookie = "ginormous_cookie=chocolate-chip"
  document.cookie = "favorite_cookie=snickerdoodle";
  window.alert('I am about to steal your information! Mark Z. sends his regards')
});
// window.alert('this should be working :o')
