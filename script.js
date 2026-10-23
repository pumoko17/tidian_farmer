// Nomor WhatsApp aktif (format: 628xxxxxxxxxx)
const WHATSAPP_NUMBERS = [
    '6282135271702',
    '6282398472448',
    '6281295181963'
];

function orderViaWhatsApp(product, price) {
    const message = `Halo TIDIAN FARMER, saya ingin memesan:\n\n🥚 ${product}\n💰 Harga: ${price}\n\n📍 Lokasi saya: [Dalam Kota/Pinggiran Kota Wamena]\n\n📦 Info Ongkir:\n• Dalam Kota Wamena: FREE ONGKIR\n• Luar/Pinggiran Kota: Rp 10.000\n\nMohon info ketersediaan dan cara pembayaran. Terima kasih!`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBERS[0]}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function orderViaWhatsAppGeneral(phoneNumber) {
    const message = `Halo TIDIAN FARMER, saya ingin bertanya tentang produk telur Anda.\n\n📍 Lokasi saya: [Dalam Kota/Pinggiran Kota Wamena]\n\n📦 Info Ongkir:\n• Dalam Kota Wamena: FREE ONGKIR\n• Luar/Pinggiran Kota: Rp 10.000\n\nMohon informasinya. Terima kasih! 🥚`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
