let warnaSatin = "";
let warnaBoneka = "";
let warnaKertas = "";
let snack = "";
let warnaFlowers = "";
let warnaMoney = ""; // Tambahan untuk bouquet money

/* ================= SET PILIHAN ================= */
function setWarnaSatin(val) {
  warnaSatin = val;
  const el = document.getElementById("warnaSatinVal");
  if (el) el.textContent = val;
}

function setWarnaBoneka(val) {
  warnaBoneka = val;
  const el = document.getElementById("warnaBonekaVal");
  if (el) el.textContent = val;
}

function setWarnaKertas(val) {
  warnaKertas = val;
  const el = document.getElementById("warnaKertasVal");
  if (el) el.textContent = val;
}

function setSnack(val) {
  snack = val;
  const el = document.getElementById("snackVal");
  if (el) el.textContent = val;
}

function setFlowers(val) {
  warnaFlowers = val;
  const el = document.getElementById("flowersVal");
  if (el) el.textContent = val;
}

function setWarnaMoney(val) {
  warnaMoney = val;
  const el = document.getElementById("warnaMoneyVal");
  if (el) el.textContent = val;
}

/* ================= TAMBAH KE KERANJANG ================= */
function addSatinToCart() {
  if (!warnaSatin || !warnaKertas)
    return alert("Pilih warna satin dan kertas terlebih dahulu!");
  addToCart("Bouquet Satin", 100000, `Satin: ${warnaSatin}, Kertas: ${warnaKertas}`);
}

function addBonekaToCart() {
  if (!warnaBoneka || !warnaKertas)
    return alert("Pilih boneka dan kertas terlebih dahulu!");
  addToCart("Bouquet Boneka", 80000, `Boneka: ${warnaBoneka}, Kertas: ${warnaKertas}`);
}

function addSnackToCart() {
  if (!snack || !warnaKertas)
    return alert("Pilih snack dan kertas terlebih dahulu!");
  addToCart("Bouquet Snack", 55000, `Snack: ${snack}, Kertas: ${warnaKertas}`);
}

function addFlowersToCart() {
  if (!warnaFlowers || !warnaKertas)
    return alert("Pilih flowers dan kertas terlebih dahulu!");
  addToCart("Bouquet Flowers", 80000, `Flowers: ${warnaFlowers}, Kertas: ${warnaKertas}`);
}

function addMoneyToCart() {
  if (!warnaKertas)
    return alert("Pilih warna kertas terlebih dahulu untuk Money!");
  addToCart("Bouquet Money", 50000, `Money: Kosongan, Kertas: ${warnaKertas}`);
}

/* ================= BELI SEKARANG ================= */
function beliSekarang(name, price, option) {
  addToCart(name, price, option);
  window.location.href = "cart.html";
}

function beliSatinSekarang() {
  if (!warnaSatin || !warnaKertas)
    return alert("Pilih warna satin dan kertas terlebih dahulu!");
  beliSekarang("Bouquet Satin", 100000, `Satin: ${warnaSatin}, Kertas: ${warnaKertas}`);
}

function beliBonekaSekarang() {
  if (!warnaBoneka || !warnaKertas)
    return alert("Pilih boneka dan kertas terlebih dahulu!");
  beliSekarang("Bouquet Boneka", 80000, `Boneka: ${warnaBoneka}, Kertas: ${warnaKertas}`);
}

function beliSnackSekarang() {
  if (!snack || !warnaKertas)
    return alert("Pilih snack dan kertas terlebih dahulu!");
  beliSekarang("Bouquet Snack", 55000, `Snack: ${snack}, Kertas: ${warnaKertas}`);
}

function beliFlowersSekarang() {
  if (!warnaFlowers || !warnaKertas)
    return alert("Pilih flowers dan kertas terlebih dahulu!");
  beliSekarang("Bouquet Flowers", 80000, `Flowers: ${warnaFlowers}, Kertas: ${warnaKertas}`);
}

function beliMoneySekarang() {
  if (!warnaKertas)
    return alert("Pilih warna kertas terlebih dahulu untuk Money!");
  beliSekarang("Bouquet Money", 50000, `Kertas: ${warnaKertas}`);
}
