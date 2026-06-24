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
    ["Cachafaz Alfajor Maicena 6 Uni", 14.00, "cachafaz-alfajor-maicena-6-uni", true],
    ["Cachafaz Alfajor Mousse 6 Uni", 16.41, "cachafaz-alfajor-mousse-6-uni", true],
    ["Cachafaz Conitos 6 Uni", 13.70, "cachafaz-conitos-6-uni", true],
    ["Cachafaz Dulce de Leche", 11.86, "cachafaz-dulce-de-leche", true],
    ["Dulce de Batata - La Campagnola", 8.25, "dulce-de-batata-la-campagnola", true],
    ["Maldon Sea Salt Flakes 8.5 Oz", 9.13, "maldon-sea-salt-flakes-8-5-oz", true]
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

const PRODUCT_VARIANTS = {
  "beef-honeycomb-mondongo": [{label:"0.5-1 lbs", price:10.99}, {label:"1-1.5 lbs", price:16.48}, {label:"1.5-1.7 lbs", price:18.67}],
  "brisket": [{label:"5-7 lbs", price:45.35}, {label:"7-10lbs", price:64.79}],
  "c-roll-ribeye": [{label:"0.9-1.1 lbs", price:20.54}, {label:"1.1-1.7 lbs", price:31.77}],
  "chateau-briand": [{label:"0.4-0.5 lbs", price:13.2}, {label:"0.5-0.6 lbs", price:15.83}, {label:"0.6-0.8 lbs", price:21.11}],
  "costillar-del-centro": [{label:"7lb-8lb", price:150.0}, {label:"8lb-9lb", price:168.0}],
  "entrana-arg": [{label:"1.5-1.8 lbs", price:37.6}, {label:"1.8-2.2 lbs", price:45.95}, {label:"2.2-2.8 lbs", price:58.48}],
  "eye-round": [{label:"2.7-3.6 lbs", price:27.67}, {label:"3.6-5.2 lbs", price:39.98}],
  "flap-meat-arg": [{label:"3.5-4 lbs", price:57.15}, {label:"4-5.2 lbs", price:74.3}],
  "ground-beef-premium": [{label:"1.2-1.5 lbs", price:11.54}],
  "heart-corazon": [{label:"1.2-1.5 lbs", price:9.39}, {label:"1.5-2 lbs", price:12.52}, {label:"2-2.5 lbs", price:15.65}],
  "inside": [{label:"7-10 lbs", price:82.39}],
  "kosher-ribeye-frozen": [{label:"6-7.95 lbs", price:189.94}, {label:"7.95-8.95 lbs", price:213.62}],
  "liver-higado-de-res": [{label:"0.5-1 lbs", price:4.39}, {label:"1-1.5 lbs", price:6.59}, {label:"1.5-2 lbs", price:8.77}],
  "marroc-estuche-6-un": [{label:"Default Title", price:6.84}],
  "marrow-bones": [{label:"1.1-1.5 lbs", price:9.06}, {label:"1.5-2 lbs", price:12.07}, {label:"2-2.8 lbs", price:16.9}],
  "marucha": [{label:"1-1.5 lbs", price:13.03}, {label:"1.5-2 lbs", price:17.38}],
  "milanesas-de-carne": [{label:"1.5-2.5 lbs", price:27.47}, {label:"2.5-2.8 lbs", price:30.77}],
  "ossobuco": [{label:"0.2-0.8 lbs", price:7.03}, {label:"0.8-1.2 lbs", price:10.55}, {label:"1.2-1.5 lbs", price:13.19}],
  "outside-skirt-usa": [{label:"1.2-2 lbs", price:52.77}, {label:"2- 2.5 lbs", price:65.97}, {label:"2.5-10 lbs", price:263.89}, {label:"10-15 lbs", price:395.84}],
  "oxtail-frozen": [{label:"1.5-2 lbs", price:27.58}, {label:"2-2.5 lbs", price:34.48}, {label:"2.5-3.8 lbs", price:52.51}],
  "recorte-de-paleta": [{label:"2-2.5 lbs", price:9.6}, {label:"2.5-3 lbs", price:11.52}, {label:"3-4.5 lbs", price:17.27}],
  "ribeye-selection": [{label:"0.5-0.75 lbs", price:14.84}, {label:"0.75-0.9 lbs", price:17.81}, {label:"0.9-1.5 lbs", price:29.69}],
  "ribeye-with-bone-frozen": [{label:"1-1.5 lbs", price:30.5}, {label:"1.5-2 lbs", price:40.68}, {label:"2-2.6 lbs", price:52.88}],
  "rose-meat-frozen": [{label:"4-6.22 lbs", price:51.24}, {label:"6.22-8.5 lbs", price:70.0}, {label:"8.5-9.8 lbs", price:80.74}],
  "rump-cap-picanha": [{label:"2-2.5 lbs", price:32.69}, {label:"2.5-3 lbs", price:39.23}, {label:"3-3.5 lbs", price:45.77}],
  "short-ribs-banderita": [{label:"2.81-3 lbs", price:36.26}, {label:"3-3.4 lbs", price:41.1}],
  "short-ribs-frozen": [{label:"3.5-3.8 lbs", price:45.94}, {label:"3.8-4.1 lbs", price:49.61}, {label:"4.1-4.3 lbs", price:51.99}],
  "small-intestine-frozen": [{label:"0.5-1 lbs", price:4.94}, {label:"1-1.5 lbs", price:7.4}, {label:"1.5-2 lbs", price:9.87}],
  "striploin-ny": [{label:"1-1.5 lbs", price:21.43}, {label:"1.5-2 lbs", price:28.58}],
  "striploin-ny-selection": [{label:"0.5-0.75 lbs", price:13.19}, {label:"0.75- 0.9 lbs", price:15.82}, {label:"0.9-1.5 lbs", price:26.39}],
  "sweetbread-molleja": [{label:"1.5-2 lbs", price:14.28}, {label:"2-2.5 lbs", price:17.85}],
  "t-bone": [{label:"1-1.5 lbs", price:26.39}, {label:"1.5-2 lbs", price:35.18}],
  "tenderloin": [{label:"3-3.2 lbs", price:77.4}, {label:"3.2-3.5 lbs", price:84.66}, {label:"3.5-4 lbs", price:96.75}],
  "thin-flank-entero-vacio": [{label:"9-12 lbs", price:131.86}, {label:"12-15 lbs", price:164.83}],
  "tomahawk": [{label:"1.5-2 lbs", price:48.38}, {label:"2-2.5 lbs", price:60.48}, {label:"2.5-3 lbs", price:72.57}],
  "tongue-frozen": [{label:"2-2.8 lbs", price:32.31}, {label:"2.8-3.5 lbs", price:40.39}, {label:"3.5-4.5 lbs", price:51.92}],
  "tri-tip": [{label:"2-2.5 lbs", price:27.23}, {label:"2.5-3 lbs", price:32.67}, {label:"3-3.9 lbs", price:42.47}],
  "chicken-breast-all-natural": [{label:"1.2-1.5 lbs", price:8.17}, {label:"1.5-1.8 lbs", price:9.8}, {label:"1.8-2.8 lbs", price:15.24}],
  "chicken-leg-all-natural": [{label:"1.7-2 lbs", price:4.37}, {label:"2-2.5 lbs", price:5.38}, {label:"2.5-3.1 lbs", price:6.79}],
  "empanadas-de-pollo-x-6": [{label:"Default Title", price:10.98}],
  "milanesas-de-pollo": [{label:"1.5- 2.5 lbs", price:24.73}, {label:"2.5-2.8 lbs", price:27.68}],
  "burger-pork": [{label:"0.8-0.9 lbs", price:7.91}],
  "milanesas-pork": [{label:"1.5-2.5 lbs", price:21.98}, {label:"2.5-2.8 lbs", price:24.6}],
  "pork-baby-ribs": [{label:"2-2.5 lbs", price:13.73}, {label:"2.5-3.5 lbs", price:19.21}, {label:"3.5-4.7 lbs", price:25.79}],
  "pork-chuck-fr-bondiola-frozen": [{label:"2.5-3 lbs", price:13.83}, {label:"3-3.5 lbs", price:16.13}],
  "pork-tender": [{label:"2-2.3 lbs", price:9.33}, {label:"2.3-2.5 lbs", price:10.15}, {label:"2.5-2.7 lbs", price:10.96}],
  "rose-meat-pork-frozen": [{label:"1-1.5 lbs", price:13.18}, {label:"1.5-2 lbs", price:17.58}, {label:"2-3.4 lbs", price:29.88}],
  "burger-lamb": [{label:"0.8-0.9 lbs", price:7.91}],
  "lamb-leg": [{label:"5-6 lbs", price:56.03}, {label:"6-7 lbs", price:65.37}, {label:"7-8.5 lbs", price:79.38}],
  "lamb-leg-n-z-w-bone": [{label:"6-6.31 lbs", price:48.51}, {label:"6.32-7.6 lbs", price:58.43}],
  "lamb-rack": [{label:"1-1.5 lbs", price:39.27}, {label:"1.5-2 lbs", price:52.36}, {label:"2-2.2 lbs", price:57.59}],
  "burger-chori": [{label:"0.8-0.9 lbs", price:7.91}],
  "burger-original": [{label:"0.8-0.9 lbs", price:7.91}],
  "chorizo-argentino": [{label:"Default Title", price:5.11}],
  "chorizo-bombon-argentino": [{label:"Default Title", price:5.11}],
  "empanadas-de-carne-x-6": [{label:"Default Title", price:10.98}],
  "empanadas-de-espinaca-y-queso-x-6": [{label:"Default Title", price:10.98}],
  "empanadas-de-jamon-y-queso-x-6": [{label:"Default Title", price:10.98}],
  "morcilla-argentina": [{label:"Default Title", price:5.11}],
  "morcilla-bombon-argentina": [{label:"Default Title", price:5.27}],
  "provoleta-santa-rosa": [{label:"Default Title", price:12.53}],
  "salchicha-parrillera": [{label:"Default Title", price:7.15}],
  "cachafaz-alfajor-choc-blanco-6-uni": [{label:"Default Title", price:15.62}],
  "cachafaz-alfajor-choc-negro-6-uni": [{label:"Default Title", price:15.62}],
  "cachafaz-alfajor-maicena-6-uni": [{label:"Default Title", price:14.0}],
  "cachafaz-alfajor-mousse-6-uni": [{label:"Default Title", price:16.41}],
  "cachafaz-conitos-6-uni": [{label:"Default Title", price:13.7}],
  "cachafaz-dulce-de-leche": [{label:"450gr", price:11.86}, {label:"800gr", price:16.8}],
  "dulce-de-batata-la-campagnola": [{label:"Default Title", price:8.25}],
  "maldon-sea-salt-flakes-8-5-oz": [{label:"Default Title", price:9.13}],
};

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

