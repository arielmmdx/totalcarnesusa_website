function getCart(){
  try{ return JSON.parse(localStorage.getItem('tc_cart') || '[]'); }
  catch(e){ return []; }
}

function saveCart(cart){
  localStorage.setItem('tc_cart', JSON.stringify(cart));
  renderCartBadge();
}

function addToCart(slug, name, price, qty){
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(item=>item.slug === slug);
  if(existing) existing.qty += qty;
  else cart.push({ slug, name, price, qty });
  saveCart(cart);
  renderCartDrawer();
  openCart();
}

function removeFromCart(slug){
  const cart = getCart().filter(item=>item.slug !== slug);
  saveCart(cart);
  renderCartDrawer();
}

function updateCartQty(slug, qty){
  const cart = getCart();
  const item = cart.find(i=>i.slug === slug);
  if(!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
  renderCartDrawer();
}

function cartCount(){
  return getCart().reduce((sum,item)=>sum+item.qty, 0);
}

function cartTotal(){
  return getCart().reduce((sum,item)=>sum+item.qty*item.price, 0);
}

function renderCartBadge(){
  const badge = document.getElementById('cart-badge');
  if(!badge) return;
  const count = cartCount();
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function renderCartDrawer(){
  const body = document.getElementById('cart-drawer-body');
  const totalEl = document.getElementById('cart-drawer-total');
  if(!body) return;
  const cart = getCart();
  if(!cart.length){
    body.innerHTML = `<p class="cart-empty" data-i18n="cart_empty">Your cart is empty.</p>`;
  } else {
    body.innerHTML = cart.map(item=>`
      <div class="cart-line">
        <div class="cart-line-info">
          <span class="cart-line-name">${item.name}</span>
          <span class="cart-line-price">$${item.price.toFixed(2)} /lb</span>
        </div>
        <div class="cart-line-controls">
          <button onclick="updateCartQty('${item.slug}', ${item.qty - 1})">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty('${item.slug}', ${item.qty + 1})">+</button>
          <button class="cart-remove" onclick="removeFromCart('${item.slug}')" aria-label="Remove">✕</button>
        </div>
      </div>
    `).join('');
  }
  if(totalEl) totalEl.textContent = '$' + cartTotal().toFixed(2);
  if(window.applyI18nTo) window.applyI18nTo(body);
}

function openCart(){
  const drawer = document.getElementById('cart-drawer');
  if(drawer) drawer.classList.add('open');
  renderCartDrawer();
}

function closeCart(){
  const drawer = document.getElementById('cart-drawer');
  if(drawer) drawer.classList.remove('open');
}

function toggleCart(){
  const drawer = document.getElementById('cart-drawer');
  if(!drawer) return;
  if(drawer.classList.contains('open')) closeCart();
  else openCart();
}

function checkoutCart(){
  const cart = getCart();
  if(!cart.length) return;
  const lines = cart.map(item=>`${item.qty} x ${item.name} — $${(item.qty*item.price).toFixed(2)}`).join('\n');
  const summary = `${lines}\n\nTotal: $${cartTotal().toFixed(2)}`;
  sessionStorage.setItem('tc_cart_summary', summary);
  window.location.href = 'contacto.html?from=cart#order-form';
}

document.addEventListener('DOMContentLoaded', renderCartBadge);
