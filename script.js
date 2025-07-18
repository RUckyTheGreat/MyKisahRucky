// Auto redirect dari index kalau sudah klik Get Started
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.endsWith("index.html")) {
    const already = localStorage.getItem("alreadyStarted");
    if (already === "yes") {
      window.location.href = "home.html";
    }
  }
});
