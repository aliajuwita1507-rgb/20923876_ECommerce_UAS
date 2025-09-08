/* ================= SLIDER ================= */
let currentSlide = 0;
const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (!slides.length) return;
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if(dots[i]) dots[i].classList.remove("active");
  });
  slides[index].classList.add("active");
  if(dots[index]) dots[index].classList.add("active");
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-slide setiap 4 detik
if(slides.length) showSlide(0);
setInterval(nextSlide, 4000);

// Klik dot untuk slide
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => showSlide(idx));
});

/* ================= CART ================= */
function addToCart(name, price, option = "") {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Nama produk + opsi
  let fullName = option ? `${name} (${option})` : name;

  // Cek apakah item sudah ada
  let found = cart.find(item => item.name === fullName && item.price === price);
  if (found) {
    found.qty += 1;
  } else {
    cart.push({ name: fullName, price, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(fullName + " ditambahkan ke keranjang!");
}

function beliSekarang(name, price, option = "") {
  addToCart(name, price, option);
  window.location.href = "cart.html";
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = document.getElementById('cartCount');
  if (cartCount) cartCount.textContent = cart.reduce((acc, item) => acc + item.qty, 0);
}

// Jalankan saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', updateCartCount);

/* ================= WARNA PILIHAN ================= */
let warnaSatin = "", warnaBoneka = "", warnaKertas = "", snack = "", warnaFlowers = "";

// Satin
function setWarnaSatin(val) {
  warnaSatin = val;
  const el = document.getElementById("warnaSatinVal");
  if(el) el.innerText = val;
}

// Boneka
function setWarnaBoneka(val) {
  warnaBoneka = val;
  const el = document.getElementById("warnaBonekaVal");
  if(el) el.innerText = val;
}

// Kertas
function setWarnaKertas(val) {
  warnaKertas = val;
  const el = document.getElementById("warnaKertasVal");
  if(el) el.innerText = val;
}

// Snack
function setSnack(val) {
  snack = val;
  const el = document.getElementById("snackVal");
  if(el) el.innerText = val;
}

// Flowers
function setFlowers(val) {
  warnaFlowers = val;
  const el = document.getElementById("flowersVal");
  if(el) el.innerText = val;
}

/* ================= TAMBAH KE KERANJANG SPESIFIK ================= */
function addSatinToCart() {
  if(!warnaSatin || !warnaKertas){
    alert("Pilih warna satin dan warna kertas terlebih dahulu!");
    return;
  }
  addToCart("Bouquet Satin", 100000, `Satin: ${warnaSatin}, Kertas: ${warnaKertas}`);
}

function addBonekaToCart() {
  if(!warnaBoneka || !warnaKertas){
    alert("Pilih warna boneka dan warna kertas terlebih dahulu!");
    return;
  }
  addToCart("Bouquet Boneka", 80000, `Boneka: ${warnaBoneka}, Kertas: ${warnaKertas}`);
}

function addSnackToCart() {
  if(!snack || !warnaKertas){
    alert("Pilih snack dan warna kertas terlebih dahulu!");
    return;
  }
  addToCart("Bouquet Snack", 55000, `Snack: ${snack}, Kertas: ${warnaKertas}`);
}

function addFlowersToCart() {
  if(!warnaFlowers || !warnaKertas){
    alert("Pilih jenis Flowers dan warna kertas terlebih dahulu!");
    return;
  }
  addToCart("Bouquet Flowers", 80000, `Flowers: ${warnaFlowers}, Kertas: ${warnaKertas}`);
}

/* ================= BELI SEKARANG SPESIFIK ================= */
function beliSatinSekarang() {
  if(!warnaSatin || !warnaKertas){
    alert("Pilih warna satin dan warna kertas terlebih dahulu!");
    return;
  }
  beliSekarang("Bouquet Satin", 100000, `Satin: ${warnaSatin}, Kertas: ${warnaKertas}`);
}

function beliBonekaSekarang() {
  if(!warnaBoneka || !warnaKertas){
    alert("Pilih warna boneka dan warna kertas terlebih dahulu!");
    return;
  }
  beliSekarang("Bouquet Boneka", 80000, `Boneka: ${warnaBoneka}, Kertas: ${warnaKertas}`);
}

function beliSnackSekarang() {
  if(!snack|| !warnaKertas){
    alert("Pilih snack dan warna kertas terlebih dahulu!");
    return;
  }
  beliSekarang("Bouquet Snack", 55000, `Snack: ${snack}, Kertas: ${warnaKertas}`);
}

function beliFlowersSekarang() {
  if(!warnaFlowers || !warnaKertas){
    alert("Pilih jenis Flowers dan warna kertas terlebih dahulu!");
    return;
  }
  beliSekarang("Bouquet Flowers", 80000, `Flowers: ${warnaFlowers}, Kertas: ${warnaKertas}`);
}
// Money (kosongan, pilih kertas saja)
function setWarnaMoney(val) {
  warnaMoney = val;
  const el = document.getElementById("warnaMoneyVal");
  if(el) el.innerText = val;
}

/* ================= TAMBAH KE KERANJANG SPESIFIK ================= */

function addMoneyToCart() {
  if(!warnaMoney || !warnaKertas){
    alert("Pilih warna money (opsi) dan warna kertas terlebih dahulu!");
    return;
  }
  addToCart("Bouquet Money", 50000, `Money: Kosongan, Kertas: ${warnaKertas}`);
}

/* ================= BELI SEKARANG SPESIFIK ================= */


function beliMoneySekarang() {
  if(!warnaMoney || !warnaKertas){
    alert("Pilih warna money (opsi) dan warna kertas terlebih dahulu!");
    return;
  }
  beliSekarang("Bouquet Money", 50000, `Money: Kosongan, Kertas: ${warnaKertas}`);
} 
const tombol = document.querySelector('.add-cart');
tombol.addEventListener('click', function() {
    // tambahkan ke keranjang
});

tombol.addEventListener('touchstart', function() {
    // tambahkan ke keranjang
});
