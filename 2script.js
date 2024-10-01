document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#botonTryMe").addEventListener("click", function () {
    document.querySelector("#fotoHans").classList.toggle("show");
    // document.querySelector("#hora").classList.toggle("click", displayHideDate); PTEEEEEEE ??¿¿¿¿
  });

  const navLinks = document.querySelectorAll("nav ul li a");

  // Scroll bueno
  window.addEventListener("scroll", function () {
    let fromTop = window.scrollY;

    navLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // const form = document.getElementById("dudasForm");
  // const formResponse = document.getElementById("formResponse2");
  // console.log("formResponse2");



  // Form validation y message display
  const form = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (validateEmail(email) && message) {
      formResponse.textContent = "Gracias amigi!!!!";
      form.reset();
    } else {
      formResponse.textContent = "Please provide a valid email and message.";
      formResponse.style.color = "red";
    }
  });




// // ROBUST VALIDATE FOR AN EMAIL...

// // function validateEmail(email) {
//  const re = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\])$/;
// //   return re.test(String(email).toLowerCase());
// // }

// /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 

// TO IMPLEMENT IN WEB LANDING
function resultadoFinal(checkEmail, checkPassword) {
  const email = document.getElementById("email").value;
  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,4}$/;

  const password = document.getElementById("password").value;
  const passwordPattern = /^[a-zA-Z0-9]{8,}$/;

  const resultElement = document.getElementById("result");
  if (emailPattern.test(email) && passwordPattern.test(password)) {
      resultElement.innerHTML = "Válido";
      resultElement.style.color = "green";
  } else {
      resultElement.innerHTML = "No válido";
      resultElement.style.color = "red";
  }   
}