// Theme Toggle
document.getElementById("Mode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Language Switch
  const languageSelect = document.getElementById("languageSelect");
  const paragraphs = document.querySelectorAll(".info-box p");
  
  function updateLanguage(lang) {
    paragraphs.forEach(p => {
      p.innerHTML = p.getAttribute(`data-${lang}`);
    });
  }
  
  languageSelect.addEventListener("change", () => {
    updateLanguage(languageSelect.value);
  });
  
  // Load default
  document.addEventListener("DOMContentLoaded", () => {
    updateLanguage("en");
  });