function getProductVariants(slug, fallbackPrice){
  return PRODUCT_VARIANTS[slug] || [{ label: 'Default Title', price: fallbackPrice }];
}

function parseWeightToKg(label){
  const isGrams = /gr\b/i.test(label) && !/lbs?/i.test(label);
  const cleaned = label.toLowerCase().replace(/lbs?/g, '').replace(/gr/g, '').trim();
  const parts = cleaned.split('-').map(s=>parseFloat(s.trim())).filter(n=>!isNaN(n));
  if(!parts.length) return null;
  const toKg = v => isGrams ? v/1000 : v*KG_PER_LB;
  if(parts.length === 1) return { min: toKg(parts[0]), max: toKg(parts[0]) };
  return { min: toKg(parts[0]), max: toKg(parts[1]) };
}

function trimNum(n){
  return (Math.round(n*100)/100).toString();
}

function getWeightDisplay(label, unit){
  if(unit !== 'kg') return label;
  const parsed = parseWeightToKg(label);
  if(!parsed) return label;
  return parsed.min === parsed.max
    ? `${trimNum(parsed.min)} kg`
    : `${trimNum(parsed.min)} – ${trimNum(parsed.max)} kg`;
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
  const inner = `${categoryTag}${img}${stockBadge}
    <span class="product-name">${displayName}</span>
    <span class="product-price">$${price.toFixed(2)}</span>`;
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

const OFFERS = [
  { name:'Tomahawk', slug:'tomahawk', compare:48.38, sale:41.12 },
  { name:'Short Ribs (Banderita)', slug:'short-ribs-banderita', compare:36.26, sale:30.82 },
  { name:'Empanadas de Carne x 6', slug:'empanadas-de-carne-x-6', tag2x1:true },
  { name:'Ground Beef Premium', slug:'ground-beef-premium', compare:11.54, sale:10.39 }
];
function renderOffersTicker(){
  const track = document.querySelector('.offers-track');
  if(!track) return;
  const card = (o) => `
    <div class="offer-card">
      <img src="assets/images/products/${o.slug}.jpg" alt="${getDisplayName(o.name, o.slug)}">
      <div class="offer-info">
        <span class="offer-badge" data-i18n="offer_badge">⭐ OFFER</span>
        <span class="offer-name">${getDisplayName(o.name, o.slug)}</span>
        ${o.tag2x1
          ? `<span class="offer-tag2x1" data-i18n="offer_2x1">Buy 1 Get 1 Free</span>`
          : `<span class="offer-price"><s>$${o.compare.toFixed(2)}</s> $${o.sale.toFixed(2)}</span>`}
      </div>
    </div>`;
  const html = OFFERS.map(card).join('');
  track.innerHTML = html + html + html + html;
  if(window.applyI18nTo) window.applyI18nTo(track);
}
