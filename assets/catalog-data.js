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

const PRODUCT_NAMES_ES = {
  "beef-honeycomb-mondongo":"Mondongo (Panal de Res)",
  "brisket":"Pecho (Brisket)",
  "c-roll-ribeye":"Ojo de Bife (C.Roll)",
  "eye-round":"Bola de Lomo (Eye Round)",
  "flap-meat-arg":"Vacío Arg",
  "ground-beef-premium":"Carne Picada Premium",
  "heart-corazon":"Corazón de Res",
  "inside":"Carnaza de Cuadrada (Inside)",
  "kosher-ribeye-frozen":"Ojo de Bife Kosher (Congelado)",
  "liver-higado-de-res":"Hígado de Res",
  "marrow-bones":"Huesos con Médula",
  "ossobuco":"Osobuco",
  "outside-skirt-usa":"Vacío Real USA (Outside Skirt)",
  "oxtail-frozen":"Rabo de Res (Congelado)",
  "ribeye-selection":"Ojo de Bife Selección",
  "ribeye-with-bone-frozen":"Ojo de Bife con Hueso (Congelado)",
  "rose-meat-frozen":"Carne Rosé (Congelada)",
  "rump-cap-picanha":"Picanha (Colita de Cuadril)",
  "short-ribs-banderita":"Asado Banderita (Short Ribs)",
  "short-ribs-frozen":"Asado Tira (Congelado)",
  "small-intestine-frozen":"Tripa Gorda (Congelada)",
  "striploin-ny":"Bife de Chorizo (NY Strip)",
  "striploin-ny-selection":"Bife de Chorizo Selección",
  "sweetbread-molleja":"Molleja",
  "t-bone":"T-Bone (Bife con Hueso)",
  "tenderloin":"Lomo (Tenderloin)",
  "thin-flank-entero-vacio":"Vacío Entero",
  "tomahawk":"Tomahawk (Bife Ancho con Hueso)",
  "tongue-frozen":"Lengua (Congelada)",
  "tri-tip":"Tri-Tip (Punta de Cuadril)",
  "chicken-breast-all-natural":"Pechuga de Pollo Natural",
  "chicken-leg-all-natural":"Pata/Muslo de Pollo Natural",
  "burger-pork":"Hamburguesa de Cerdo",
  "milanesas-pork":"Milanesas de Cerdo",
  "pork-baby-ribs":"Costillas de Cerdo (Baby Ribs)",
  "pork-chuck-fr-bondiola-frozen":"Bondiola de Cerdo (Congelada)",
  "pork-tender":"Solomillo de Cerdo",
  "rose-meat-pork-frozen":"Carne Rosé de Cerdo (Congelada)",
  "burger-lamb":"Hamburguesa de Cordero",
  "lamb-leg":"Pata de Cordero",
  "lamb-leg-n-z-w-bone":"Pata de Cordero N.Z. (con Hueso)",
  "lamb-rack":"Costillar de Cordero (Rack)",
  "burger-chori":"Hamburguesa de Chorizo",
  "burger-original":"Hamburguesa Original",
  "maldon-sea-salt-flakes-8-5-oz":"Sal Marina Maldon en Escamas 8.5 Oz"
};
function getDisplayName(name, slug){
  const lang = document.documentElement.getAttribute('lang') || 'en';
  if(lang === 'es' && slug && PRODUCT_NAMES_ES[slug]) return PRODUCT_NAMES_ES[slug];
  return name;
}

const KG_PER_LB = 0.453592;
function getPriceUnit(){
  return localStorage.getItem('tc_unit') || 'lb';
}
function formatPrice(price){
  const unit = getPriceUnit();
  const value = unit === 'kg' ? price / KG_PER_LB : price;
  return { amount: value.toFixed(2), unit };
}
function setPriceUnit(unit){
  localStorage.setItem('tc_unit', unit);
  document.querySelectorAll('.unit-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.unit === unit);
  });
  if(typeof renderCatalogTab === 'function' && document.getElementById('catalog-grid')) renderCatalogTab();
  if(typeof renderCatalog === 'function' && document.querySelector('[id^="grid-"]')) renderCatalog();
  document.querySelectorAll('[data-rerender-bestsellers]').forEach(el=>{
    if(typeof window.tcRerenderBestSellers === 'function') window.tcRerenderBestSellers();
  });
}
window.setPriceUnit = setPriceUnit;

const CATEGORY_LABELS = {
  beef:{en:'Beef',es:'Res'}, chicken:{en:'Chicken',es:'Pollo'}, pork:{en:'Pork',es:'Cerdo'},
  lamb:{en:'Lamb',es:'Cordero'}, grill:{en:'Grill & Prepared',es:'Parrilla y preparados'},
  pantry:{en:'Pantry',es:'Almacén'}
};
function getCategoryLabel(key){
  const lang = document.documentElement.getAttribute('lang') || 'en';
  return (CATEGORY_LABELS[key] && CATEGORY_LABELS[key][lang]) || key;
}

function getAllProducts(){
  const all = [];
  Object.keys(catalogData).forEach(cat=>{
    catalogData[cat].forEach(item=> all.push([...item, cat]));
  });
  return all;
}

function findProductBySlug(slug){
  for(const cat of Object.keys(catalogData)){
    const found = catalogData[cat].find(item=>item[2] === slug);
    if(found) return { name:found[0], price:found[1], slug:found[2], inStock:found[3], category:cat };
  }
  return null;
}

