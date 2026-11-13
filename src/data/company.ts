export const company = { 
    name: "JR Serralheria Tradicional e Artística",
    city: "Caxias do Sul",
    state: "RS",
    whatsapp: "5554992707452",
    instagram: "https://www.instagram.com/jrserralheria_artistica/"
};

export function createWhatsAppLink(
    message = "Olá! Gostaria de solicitar um orçamento."
) {
    const text = encodeURIComponent(message);

    return `ttps://wa.me/${company.whatsapp}?text=${text}`
}