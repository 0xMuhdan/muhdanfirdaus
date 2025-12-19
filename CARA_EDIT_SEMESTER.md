# Cara Edit Konten Semester

## Lokasi File

Semua konten semester disimpan di file: `src/lib/data.js`

## Format Konten

Setiap semester memiliki struktur data seperti ini:

```javascript
{
  title: "Semester 1",
  academicYear: "Tahun Akademik 2024/2025 Ganjil",
  content: [
    // Array berisi berbagai tipe konten
  ]
}
```

## Tipe Konten yang Tersedia

### 1. Paragraf
```javascript
{
  type: "paragraph",
  text: "Tulis paragraf Anda di sini..."
}
```

### 2. Heading (Judul Bagian)
```javascript
{
  type: "heading",
  text: "Judul Bagian"
}
```

### 3. List (Daftar)
```javascript
{
  type: "list",
  items: [
    "Item pertama",
    "Item kedua",
    "Item ketiga"
  ]
}
```

### 4. Gambar/Dokumentasi
```javascript
{
  type: "image",
  src: "https://example.com/gambar.jpg",  // atau path lokal seperti "/images/foto.jpg"
  alt: "Deskripsi gambar",
  caption: "Caption gambar (opsional)"
}
```

### 5. Catatan/Note
```javascript
{
  type: "note",
  text: "Catatan penting atau refleksi Anda..."
}
```

## Contoh Lengkap

Berikut contoh untuk mengedit Semester 2:

```javascript
2: {
  title: "Semester 2",
  academicYear: "Tahun Akademik 2024/2025 Genap",
  content: [
    {
      type: "paragraph",
      text: "Di semester 2, saya mulai lebih fokus pada pengembangan skill programming..."
    },
    {
      type: "heading",
      text: "Proyek yang Dikerjakan"
    },
    {
      type: "list",
      items: [
        "Website E-commerce dengan React",
        "Mobile App dengan React Native",
        "REST API dengan Node.js"
      ]
    },
    {
      type: "image",
      src: "/images/semester2/project-demo.jpg",
      alt: "Demo project e-commerce",
      caption: "Screenshot project e-commerce yang saya kerjakan"
    },
    {
      type: "heading",
      text: "Kompetisi dan Lomba"
    },
    {
      type: "paragraph",
      text: "Semester ini saya mengikuti beberapa kompetisi..."
    },
    {
      type: "note",
      text: "Semester 2 mengajarkan saya pentingnya kerja tim dan komunikasi dalam project development."
    }
  ]
}
```

## Tips

1. **Menambah Gambar Lokal**: 
   - Upload gambar ke folder `public/images/semester-X/`
   - Gunakan path seperti `/images/semester-1/foto.jpg`

2. **Menambah Gambar dari Internet**:
   - Gunakan URL lengkap seperti `https://example.com/gambar.jpg`

3. **Urutan Konten**:
   - Konten akan ditampilkan sesuai urutan dalam array
   - Atur urutan sesuai keinginan Anda

4. **Format Teks**:
   - Gunakan paragraf untuk teks panjang
   - Gunakan list untuk poin-poin
   - Gunakan heading untuk membagi bagian

## Cara Edit

1. Buka file `src/lib/data.js`
2. Cari bagian `semesterContent`
3. Edit konten semester yang diinginkan
4. Simpan file
5. Refresh browser untuk melihat perubahan

## Contoh Struktur yang Baik

```javascript
content: [
  // Pembukaan
  { type: "paragraph", text: "..." },
  
  // Bagian 1
  { type: "heading", text: "Event dan Lomba" },
  { type: "paragraph", text: "..." },
  { type: "list", items: [...] },
  { type: "image", src: "...", alt: "...", caption: "..." },
  
  // Bagian 2
  { type: "heading", text: "Kegiatan Akademik" },
  { type: "paragraph", text: "..." },
  { type: "list", items: [...] },
  
  // Penutup
  { type: "note", text: "..." }
]
```

Selamat menulis! 📝