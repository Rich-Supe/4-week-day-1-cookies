
console.log("hello!")

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Not sure where my cookies are :(")
  // Your JavaScript goes here...
  const newWindow = window.open("https://www.google.com/", "Google", "width=100", 'height=100');
  // newWindow.resizeTo(500,500);
  document.cookie = "ginormous_cookie=chocolate-chip"
  document.cookie = "favorite_cookie=snickerdoodle";
  // window.alert('I am about to steal your information! Mark Z. sends his regards')

  function setCookie(name, value) {
    // cookie[name] = value
    // return cookie
    return document.cookie = `${name}=${value}`
  }
  console.log(setCookie("white", "choco"));
  console.log(setCookie("macaroon", "coconut"))

  // let cookie1 = {white_choco_chip: the_best}
  // let cookie2 = {macaroon: coconut}
  let cookies = setCookie()

  function getCookies(cb, cookies) {
    let newArray = [...name, ...value]
    
  }

  console.log(getCookies(setCookie, "white", "choco"));
});
// window.alert('this should be working :o')
