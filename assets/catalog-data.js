const catalogData = {
  beef: [
    ["Beef Honeycomb (Mondongo)", 10.99, "beef-honeycomb-mondongo", true],
    ["Brisket", 45.35, "brisket", true],
    ["C.Roll / Ribeye", 20.54, "c-roll-ribeye", true],
    ["Chateau Briand", 13.20, "chateau-briand", true],
    ["Costillar del Centro", 150.00, "costillar-del-centro", false],
    ["Entraña Arg", 37.60, "entrana-arg", true],
    ["Eye Round", 27.67, "eye-round", true],
    ["Flap Meat Arg", 57.15, "flap-meat-arg", true],
    ["Ground Beef Premium", 11.54, "ground-beef-premium", true],
    ["Heart (Corazón)", 9.39, "heart-corazon", true],
    ["Inside", 82.39, "inside", true],
    ["Kosher Ribeye (Frozen)", 189.94, "kosher-ribeye-frozen", false],
    ["Liver (Hígado de Res)", 4.39, "liver-higado-de-res", true],
    ["Marroc Estuche 6 Un", 6.84, "marroc-estuche-6-un", true],
    ["Marrow Bones", 9.06, "marrow-bones", true],
    ["Marucha", 13.03, "marucha", true],
    ["Milanesas de Carne", 27.47, "milanesas-de-carne", true],
    ["Ossobuco", 7.03, "ossobuco", true],
    ["Outside Skirt USA", 52.77, "outside-skirt-usa", true],
    ["Oxtail (Frozen)", 27.58, "oxtail-frozen", true],
    ["Recorte de Paleta", 9.60, "recorte-de-paleta", true],
    ["Ribeye Selection", 14.84, "ribeye-selection", true],
    ["Ribeye with Bone (Frozen)", 30.50, "ribeye-with-bone-frozen", true],
    ["Rose Meat (Frozen)", 51.24, "rose-meat-frozen", true],
    ["Rump Cap / Picanha", 32.69, "rump-cap-picanha", true],
    ["Short Ribs (Banderita)", 36.26, "short-ribs-banderita", true],
    ["Short Ribs (Frozen)", 45.94, "short-ribs-frozen", true],
    ["Small Intestine (Frozen)", 4.94, "small-intestine-frozen", true],
    ["Striploin NY", 21.43, "striploin-ny", true],
    ["Striploin NY Selection", 13.19, "striploin-ny-selection", true],
    ["Sweetbread (Molleja)", 14.28, "sweetbread-molleja", true],
    ["T-Bone", 26.39, "t-bone", true],
    ["Tenderloin", 77.40, "tenderloin", true],
    ["Thin Flank Entero (Vacío)", 131.86, "thin-flank-entero-vacio", false],
    ["Tomahawk", 48.38, "tomahawk", true],
    ["Tongue (Frozen)", 32.31, "tongue-frozen", true],
    ["Tri-Tip", 27.23, "tri-tip", true]
  ],
  chicken: [
    ["Chicken Breast All Natural", 8.17, "chicken-breast-all-natural", true],
    ["Chicken Leg All Natural", 4.37, "chicken-leg-all-natural", true],
    ["Empanadas de Pollo x 6", 10.98, "empanadas-de-pollo-x-6", true],
    ["Milanesas de Pollo", 24.73, "milanesas-de-pollo", true]
  ],
  pork: [
    ["Burger Pork", 7.91, "burger-pork", true],
    ["Milanesas Pork", 21.98, "milanesas-pork", true],
    ["Pork Baby Ribs", 13.73, "pork-baby-ribs", true],
    ["Pork Chuck FR / Bondiola (Frozen)", 13.83, "pork-chuck-fr-bondiola-frozen", true],
    ["Pork Tender", 9.33, "pork-tender", true],
    ["Rose Meat Pork (Frozen)", 13.18, "rose-meat-pork-frozen", true]
  ],
  lamb: [
    ["Burger Lamb", 7.91, "burger-lamb", true],
    ["Lamb Leg", 56.03, "lamb-leg", true],
    ["Lamb Leg N.Z. (W/Bone)", 48.51, "lamb-leg-n-z-w-bone", false],
    ["Lamb Rack", 39.27, "lamb-rack", true]
  ],
  grill: [
    ["Burger Chori", 7.91, "burger-chori", true],
    ["Burger Original", 7.91, "burger-original", true],
    ["Chorizo Argentino", 5.11, "chorizo-argentino", true],
    ["Chorizo Bombón Argentino", 5.11, "chorizo-bombon-argentino", true],
    ["Empanadas de Carne x 6", 10.98, "empanadas-de-carne-x-6", true],
    ["Empanadas de Espinaca y Queso x 6", 10.98, "empanadas-de-espinaca-y-queso-x-6", true],
    ["Empanadas de Jamón y Queso x 6", 10.98, "empanadas-de-jamon-y-queso-x-6", true],
    ["Morcilla Argentina", 5.11, "morcilla-argentina", true],
    ["Morcilla Bombón Argentina", 5.27, "morcilla-bombon-argentina", true],
    ["Provoleta Santa Rosa", 12.53, "provoleta-santa-rosa", true],
    ["Salchicha Parrillera", 7.15, "salchicha-parrillera", true]
  ],
  pantry: [
    ["Cachafaz Alfajor Choc Blanco 6 Uni", 15.62, "cachafaz-alfajor-choc-blanco-6-uni", true],
    ["Cachafaz Alfajor Choc Negro 6 Uni", 15.62, "cachafaz-alfajor-choc-negro-6-uni", true],
    ["Cachafaz Alfajor Maicena 6 Uni", 15.62, "cachafaz-alfajor-maicena-6-uni", true],
    ["Cachafaz Alfajor Mousse 6 Uni", 15.62, "cachafaz-alfajor-mousse-6-uni", true],
    ["Cachafaz Conitos 6 Uni", 15.62, "cachafaz-conitos-6-uni", true],
    ["Cachafaz Dulce de Leche", 9.85, "cachafaz-dulce-de-leche", true],
    ["Dulce de Batata - La Campagnola", 8.40, "dulce-de-batata-la-campagnola", true],
    ["Maldon Sea Salt Flakes 8.5 Oz", 11.20, "maldon-sea-salt-flakes-8-5-oz", false]
  ]
};