function buildCard(name, price, slug, inStock, categoryKey){
  const displayName = getDisplayName(name, slug);
  const img = slug
    ? `<img src="assets/images/products/${slug}.jpg" alt="${displayName}" loading="lazy" class="product-img">`
    : `<div class="product-cut"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-5 4-9 9-9s7 4 5 8-8 7-12 5-2-4-2-4z"></path></svg></div>`;
  const stockBadge = inStock === false
    ? `<span class="stock-badge out" data-i18n="stock_out">Out of stock</span>`
    : (inStock === true ? `<span class="stock-badge in" data-i18n="stock_in">In stock</span>` : '');
  const categoryTag = categoryKey ? `<span class="category-tag">${getCategoryLabel(categoryKey)}</span>` : '';
  const cardClass = inStock === false ? 'product-card out-of-stock fade-in' : 'product-card fade-in';
  const { amount, unit } = formatPrice(price);
  const inner = `${categoryTag}${img}${stockBadge}
    <span class="product-name">${displayName}</span>
    <span class="product-price">$${amount}<span class="product-unit">/${unit}</span></span>`;
  return slug
    ? `<a class="${cardClass}" href="product.html?slug=${slug}">${inner}</a>`
    : `<div class="${cardClass}">${inner}</div>`;
}

function renderCatalog(){
  Object.keys(catalogData).forEach(cat=>{
    const el = document.getElementById('grid-'+cat);
    if(!el) return;
    el.innerHTML = catalogData[cat].map(([name,price,slug,inStock])=>buildCard(name,price,slug,inStock)).join('');
    el.querySelectorAll('.fade-in').forEach(card=>card.classList.add('visible'));
  });
}

function renderBestSellers(targetId, items){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = items.map(([name,price,slug,inStock])=>buildCard(name,price,slug,inStock)).join('');
  el.querySelectorAll('.fade-in').forEach(card=>card.classList.add('visible'));
}

const CATALOG_PRICE_MIN = 4;
const CATALOG_PRICE_MAX = 190;

const catalogState = {
  category:'beef', min:CATALOG_PRICE_MIN, max:CATALOG_PRICE_MAX, sort:'default', stock:'all',
  mode:'category', query:''
};

function renderCatalogTab(){
  const el = document.getElementById('catalog-grid');
  if(!el) return;

  let items;
  if(catalogState.mode === 'search'){
    const q = catalogState.query.trim().toLowerCase();
    items = q ? getAllProducts().filter(([name,,slug])=>{
      const es = (PRODUCT_NAMES_ES[slug] || '').toLowerCase();
      return name.toLowerCase().includes(q) || es.includes(q);
    }) : [];
  } else if(catalogState.mode === 'all'){
    items = getAllProducts();
  } else {
    items = catalogData[catalogState.category].map(item=>[...item, catalogState.category]);
  }

  items = items.filter(([,price])=> price >= catalogState.min && price <= catalogState.max);
  if(catalogState.stock === 'in') items = items.filter(([,,,inStock])=> inStock !== false);
  else if(catalogState.stock === 'out') items = items.filter(([,,,inStock])=> inStock === false);

  if(catalogState.sort === 'price-asc') items.sort((a,b)=>a[1]-b[1]);
  else if(catalogState.sort === 'price-desc') items.sort((a,b)=>b[1]-a[1]);
  else if(catalogState.sort === 'name-asc') items.sort((a,b)=>a[0].localeCompare(b[0]));

  const showTag = catalogState.mode !== 'category';

  el.innerHTML = items.length
    ? items.map(([name,price,slug,inStock,cat])=>buildCard(name,price,slug,inStock, showTag?cat:undefined)).join('')
    : '<p style="color:var(--muted);" data-i18n="no_results">No products match these filters.</p>';

  el.querySelectorAll('.fade-in').forEach(card=>card.classList.add('visible'));

  const counter = document.getElementById('items-count');
  if(counter) counter.textContent = items.length + (window.tcItemsLabel || ' items');

  const tabRow = document.getElementById('catalog-tab-row');
  if(tabRow) tabRow.style.display = catalogState.mode === 'category' ? '' : 'none';

  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.classList.toggle('active', catalogState.mode === 'category' && btn.dataset.cat === catalogState.category);
  });
  document.querySelectorAll('.stock-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.stock === catalogState.stock);
  });
  document.querySelectorAll('.sort-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.sort === catalogState.sort);
  });
  const viewAllBtn = document.getElementById('view-all-btn');
  if(viewAllBtn) viewAllBtn.classList.toggle('active', catalogState.mode === 'all');

  if(window.applyI18nTo) window.applyI18nTo(el);
}

function setCatalogTab(cat){
  catalogState.category = cat;
  catalogState.mode = 'category';
  const searchInput = document.getElementById('catalog-search');
  if(searchInput) searchInput.value = '';
  renderCatalogTab();
}

function setCatalogViewAll(){
  catalogState.mode = catalogState.mode === 'all' ? 'category' : 'all';
  const searchInput = document.getElementById('catalog-search');
  if(searchInput) searchInput.value = '';
  renderCatalogTab();
}

let catalogSearchDebounce = null;
function onCatalogSearchInput(value){
  clearTimeout(catalogSearchDebounce);
  catalogSearchDebounce = setTimeout(()=>{
    catalogState.query = value;
    catalogState.mode = value.trim() ? 'search' : 'category';
    renderCatalogTab();
  }, 200);
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

function initPriceRangeSlider(){
  const minInput = document.getElementById('price-min');
  const maxInput = document.getElementById('price-max');
  const display = document.getElementById('price-range-display');
  const fill = document.getElementById('range-track-fill');
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
    setCatalogPriceRange(minVal, maxVal);
  }

  minInput.addEventListener('input', update);
  minInput.addEventListener('change', update);
  maxInput.addEventListener('input', update);
  maxInput.addEventListener('change', update);
  update();
}
