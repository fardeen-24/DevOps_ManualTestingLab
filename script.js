const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// simple dummy credentials
const USERNAME = "admin";
const PASSWORD = "12345";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === USERNAME && pass === PASSWORD) {
    message.style.color = "green";
    message.textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "dashboard.html"; // placeholder
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
});
