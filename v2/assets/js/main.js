"use strict";

document.documentElement.classList.add("js");

const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-navigation]");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.toggleAttribute("data-open", !isOpen);
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const gallery = document.querySelector("[data-gallery]");

if (gallery && Array.isArray(window.NGORONGORO_ARTWORKS)) {
  gallery.innerHTML = window.NGORONGORO_ARTWORKS.map((artwork) => {
    const media = artwork.image
      ? `<img src="${artwork.image}" alt="${artwork.alt}" loading="lazy">`
      : `<div class="artwork-placeholder" aria-label="${artwork.alt}">
          <span>Artwork ${artwork.number}</span>
        </div>`;

    const action = artwork.purchaseUrl
      ? `<a class="text-link" href="${artwork.purchaseUrl}" target="_blank" rel="noopener noreferrer">
          Purchase <span aria-hidden="true">↗</span>
        </a>`
      : `<span class="artwork-status">Coming soon</span>`;

    return `
      <article class="artwork-card">
        <div class="artwork-media">${media}</div>
        <div class="artwork-info">
          <p class="artwork-number">${artwork.number}</p>
          <div>
            <h2>${artwork.titleEn}</h2>
            <p>${artwork.titleKo}</p>
          </div>
          <p>${artwork.year} · ${artwork.size}</p>
          ${action}
        </div>
      </article>
    `;
  }).join("");
}
