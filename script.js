/* File: script.js */
let currentMessageIndex = 0;
const messages = [
  "Happy Bunda Wardah's Day To a beautiful woman, who is as delicate and as lovely as a flower",
  "Bunda, engkau adalah sosok yang luar biasa. Terima kasih telah membimbing kami dengan penuh kasih sayang!",
  "Bunda, terima kasih atas semua cinta dan dukungan yang telah engkau berikan.",
  "Selamat Hari Ibu! Bunda adalah pahlawan dalam hidup kami!",
  "Bunda, Engkau adalah yang terbaik! Terima kasih telah selalu ada untuk kami."
];

function showPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  const closeBtn = document.getElementById('close-btn');
  
  currentMessageIndex = 0; // Reset ke pesan pertama
  popupMessage.innerText = messages[currentMessageIndex];
  popup.style.display = "flex";
  closeBtn.style.display = "none"; // Sembunyikan tombol close di awal
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = "none";
}

function nextMessage() {
  const popupMessage = document.getElementById('popup-message');
  const closeBtn = document.getElementById('close-btn');
  
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    popupMessage.innerText = messages[currentMessageIndex];
    
    // Jika pesan terakhir, tampilkan tombol close
    if (currentMessageIndex === messages.length - 1) {
      closeBtn.style.display = "inline-block";
    }
  } else {
    alert("Tidak ada pesan lagi! 😊");
  }
document.addEventListener('DOMContentLoaded', function () {
  var music = document.getElementById('background-music');
  
  // Memastikan audio langsung diputar dan tidak mute
  music.muted = false; // Menghilangkan mute
  music.play();         // Memainkan audio

  // Memastikan audio dapat dimulai tanpa interaksi pengguna (khusus iOS/Android)
  document.body.addEventListener('click', function () {
    music.play();
  });
});
}
