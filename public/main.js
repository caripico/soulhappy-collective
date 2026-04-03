/* ===========================
   SOULHAPPY COLLECTIVE — JS
   =========================== */

// ── Mobile nav toggle ──────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}

// ── Collection pill filter ─────────────────────────────────
function filterByCollection(pill) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('pill--active'));
  pill.classList.add('pill--active');

  const collection = pill.dataset.collection;
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.display = (collection === 'all' || card.dataset.collection === collection) ? '' : 'none';
  });
}

// ── Toast helper ───────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Cart (localStorage) ────────────────────────────────────
function getCartCount() {
  return parseInt(localStorage.getItem('cartCount') || '0', 10);
}

function setCartCount(n) {
  localStorage.setItem('cartCount', n);
  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = n;
    badge.style.display = n > 0 ? 'flex' : 'none';
  }
}

function addToCart(name) {
  setCartCount(getCartCount() + 1);
  showToast(`Added "${name}" to cart`);
}

// ── Init cart badge on page load ───────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  setCartCount(getCartCount());
});

// ── Subscribe form ─────────────────────────────────────────
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const email = input ? input.value.trim() : '';
  if (!email) return;
  showToast('Thanks for subscribing!');
  if (input) input.value = '';
}

// ── Contact form ───────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  showToast("Message sent! We'll get back to you soon.");
  e.target.reset();
}

// ── Close mobile nav on outside click ─────────────────────
document.addEventListener('click', function (e) {
  const nav = document.getElementById('mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});
