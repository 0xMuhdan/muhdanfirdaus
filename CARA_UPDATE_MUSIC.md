# Cara Update Lagu dan Cover di Music Player

## Langkah-langkah Update Lagu:

### 1. Siapkan File Lagu dan Cover
- **File lagu**: Format MP3
- **File cover**: Format JPEG/JPG/PNG (disarankan ukuran 500x500px atau 1000x1000px)

### 2. Struktur Folder
Letakkan file di folder `public/music/`:
```
public/
  music/
    nama-lagu.mp3              ← File lagu di sini
    covers/
      nama-lagu.jpeg           ← File cover di sini
```

### 3. Edit File MusicPlayer.js
Buka file `src/components/MusicPlayer.js` dan cari bagian `playlist` (sekitar baris 20-75).

### 4. Tambah Lagu Baru
Tambahkan objek baru di dalam array `playlist`:

```javascript
const playlist = [
  // Lagu-lagu yang sudah ada...
  
  // TAMBAHKAN LAGU BARU DI SINI:
  {
    title: 'Judul Lagu',           // Nama lagu yang akan ditampilkan
    artist: 'Nama Artis',          // Nama artis/penyanyi
    src: '/music/nama-file-lagu.mp3',              // Path ke file MP3
    cover: '/music/covers/nama-file-cover.jpeg'    // Path ke file cover
  },
];
```

### 5. Contoh Lengkap
Misalnya mau tambah lagu "Komang" dari Raim Laode:

1. **Copy file ke folder:**
   - Lagu: `public/music/komang.mp3`
   - Cover: `public/music/covers/komang.jpeg`

2. **Edit MusicPlayer.js:**
```javascript
const playlist = [
  {
    title: 'Sedia Aku Sebelum Hujan',
    artist: 'Idgitaf',
    src: '/music/SpotiDown.App - Sedia Aku Sebelum Hujan - Idgitaf.mp3',
    cover: '/music/covers/SpotiDown.App - Sedia Aku Sebelum Hujan - Idgitaf.jpeg'
  },
  // ... lagu-lagu lainnya ...
  
  // LAGU BARU
  {
    title: 'Komang',
    artist: 'Raim Laode',
    src: '/music/komang.mp3',
    cover: '/music/covers/komang.jpeg'
  },
];
```

### 6. Hapus Lagu
Untuk hapus lagu, cukup hapus objek lagu tersebut dari array `playlist`.

Contoh, untuk hapus lagu "33x":
```javascript
// HAPUS BAGIAN INI:
{
  title: '33x',
  artist: 'Perunggu',
  src: '/music/SpotiDown.App - 33x - Perunggu.mp3',
  cover: '/music/covers/SpotiDown.App - 33x - Perunggu.jpeg'
},
```

### 7. Ganti Cover Saja
Jika mau ganti cover tanpa ganti lagu:
1. Replace file cover di folder `public/music/covers/`
2. Atau update path di property `cover`:
```javascript
{
  title: 'Sedia Aku Sebelum Hujan',
  artist: 'Idgitaf',
  src: '/music/SpotiDown.App - Sedia Aku Sebelum Hujan - Idgitaf.mp3',
  cover: '/music/covers/cover-baru.jpeg'  // ← Ganti path cover di sini
},
```

## Tips:
- ✅ Gunakan nama file tanpa spasi atau gunakan dash (-) atau underscore (_)
- ✅ Format cover yang bagus: 1000x1000px, JPEG
- ✅ Pastikan path file benar (case-sensitive)
- ✅ Jangan lupa titik koma (`,`) di akhir setiap objek kecuali yang terakhir
- ✅ Restart dev server (`npm run dev`) setelah update jika perlu

## Troubleshooting:
- **Lagu tidak muncul**: Cek path file apakah benar
- **Cover tidak muncul**: Cek apakah file cover ada di folder `public/music/covers/`
- **Error setelah edit**: Cek syntax JavaScript (kurung kurawal, koma, dll)

---
**Lokasi File Penting:**
- Music Player Component: `src/components/MusicPlayer.js`
- Folder Lagu: `public/music/`
- Folder Cover: `public/music/covers/`