/* ===========================
   SOULHAPPY COLLECTIVE — JS
   =========================== */

// ── Mobile nav toggle ──────────────────────────────────────
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  if (nav) nav.classList.toggle('open');
}

// ── Search bar toggle ──────────────────────────────────────
function toggleSearch() {
  const bar = document.getElementById('search-bar');
  if (!bar) return;
  const isHidden = bar.style.display === 'none';
  bar.style.display = isHidden ? 'block' : 'none';
  if (isHidden) {
    const input = document.getElementById('search-input');
    if (input) input.focus();
  }
}

// ── Product search filter ──────────────────────────────────
function filterProducts(query) {
  const cards = document.querySelectorAll('.product-card');
  const q = query.toLowerCase().trim();
  cards.forEach(card => {
    const name = (card.dataset.name || '').toLowerCase();
    card.style.display = (!q || name.includes(q)) ? '' : 'none';
  });
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

// ── Cart (simple in-memory) ────────────────────────────────
let cartCount = 0;

function addToCart(card) {
  const name = card.dataset.name || 'Card';
  cartCount++;

  const badge = document.getElementById('cart-count');
  if (badge) {
    badge.textContent = cartCount;
    badge.style.display = 'flex';
  }

  showToast(`Added "${name}" to cart`);
}

// ── Subscribe form ─────────────────────────────────────────
function handleSubscribe(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const email = input ? input.value.trim() : '';
  if (!email) return;

  // Replace with your email service endpoint (e.g. Mailchimp, Klaviyo, Cloudflare Worker)
  showToast('Thanks for subscribing! 🌻');
  if (input) input.value = '';
}

// ── Contact form ───────────────────────────────────────────
function handleContact(e) {
  e.preventDefault();
  const form = e.target;

  // Replace with your form backend (e.g. Formspree, Cloudflare Pages Functions)
  showToast('Message sent! We\'ll get back to you soon.');
  form.reset();
}

// ── Close mobile nav on outside click ─────────────────────
document.addEventListener('click', function (e) {
  const nav = document.getElementById('mobile-nav');
  const hamburger = document.querySelector('.hamburger');
  if (nav && hamburger && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});
