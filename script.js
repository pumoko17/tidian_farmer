// Nomor WhatsApp aktif (format: 628xxxxxxxxxx)
const WHATSAPP_NUMBERS = {
    primary: '6281295181963',
    secondary: '6282193222927'
};

function orderViaWhatsApp(product, price) {
    const message = `Halo TIDIAN FARMER, saya ingin memesan:\n\n🥚 ${product}\n💰 Harga: ${price}\n\nMohon info ketersediaan dan cara pembayaran. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBERS.primary}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderViaWhatsAppGeneral(phoneNumber) {
    const message = `Halo TIDIAN FARMER, saya ingin bertanya tentang produk telur Anda.\n\nMohon informasinya. Terima kasih! 🥚`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
