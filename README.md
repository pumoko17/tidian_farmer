# TIDIAN FARMER Website

Website brosur produk telur TIDIAN FARMER dengan integrasi WhatsApp untuk pemesanan langsung.

## Fitur

- 🥚 Katalog produk telur dengan harga
- 📱 Integrasi WhatsApp dengan 2 nomor aktif
- 🎨 Desain elegan dengan elemen dekoratif (pola daun, gradient)
- ✨ Animasi menarik dan modern
- ⚡ Cepat dan ringan (static HTML)
- 📱 Responsive untuk semua device

## Produk

- **1 Rak Isi 12 Telur** - Rp 39.000
- Telur segar langsung dari peternakan
- Ready to delivery

## Nomor WhatsApp

Website ini sudah terintegrasi dengan 2 nomor WhatsApp:
- 0812-9518-1963 (Primary)
- 0821-9322-2927 (Secondary)

## Cara Mengubah Nomor WhatsApp

Buka file `index.html`, cari bagian script di bawah:

```javascript
const WHATSAPP_NUMBERS = {
    primary: '6281295181963',
    secondary: '6282193222927'
};
```

Ganti nomor sesuai kebutuhan (format: 628xxxxxxxxxx).

## Template Chat WhatsApp

Ketika user klik tombol pesan, akan otomatis terbuka WhatsApp dengan template chat:

**Untuk pesanan produk:**
```
Halo TIDIAN FARMER, saya ingin memesan:

🥚 1 Rak Isi 12 Telur
💰 Harga: Rp 39.000

Mohon info ketersediaan dan cara pembayaran. Terima kasih!
```

**Untuk pertanyaan umum:**
```
Halo TIDIAN FARMER, saya ingin bertanya tentang produk telur Anda.

Mohon informasinya. Terima kasih! 🥚
```

## Cara Deploy ke Vercel

### Opsi 1: Melalui Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login ke Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd farmers-tidian-website
vercel
```

### Opsi 2: Melalui GitHub

1. Push project ini ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Klik "Add New Project"
4. Import repository GitHub Anda
5. Deploy

### Opsi 3: Drag & Drop di Vercel

1. Buka [vercel.com](https://vercel.com)
2. Login atau buat akun
3. Drag & drop folder `farmers-tidian-website` ke dashboard Vercel

## Cara Mengubah Harga atau Produk

Edit file `index.html` untuk mengubah:
- Harga di bagian produk
- Nama produk
- Deskripsi
- Tagline

## Struktur File

```
farmers-tidian-website/
├── index.html      # Halaman utama HTML
├── styles.css      # File CSS untuk styling
├── script.js       # File JavaScript untuk fungsionalitas
├── vercel.json     # Konfigurasi Vercel
└── README.md       # Dokumentasi ini
```

## Customization

Anda dapat mengubah:
- Warna tema di bagian CSS (`.bg-farm-*`, `.text-farm-*`)
- Font di bagian Google Fonts
- Ikon menggunakan Font Awesome
- Layout menggunakan Tailwind CSS classes
- Animasi di bagian CSS (@keyframes)
