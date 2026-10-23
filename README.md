# TIDIAN FARMER Website

Website brosur produk telur TIDIAN FARMER dengan integrasi WhatsApp untuk pemesanan langsung.

## Fitur

- 🥚 Katalog produk telur dengan 6 varian (30 & 10 butir dalam ukuran L/M/S)
- 📱 Integrasi WhatsApp dengan 3 nomor aktif
- 🎨 Desain elegan dengan elemen dekoratif (pola daun, gradient)
- ✨ Animasi menarik dan modern
- ⚡ Cepat dan ringan (static HTML)
- 📱 Responsive untuk semua device
- 🚚 Info ongkir berdasarkan lokasi (Wamena)

## Produk

### Paket 30 Butir (Hemat)
- Ukuran Besar (L) - Rp 135.000
- Ukuran Sedang (M) - Rp 120.000
- Ukuran Kecil (S) - Rp 95.000

### Paket 10 Butir (Praktis)
- Ukuran Besar (L) - Rp 50.000
- Ukuran Sedang (M) - Rp 45.000
- Ukuran Kecil (S) - Rp 39.000

## Info Pengiriman

- **Dalam Kota Wamena:** FREE ONGKIR
- **Luar/Pinggiran Kota:** Rp 10.000

## Nomor WhatsApp

Website ini sudah terintegrasi dengan 3 nomor WhatsApp:
- 0812-9518-1963 (Primary/Utama)
- 0821-3527-1702
- 0823-9847-2448

## Cara Mengubah Nomor WhatsApp

Buka file `script.js`, cari bagian ini:

```javascript
const WHATSAPP_NUMBERS = [
    '6281295181963',
    '6282135271702',
    '6282398472448'
];
```

Ganti nomor sesuai kebutuhan (format: 628xxxxxxxxxx). Nomor pertama akan digunakan sebagai default untuk pesanan produk.

## Template Chat WhatsApp

Ketika user klik tombol pesan, akan otomatis terbuka WhatsApp dengan template chat:

**Untuk pesanan produk:**
```
Halo TIDIAN FARMER, saya ingin memesan:

🥚 [Nama Produk]
💰 Harga: [Harga]

📍 Lokasi saya: [Dalam Kota/Pinggiran Kota Wamena]

📦 Info Ongkir:
• Dalam Kota Wamena: FREE ONGKIR
• Luar/Pinggiran Kota: Rp 10.000

Mohon info ketersediaan dan cara pembayaran. Terima kasih!
```

**Untuk pertanyaan umum:**
```
Halo TIDIAN FARMER, saya ingin bertanya tentang produk telur Anda.

📍 Lokasi saya: [Dalam Kota/Pinggiran Kota Wamena]

📦 Info Ongkir:
• Dalam Kota Wamena: FREE ONGKIR
• Luar/Pinggiran Kota: Rp 10.000

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

### Opsi 2: Melalui GitHub (Rekomendasi)

1. Repository GitHub: https://github.com/pumoko17/tidian_farmer.git
2. Buka [vercel.com](https://vercel.com)
3. Klik "Add New Project"
4. Import repository `tidian_farmer`
5. Klik "Deploy"
6. Website akan otomatis online!

### Opsi 3: Drag & Drop di Vercel

1. Buka [vercel.com](https://vercel.com)
2. Login atau buat akun
3. Drag & drop folder `farmers-tidian-website` ke dashboard Vercel

## Cara Update Website

Menggunakan alias `git sync` yang sudah dikonfigurasi:

```bash
cd farmers-tidian-website
git sync
```

Perintah ini akan otomatis:
- Menambahkan semua perubahan (`git add .`)
- Commit dengan pesan "update" (`git commit -m 'update'`)
- Push ke GitHub (`git push`)

Setelah push, Vercel akan otomatis redeploy website dalam 1-2 menit.

## Cara Mengubah Harga atau Produk

Edit file `index.html` untuk mengubah:
- Harga di bagian produk
- Nama produk
- Deskripsi
- Tagline

Setelah edit, jalankan `git sync` untuk mengupdate website.

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

## Repository

- GitHub: https://github.com/pumoko17/tidian_farmer.git
- Branch: master
- Git Alias: `git sync` (add, commit, push otomatis)

## Support

Untuk pertanyaan atau bantuan, hubungi via WhatsApp di nomor yang tertera di website.
