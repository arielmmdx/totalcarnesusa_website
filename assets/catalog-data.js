const catalogData = {
  beef: [
    ["Beef Honeycomb (Mondongo)", 10.99],
    ["Brisket", 45.35],
    ["C.Roll / Ribeye", 20.54],
    ["Chateau Briand", 13.20],
    ["Costillar del Centro", 150.00],
    ["Entraña Arg", 37.60],
    ["Eye Round", 27.67],
    ["Flap Meat Arg", 57.15],
    ["Ground Beef Premium", 11.54],
    ["Heart (Corazón)", 9.39],
    ["Inside", 82.39],
    ["Kosher Ribeye (Frozen)", 189.94],
    ["Liver (Hígado de Res)", 4.39],
    ["Marroc Estuche 6 Un", 6.84],
    ["Marrow Bones", 9.06],
    ["Marucha", 13.03],
    ["Milanesas de Carne", 27.47],
    ["Ossobuco", 7.03],
    ["Outside Skirt USA", 52.77],
    ["Oxtail (Frozen)", 27.58],
    ["Recorte de Paleta", 9.60],
    ["Ribeye Selection", 14.84],
    ["Ribeye with Bone (Frozen)", 30.50],
    ["Rose Meat (Frozen)", 51.24],
    ["Rump Cap / Picanha", 32.69],
    ["Short Ribs (Banderita)", 36.26],
    ["Short Ribs (Frozen)", 45.94],
    ["Small Intestine (Frozen)", 4.94],
    ["Striploin NY", 21.43],
    ["Striploin NY Selection", 13.19],
    ["Sweetbread (Molleja)", 14.28],
    ["T-Bone", 26.39],
    ["Tenderloin", 77.40],
    ["Thin Flank Entero (Vacío)", 131.86],
    ["Tomahawk", 48.38],
    ["Tongue (Frozen)", 32.31],
    ["Tri-Tip", 27.23]
  ],
  chicken: [
    ["Chicken Breast All Natural", 8.17],
    ["Chicken Leg All Natural", 4.37],
    ["Empanadas de Pollo x 6", 10.98],
    ["Milanesas de Pollo", 24.73]
  ],
  pork: [
    ["Burger Pork", 7.91],
    ["Milanesas Pork", 21.98],
    ["Pork Baby Ribs", 13.73],
    ["Pork Chuck FR / Bondiola (Frozen)", 13.83],
    ["Pork Tender", 9.33],
    ["Rose Meat Pork (Frozen)", 13.18]
  ],
  lamb: [
    ["Burger Lamb", 7.91],
    ["Lamb Leg", 56.03],
    ["Lamb Leg N.Z. (W/Bone)", 48.51],
    ["Lamb Rack", 39.27]
  ],
  grill: [
    ["Burger Chori", 7.91],
    ["Burger Original", 7.91],
    ["Chorizo Argentino", 5.11],
    ["Chorizo Bombón Argentino", 5.11],
    ["Empanadas de Carne x 6", 10.98],
    ["Empanadas de Espinaca y Queso x 6", 10.98],
    ["Empanadas de Jamón y Queso x 6", 10.98],
    ["Morcilla Argentina", 5.11],
    ["Morcilla Bombón Argentina", 5.27],
    ["Provoleta Santa Rosa", 12.53],
    ["Salchicha Parrillera", 7.15]
  ],
  pantry: [
    ["Cachafaz Alfajor Choc Blanco 6 Uni", 15.62]
  ]
};

function buildCard(name, price){
  return `<div class="product-card fade-in">
    <div class="product-cut"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-5 4-9 9-9s7 4 5 8-8 7-12 5-2-4-2-4z"></path></svg></div>
    <span class="product-name">${name}</span>
    <span class="product-price">$${price.toFixed(2)}<span class="product-unit" data-i18n="unit_lb"> /lb</span></span>
  </div>`;
}

function renderCatalog(){
  Object.keys(catalogData).forEach(cat=>{
    const el = document.getElementById('grid-'+cat);
    if(!el) return;
    el.innerHTML = catalogData[cat].map(([name,price])=>buildCard(name,price)).join('');
  });
}

function renderBestSellers(targetId, items){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = items.map(([name,price])=>buildCard(name,price)).join('');
}
