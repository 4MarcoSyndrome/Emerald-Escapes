
// code taken from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */

const myFunction = () => {
  const x = document.getElementById("container-links");

  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }

}