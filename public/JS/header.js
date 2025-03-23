// Script para alternar la visibilidad del menú en pantallas pequeñas
const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

// Script para cambiar el idioma
const languageButton = document.getElementById("language-button");
const languageText = languageButton.querySelector(".language-text");

let currentLanguage = "ES"; // Idioma inicial

languageButton.addEventListener("click", () => {
  // Cambia entre idiomas
  if (currentLanguage === "ES") {
    currentLanguage = "EN";
    languageText.textContent = "EN";
  } else {
    currentLanguage = "ES";
    languageText.textContent = "ES";
  }

  console.log(`Idioma cambiado a: ${currentLanguage}`);
});