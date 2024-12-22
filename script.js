// Daftar pesan untuk pop-up
let currentMessageIndex = 0;
const messages = [
  "Happy Bunda Wardah's Day! To a beautiful woman, who is as delicate and as lovely as a flower.",
  "Bunda, engkau adalah sosok yang luar biasa. Terima kasih telah membimbing kami dengan penuh kasih sayang!",
  "Bunda, terima kasih atas semua cinta dan dukungan yang telah engkau berikan.",
  "Selamat Hari Ibu! Bunda adalah pahlawan dalam hidup kami!",
  "Bunda, Engkau adalah yang terbaik! Terima kasih telah selalu ada untuk kami."
];

// Fungsi untuk menampilkan pop-up
function showPopup() {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  const closeBtn = document.getElementById('close-btn');
  
  currentMessageIndex = 0; // Reset ke pesan pertama
  popupMessage.innerText = messages[currentMessageIndex];
  popup.style.display = "flex";
  closeBtn.style.display = "none"; // Sembunyikan tombol close di awal
}

// Fungsi untuk menutup pop-up
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = "none";
}

// Fungsi untuk menampilkan pesan berikutnya di pop-up
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
    alert("Tidak ada pesan lagi!");
  }
}

// Fungsi untuk mengatur audio autoplay
document.addEventListener('DOMContentLoaded', function () {
  var music = document.getElementById('background-music');
  
  // Memastikan audio tidak mute dan memulai secara otomatis
  music.muted = false; // Menghilangkan mute
  music.play().catch(() => {
    // Jika autoplay gagal, menunggu interaksi pengguna
    document.body.addEventListener('click', function () {
      music.play();
    });
  });
});

// Fungsi untuk menampilkan halaman utama setelah splash screen
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none'; // Sembunyikan splash screen
    document.getElementById('main-content').style.display = 'block'; // Tampilkan konten utama
  }, 3000); // Animasi selesai dalam 3 detik
});