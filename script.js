document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("open"); // for hamburger animation (optional)
  });

});

  const sections = document.querySelectorAll('.para-container1, .para-container2, .para-container3');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  
  
  const form = document.getElementById("contact-form");
  const wrapper = document.getElementById("form-wrapper");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const oldMsg = document.querySelector(".form-message");
    if (oldMsg) oldMsg.remove();

    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !subject || !message) {
      const error = document.createElement("p");
      error.className = "form-message";
      error.style.color = "red";
      error.textContent = "Please fill all fields.";
      form.appendChild(error);
      return;
    }

    wrapper.innerHTML = "<h2>Thank you!</h2><p class='form-message'>Your message has been submitted.</p>";
  });

