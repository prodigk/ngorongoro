"use strict";

document.documentElement.classList.add("js");

const artworks = [
  {
    src: "./assets/images/hero/desktop/artwork-01.png",
    alt: "응고롱고로 흰 토끼 일러스트",
  },
  {
    src: "./assets/images/hero/desktop/artwork-02.png",
    alt: "응고롱고로 펭귄 일러스트",
  },
  {
    src: "./assets/images/hero/desktop/artwork-03.png",
    alt: "응고롱고로 졸린 토끼 일러스트",
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
}
