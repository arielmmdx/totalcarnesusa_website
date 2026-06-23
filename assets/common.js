const commonI18n = {
  en: {
    nav_home:"Home", nav_catalog:"Catalog", nav_best:"Best Sellers", nav_about:"Our Story", nav_contact:"Contact",
    nav_cta:"Shop the catalog",
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
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');
    if(btnEn) btnEn.classList.toggle('active', lang==='en');
    if(btnEs) btnEs.classList.toggle('active', lang==='es');
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem('tc_lang', lang);
  }
  window.setLang = setLang;

  document.addEventListener('DOMContentLoaded', ()=>{
    const saved = localStorage.getItem('tc_lang');
    if(saved === 'es') setLang('es'); else setLang('en');

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
