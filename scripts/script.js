// Derived from tutorial: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

function navFunc() {
    const links = document.getElementById("nav-links");
    if (links.style.display == "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
}

