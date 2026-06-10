"use strict";

document.documentElement.classList.add("js");

const artworks = [
  {
    src: "./assets/images/hero/desktop/artwork-01.png",
    alt: "응고롱고로 흰 토끼 일러스트",
    title: "Slow Rabbit",
    number: "001",
  },
  {
    src: "./assets/images/hero/desktop/artwork-02.png",
    alt: "응고롱고로 펭귄 일러스트",
    title: "Walking Together",
    number: "002",
  },
  {
    src: "./assets/images/hero/desktop/artwork-03.png",
    alt: "응고롱고로 졸린 토끼 일러스트",
    title: "A Quiet Nap",
    number: "003",
  },
];

const artworkFrame = document.querySelector("[data-random-artwork]");

if (artworkFrame) {
  const selectedArtwork =
    artworks[Math.floor(Math.random() * artworks.length)];
  const artworkImage = artworkFrame.querySelector("[data-artwork-image]");

  if (artworkImage) {
    artworkImage.src = selectedArtwork.src;
    artworkImage.alt = selectedArtwork.alt;
  }

  const artworkTitle = document.querySelector("[data-artwork-title]");
  const artworkNumber = document.querySelector("[data-artwork-number]");
  const artworkCount = artworkFrame.querySelector("figcaption span:last-child");

  if (artworkTitle) {
    artworkTitle.textContent = selectedArtwork.title;
  }

  if (artworkNumber) {
    artworkNumber.textContent = selectedArtwork.number;
  }

  if (artworkCount) {
    artworkCount.textContent = `${Number(selectedArtwork.number)} / ${artworks.length
      .toString()
      .padStart(2, "0")}`;
  }
}
