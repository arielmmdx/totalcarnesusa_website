const commonI18n = {
  en: {
    nav_home:"Home", nav_catalog:"Catalog", nav_best:"Best Sellers", nav_about:"Our Story", nav_contact:"Contact",
    nav_cta:"Shop the catalog",
    nav_geo:"📍 Find nearest store",
    palette_label:"Preview a theme:",
    offer1:'⭐ <strong>OFFER</strong> Free shipping on orders $150+ ⭐',
    offer2:'⭐ <strong>OFFER</strong> 15% OFF Tomahawk &amp; Short Ribs ⭐',
    offer3:'⭐ <strong>OFFER</strong> Buy 1 Get 1 on Empanadas this week ⭐',
    offer4:'⭐ <strong>OFFER</strong> 10% OFF your first order ⭐',
    account_title:"Account",
    account_signin:"Sign in",
    account_orders:"Orders",
    account_profile:"Profile",
    account_note:"Design preview — sign-in would connect to your real customer accounts system.",
    cart_title:"Your cart",
    cart_total:"Total",
    cart_checkout:"Request this order",
    cart_empty:"Your cart is empty.",
    footer_brand_desc:"Premium Argentine beef and cuts, shipped nationwide in under 24h, with four stores across Miami-Dade.",
    footer_shop:"Shop",
    footer_company:"Company",
    footer_locations_title:"Our stores",
    footer_rights:"© 2026 Total Carnes USA. All rights reserved.",
    footer_credit:"Site redesign by BBSOFT LLC",
    addr_northmiami:"North Miami — 12420 Biscayne Blvd, North Miami, FL 33181",
    addr_aventura:"Aventura — 19087 West Dixie Highway, Miami, FL 33180",
    addr_pinecrest:"Pinecrest — 9563 S Dixie Hwy Unit #04A, Pinecrest, FL 33156",
    addr_keybiscayne:"Key Biscayne — 328 Crandon Blvd, Key Biscayne, FL 33149"
  },
  es: {
    nav_home:"Inicio", nav_catalog:"Catálogo", nav_best:"Más vendidos", nav_about:"Nuestra historia", nav_contact:"Contacto",
    nav_cta:"Ver catálogo",
    nav_geo:"📍 Encontrar local más cercano",
    palette_label:"Probar un estilo:",
    offer1:'⭐ <strong>OFERTA</strong> Envío gratis en compras +$150 ⭐',
    offer2:'⭐ <strong>OFERTA</strong> 15% OFF en Tomahawk y Short Ribs ⭐',
    offer3:'⭐ <strong>OFERTA</strong> 2x1 en Empanadas esta semana ⭐',
    offer4:'⭐ <strong>OFERTA</strong> 10% OFF en tu primera compra ⭐',
    account_title:"Cuenta",
    account_signin:"Iniciar sesión",
    account_orders:"Pedidos",
    account_profile:"Perfil",
    account_note:"Vista previa de diseño — el inicio de sesión se conectaría con tu sistema real de cuentas de clientes.",
    cart_title:"Tu carrito",
    cart_total:"Total",
    cart_checkout:"Pedir esta orden",
    cart_empty:"Tu carrito está vacío.",
    footer_brand_desc:"Carne argentina premium, con envío a todo el país en menos de 24h y cuatro locales en Miami-Dade.",
    footer_shop:"Tienda",
    footer_company:"Empresa",
    footer_locations_title:"Nuestros locales",
    footer_rights:"© 2026 Total Carnes USA. Todos los derechos reservados.",
    footer_credit:"Rediseño del sitio por BBSOFT LLC",
    addr_northmiami:"North Miami — 12420 Biscayne Blvd, North Miami, FL 33181",
    addr_aventura:"Aventura — 19087 West Dixie Highway, Miami, FL 33180",
    addr_pinecrest:"Pinecrest — 9563 S Dixie Hwy Unit #04A, Pinecrest, FL 33156",
    addr_keybiscayne:"Key Biscayne — 328 Crandon Blvd, Key Biscayne, FL 33149"
  }
};

function initSite(pageI18n){
  const i18n = { en: {...commonI18n.en, ...(pageI18n.en||{})}, es: {...commonI18n.es, ...(pageI18n.es||{})} };

  function setLang(lang){
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(i18n[lang][key] !== undefined){
        el.innerHTML = i18n[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
      const key = el.getAttribute('data-i18n-placeholder');
      if(i18n[lang][key] !== undefined){
        el.setAttribute('placeholder', i18n[lang][key]);
      }
    });
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    if(btnEn) btnEn.classList.toggle('active', lang==='en');
    if(btnEs) btnEs.classList.toggle('active', lang==='es');
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('tc_lang', lang);
    window.tcItemsLabel = i18n[lang].items_label || ' items';
    if(typeof window.onLangChange === 'function') window.onLangChange(lang);
  }
  window.setLang = setLang;

  window.applyI18nTo = function(root){
    const lang = document.documentElement.getAttribute('lang') || 'en';
    root.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
    });
  };

  function setTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('tc_theme_v2', theme);
  }
  window.setTheme = setTheme;
  window.toggleTheme = function(){
    const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(current === 'light' ? 'dark' : 'light');
  };

  function setPalette(palette){
    if(palette === 'classic'){
      document.documentElement.removeAttribute('data-palette');
    } else {
      document.documentElement.setAttribute('data-palette', palette);
    }
    localStorage.setItem('tc_palette', palette);
    document.querySelectorAll('.swatch-btn').forEach(btn=>{
      btn.classList.toggle('active', btn.dataset.palette === palette);
    });
  }
  window.setPalette = setPalette;

  window.toggleAccountPanel = function(){
    const panel = document.getElementById('account-panel');
    if(panel) panel.classList.toggle('open');
  };
  document.addEventListener('click', (e)=>{
    const panel = document.getElementById('account-panel');
    if(panel && panel.classList.contains('open') && !e.target.closest('.account-dropdown')){
      panel.classList.remove('open');
    }
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    const saved = localStorage.getItem('tc_lang');
    if(saved === 'es') setLang('es'); else setLang('en');

    const savedTheme = localStorage.getItem('tc_theme_v2');
    setTheme(savedTheme === 'dark' ? 'dark' : 'light');

    const savedPalette = localStorage.getItem('tc_palette') || 'classic';
    setPalette(savedPalette);

    const burger = document.getElementById('nav-burger');
    const menu = document.getElementById('mobile-menu');
    if(burger && menu){
      burger.addEventListener('click', ()=>menu.classList.toggle('open'));
    }

    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));
  });
}
