/**
 * Script para metadados Schema.org da Igreja Presbiteriana
 * Este arquivo define os dados estruturados para SEO da igreja
 */

// Definição de dados estruturados para Schema.org
const churchSchema = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": "Igreja Presbiteriana",
    "image": "./assets/imagens/igreja.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua 00044",
      "addressLocality": "Cidade",
      "addressRegion": "Estado",
      "postalCode": "00000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.387531",
      "longitude": "-41.773374"
    },
    "telephone": "(00) 0000-0000",
    "url": "https://www.igrejapresbiterianaexemplo.com.br",
    "openingHours": "Su 09:00-12:00,19:00-21:00",
    "sameAs": [
      "https://www.facebook.com/igrejapresbiterianaexemplo",
      "https://www.instagram.com/igrejapresbiterianaexemplo"
    ]
  };
  
  // Adiciona os dados estruturados à página
  document.addEventListener('DOMContentLoaded', function() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(churchSchema);
    document.head.appendChild(script);
  });