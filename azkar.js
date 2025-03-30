document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("azkar.json");
  const data = await response.json();

  const azkars = data["morning"] || [];
  const container = document.getElementById("azkar-container");

  azkars.forEach((azkar) => {
    const azkarElement = document.createElement("div");
    azkarElement.classList.add("azkar-card");
    azkarElement.innerHTML = `
      <div class="arabic">${azkar.arabic}</div>
      <div class="transliteration">${azkar.transliteration}</div>
      <div class="translation">${azkar.translation}</div>
    `;
    container.appendChild(azkarElement);
  });
});
