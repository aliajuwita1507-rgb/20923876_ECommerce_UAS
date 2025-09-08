// cart.js

document.addEventListener("DOMContentLoaded", function () {
  updateCartDisplay();

  // Handle form checkout
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckout);
  }
});

// Ambil cart dari localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Simpan cart ke localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Tambah produk ke cart
function addToCart(name, price, option = "") {
  let cart = getCart();
  let existing = cart.find(
    (item) => item.name === name && item.option === option
  );

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1, option });
  }

  saveCart(cart);
  updateCartCount();
  alert("Produk ditambahkan ke keranjang!");
}

// Update tampilan jumlah di navbar
function updateCartCount() {
  let cart = getCart();
  let totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  let cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = totalQty;
  }
}

// Tampilkan isi cart di cart.html
function updateCartDisplay() {
  let cart = getCart();
  let cartList = document.getElementById("cart-list");
  let totalHargaEl = document.getElementById("total-harga");

  if (!cartList || !totalHargaEl) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    let optionText = item.option ? ` (${item.option})` : "";

    li.innerHTML = `
      <strong>${item.name}${optionText}</strong> - Rp ${item.price.toLocaleString()} x ${item.qty}
      <button onclick="removeFromCart(${index})">Hapus</button>
    `;

    cartList.appendChild(li);
    total += item.price * item.qty;
  });

  totalHargaEl.textContent = "Total: Rp " + total.toLocaleString();
  updateCartCount();
}

// Hapus item berdasarkan index
function removeFromCart(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartDisplay();
}

// Kosongkan keranjang
function clearCart() {
  localStorage.removeItem("cart");
  updateCartDisplay();
}

// Handle checkout
function handleCheckout(e) {
  e.preventDefault();
  let cart = getCart();
  let metode = document.getElementById("metode").value;
  let msg = document.getElementById("checkout-msg");

  if (cart.length === 0) {
    msg.textContent = "Keranjang kosong, tidak bisa checkout!";
    msg.style.color = "red";
    return;
  }

  if (!metode) {
    msg.textContent = "Pilih metode pembayaran terlebih dahulu!";
    msg.style.color = "red";
    return;
  }

  // simulasi checkout sukses
  msg.textContent = `Checkout berhasil! Metode: ${metode}`;
  msg.style.color = "green";

  // kosongkan cart setelah checkout
  clearCart();
}
