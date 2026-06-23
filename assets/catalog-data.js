const catalogData = {
  beef: [
    ["Beef Honeycomb (Mondongo)", 10.99, "beef-honeycomb-mondongo"],
    ["Brisket", 45.35, "brisket"],
    ["C.Roll / Ribeye", 20.54, "c-roll-ribeye"],
    ["Chateau Briand", 13.20, "chateau-briand"],
    ["Costillar del Centro", 150.00, "costillar-del-centro"],
    ["Entraña Arg", 37.60, "entrana-arg"],
    ["Eye Round", 27.67, "eye-round"],
    ["Flap Meat Arg", 57.15, "flap-meat-arg"],
    ["Ground Beef Premium", 11.54, "ground-beef-premium"],
    ["Heart (Corazón)", 9.39, "heart-corazon"],
    ["Inside", 82.39, "inside"],
    ["Kosher Ribeye (Frozen)", 189.94, "kosher-ribeye-frozen"],
    ["Liver (Hígado de Res)", 4.39, "liver-higado-de-res"],
    ["Marroc Estuche 6 Un", 6.84, "marroc-estuche-6-un"],
    ["Marrow Bones", 9.06, "marrow-bones"],
    ["Marucha", 13.03, "marucha"],
    ["Milanesas de Carne", 27.47, "milanesas-de-carne"],
    ["Ossobuco", 7.03, "ossobuco"],
    ["Outside Skirt USA", 52.77, "outside-skirt-usa"],
    ["Oxtail (Frozen)", 27.58, "oxtail-frozen"],
    ["Recorte de Paleta", 9.60, "recorte-de-paleta"],
    ["Ribeye Selection", 14.84, "ribeye-selection"],
    ["Ribeye with Bone (Frozen)", 30.50, "ribeye-with-bone-frozen"],
    ["Rose Meat (Frozen)", 51.24, "rose-meat-frozen"],
    ["Rump Cap / Picanha", 32.69, "rump-cap-picanha"],
    ["Short Ribs (Banderita)", 36.26, "short-ribs-banderita"],
    ["Short Ribs (Frozen)", 45.94, "short-ribs-frozen"],
    ["Small Intestine (Frozen)", 4.94, "small-intestine-frozen"],
    ["Striploin NY", 21.43, "striploin-ny"],
    ["Striploin NY Selection", 13.19, "striploin-ny-selection"],
    ["Sweetbread (Molleja)", 14.28, "sweetbread-molleja"],
    ["T-Bone", 26.39, "t-bone"],
    ["Tenderloin", 77.40, "tenderloin"],
    ["Thin Flank Entero (Vacío)", 131.86, "thin-flank-entero-vacio"],
    ["Tomahawk", 48.38, "tomahawk"],
    ["Tongue (Frozen)", 32.31, "tongue-frozen"],
    ["Tri-Tip", 27.23, "tri-tip"]
  ],
  chicken: [
    ["Chicken Breast All Natural", 8.17, "chicken-breast-all-natural"],
    ["Chicken Leg All Natural", 4.37, "chicken-leg-all-natural"],
    ["Empanadas de Pollo x 6", 10.98, "empanadas-de-pollo-x-6"],
    ["Milanesas de Pollo", 24.73, "milanesas-de-pollo"]
  ],
  pork: [
    ["Burger Pork", 7.91, "burger-pork"],
    ["Milanesas Pork", 21.98, "milanesas-pork"],
    ["Pork Baby Ribs", 13.73, "pork-baby-ribs"],
    ["Pork Chuck FR / Bondiola (Frozen)", 13.83, "pork-chuck-fr-bondiola-frozen"],
    ["Pork Tender", 9.33, "pork-tender"],
    ["Rose Meat Pork (Frozen)", 13.18, "rose-meat-pork-frozen"]
  ],
  lamb: [
    ["Burger Lamb", 7.91, "burger-lamb"],
    ["Lamb Leg", 56.03, "lamb-leg"],
    ["Lamb Leg N.Z. (W/Bone)", 48.51, "lamb-leg-n-z-w-bone"],
    ["Lamb Rack", 39.27, "lamb-rack"]
  ],
  grill: [
    ["Burger Chori", 7.91, "burger-chori"],
    ["Burger Original", 7.91, "burger-original"],
    ["Chorizo Argentino", 5.11, "chorizo-argentino"],
    ["Chorizo Bombón Argentino", 5.11, "chorizo-bombon-argentino"],
    ["Empanadas de Carne x 6", 10.98, "empanadas-de-carne-x-6"],
    ["Empanadas de Espinaca y Queso x 6", 10.98, "empanadas-de-espinaca-y-queso-x-6"],
    ["Empanadas de Jamón y Queso x 6", 10.98, "empanadas-de-jamon-y-queso-x-6"],
    ["Morcilla Argentina", 5.11, "morcilla-argentina"],
    ["Morcilla Bombón Argentina", 5.27, "morcilla-bombon-argentina"],
    ["Provoleta Santa Rosa", 12.53, "provoleta-santa-rosa"],
    ["Salchicha Parrillera", 7.15, "salchicha-parrillera"]
  ],
  pantry: [
    ["Cachafaz Alfajor Choc Blanco 6 Uni", 15.62, "cachafaz-alfajor-choc-blanco-6-uni"],
    ["Cachafaz Alfajor Choc Negro 6 Uni", 15.62, "cachafaz-alfajor-choc-negro-6-uni"],
    ["Cachafaz Alfajor Maicena 6 Uni", 15.62, "cachafaz-alfajor-maicena-6-uni"],
    ["Cachafaz Alfajor Mousse 6 Uni", 15.62, "cachafaz-alfajor-mousse-6-uni"],
    ["Cachafaz Conitos 6 Uni", 15.62, "cachafaz-conitos-6-uni"],
    ["Cachafaz Dulce de Leche", 9.85, "cachafaz-dulce-de-leche"],
    ["Dulce de Batata - La Campagnola", 8.40, "dulce-de-batata-la-campagnola"],
    ["Maldon Sea Salt Flakes 8.5 Oz", 11.20, "maldon-sea-salt-flakes-8-5-oz"]
  ]
};

