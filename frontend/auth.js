const BACKEND_URL = "http://localhost:8082";
//const BACKEND_URL = "http://backend:8082";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(`${BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => {
    if (response.status === 200) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("message").innerText =
        "Invalid username or password";
    }
  })
  .catch(err => {
    document.getElementById("message").innerText =
      "Backend not reachable";
  });
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(`${BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("message").innerText = data;

    if (data.includes("successful")) {
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  })
  .catch(err => {
    document.getElementById("message").innerText =
      "Backend not reachable";
  });
}