function buildCard(name, price, slug, inStock){
  const img = slug
    ? `<img src="assets/images/products/${slug}.jpg" alt="${name}" loading="lazy" class="product-img">`
    : `<div class="product-cut"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-5 4-9 9-9s7 4 5 8-8 7-12 5-2-4-2-4z"></path></svg></div>`;
  const stockBadge = inStock === false
    ? `<span class="stock-badge out" data-i18n="stock_out">Out of stock</span>`
    : (inStock === true ? `<span class="stock-badge in" data-i18n="stock_in">In stock</span>` : '');
  const cardClass = inStock === false ? 'product-card out-of-stock fade-in' : 'product-card fade-in';
  return `<div class="${cardClass}">
    ${img}
    ${stockBadge}
    <span class="product-name">${name}</span>
    <span class="product-price">$${price.toFixed(2)}<span class="product-unit" data-i18n="unit_lb"> /lb</span></span>
  </div>`;
}

function renderCatalog(){
  Object.keys(catalogData).forEach(cat=>{
    const el = document.getElementById('grid-'+cat);
    if(!el) return;
    el.innerHTML = catalogData[cat].map(([name,price,slug,inStock])=>buildCard(name,price,slug,inStock)).join('');
  });
}

function renderBestSellers(targetId, items){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = items.map(([name,price,slug,inStock])=>buildCard(name,price,slug,inStock)).join('');
}

const CATALOG_PRICE_MIN = 4;
const CATALOG_PRICE_MAX = 190;

const catalogState = { category:'beef', min:CATALOG_PRICE_MIN, max:CATALOG_PRICE_MAX, sort:'default', stock:'all' };

function renderCatalogTab(){
  const el = document.getElementById('catalog-grid');
  if(!el) return;
  let items = catalogData[catalogState.category].slice();
  items = items.filter(([,price])=> price >= catalogState.min && price <= catalogState.max);

  if(catalogState.stock === 'in') items = items.filter(([,,,inStock])=> inStock !== false);
  else if(catalogState.stock === 'out') items = items.filter(([,,,inStock])=> inStock === false);

  if(catalogState.sort === 'price-asc') items.sort((a,b)=>a[1]-b[1]);
  else if(catalogState.sort === 'price-desc') items.sort((a,b)=>b[1]-a[1]);
  else if(catalogState.sort === 'name-asc') items.sort((a,b)=>a[0].localeCompare(b[0]));

  el.innerHTML = items.length
    ? items.map(([name,price,slug,inStock])=>buildCard(name,price,slug,inStock)).join('')
    : '<p style="color:var(--muted);" data-i18n="no_results">No products match these filters.</p>';

  const counter = document.getElementById('items-count');
  if(counter) counter.textContent = items.length + (window.tcItemsLabel || ' items');

  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.cat === catalogState.category);
  });
  document.querySelectorAll('.stock-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.stock === catalogState.stock);
  });
  document.querySelectorAll('.sort-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.sort === catalogState.sort);
  });

  if(window.applyI18nTo) window.applyI18nTo(el);
}

function setCatalogTab(cat){
  catalogState.category = cat;
  renderCatalogTab();
}

function setCatalogSort(sort){
  catalogState.sort = sort;
  renderCatalogTab();
}

function setCatalogStock(stock){
  catalogState.stock = stock;
  renderCatalogTab();
}

function setCatalogPriceRange(min, max){
  catalogState.min = min;
  catalogState.max = max;
  renderCatalogTab();
}

function togglePricePanel(){
  const panel = document.getElementById('price-panel');
  const toggle = document.getElementById('price-toggle');
  const isOpen = panel.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
}

function initPriceRangeSlider(){
  const minInput = document.getElementById('price-min');
  const maxInput = document.getElementById('price-max');
  const display = document.getElementById('price-range-display');
  const fill = document.getElementById('range-track-fill');
  const toggle = document.getElementById('price-toggle');
  if(!minInput || !maxInput) return;

  function update(){
    let minVal = parseInt(minInput.value, 10);
    let maxVal = parseInt(maxInput.value, 10);
    if(minVal > maxVal - 2){ minVal = maxVal - 2; minInput.value = minVal; }
    const lo = CATALOG_PRICE_MIN, hi = CATALOG_PRICE_MAX;
    const pctMin = ((minVal - lo) / (hi - lo)) * 100;
    const pctMax = ((maxVal - lo) / (hi - lo)) * 100;
    if(fill){ fill.style.left = pctMin + '%'; fill.style.width = (pctMax - pctMin) + '%'; }
    if(display) display.textContent = `$${minVal} – $${maxVal}`;
    if(toggle) toggle.classList.toggle('has-filter', minVal > lo || maxVal < hi);
    setCatalogPriceRange(minVal, maxVal);
  }

  minInput.addEventListener('input', update);
  maxInput.addEventListener('input', update);
  update();
}