function buildCard(name, price, slug){
  const img = slug
    ? `<img src="assets/images/products/${slug}.jpg" alt="${name}" loading="lazy" class="product-img">`
    : `<div class="product-cut"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-5 4-9 9-9s7 4 5 8-8 7-12 5-2-4-2-4z"></path></svg></div>`;
  return `<div class="product-card fade-in">
    ${img}
    <span class="product-name">${name}</span>
    <span class="product-price">$${price.toFixed(2)}<span class="product-unit" data-i18n="unit_lb"> /lb</span></span>
  </div>`;
}

function renderCatalog(){
  Object.keys(catalogData).forEach(cat=>{
    const el = document.getElementById('grid-'+cat);
    if(!el) return;
    el.innerHTML = catalogData[cat].map(([name,price,slug])=>buildCard(name,price,slug)).join('');
  });
}

function renderBestSellers(targetId, items){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = items.map(([name,price,slug])=>buildCard(name,price,slug)).join('');
}

const CATALOG_PRICE_MIN = 4;
const CATALOG_PRICE_MAX = 190;

const catalogState = { category:'beef', min:CATALOG_PRICE_MIN, max:CATALOG_PRICE_MAX, sort:'default' };

function renderCatalogTab(){
  const el = document.getElementById('catalog-grid');
  if(!el) return;
  let items = catalogData[catalogState.category].slice();
  items = items.filter(([,price])=> price >= catalogState.min && price <= catalogState.max);

  if(catalogState.sort === 'price-asc') items.sort((a,b)=>a[1]-b[1]);
  else if(catalogState.sort === 'price-desc') items.sort((a,b)=>b[1]-a[1]);
  else if(catalogState.sort === 'name-asc') items.sort((a,b)=>a[0].localeCompare(b[0]));

  el.innerHTML = items.length
    ? items.map(([name,price,slug])=>buildCard(name,price,slug)).join('')
    : '<p style="color:var(--muted);">No products in this price range.</p>';

  const counter = document.getElementById('items-count');
  if(counter) counter.textContent = items.length + (window.tcItemsLabel || ' items');

  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.cat === catalogState.category);
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
  maxInput.addEventListener('input', update);
  update();
}
