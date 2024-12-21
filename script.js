let currentMessageIndex = 0;
const messages = [
  "Bunda, engkau adalah sosok yang luar biasa. Terima kasih telah membimbing kami dengan penuh kasih sayang!",
  "Selamat Hari Ibu! Kamu adalah pahlawan dalam hidup kami!",
  "Bunda, terima kasih atas semua cinta dan dukungan yang engkau berikan. Kami sangat menghargainya!",
  "Selamat Hari Ibu! Semoga hari ini penuh kebahagiaan dan cinta!",
  "Bunda, kamu adalah yang terbaik! Terima kasih telah selalu ada untuk kami."
];

function playMusic() {
  var music = document.getElementById('background-music');
  music.play();
}

function showPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  
  currentMessageIndex = 0; // Reset ke pesan pertama
  popupMessage.innerText = messages[currentMessageIndex];
  popup.style.display = "flex";
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = "none";
}

function nextMessage() {
  const popupMessage = document.getElementById('popup-message');
  
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    popupMessage.innerText = messages[currentMessageIndex];
  } else {
    alert("Tidak ada pesan lagi! 😊");
  }
}
