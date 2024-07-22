document.addEventListener("DOMContentLoaded", () => {
  const domainElement = document.getElementById("domain");
  domainElement.textContent = window.location.hostname;
});
