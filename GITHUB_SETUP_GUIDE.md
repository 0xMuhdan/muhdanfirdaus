# Panduan Upload Project ke GitHub

## Langkah 1: Install Git

1. Download Git dari [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Install dengan pengaturan default
3. Restart PowerShell/Terminal setelah instalasi selesai

## Langkah 2: Konfigurasi Git (Hanya sekali)

Buka PowerShell dan jalankan perintah berikut:

```powershell
git config --global user.name "Nama Anda"
git config --global user.email "email@anda.com"
```

Ganti "Nama Anda" dan "email@anda.com" dengan nama dan email GitHub Anda.

## Langkah 3: Buat Repository di GitHub

1. Buka [GitHub](https://github.com)
2. Login ke akun Anda
3. Klik tombol "+" di pojok kanan atas, pilih "New repository"
4. Isi detail repository:
   - **Repository name:** portfolio-muhdan (atau nama lain yang Anda inginkan)
   - **Description:** "Personal portfolio website showcasing my projects and skills"
   - **Public/Private:** Pilih Public jika ingin orang lain bisa melihat
   - **JANGAN** centang "Initialize this repository with a README" (karena sudah ada)
5. Klik "Create repository"

## Langkah 4: Upload Project ke GitHub

Setelah Git terinstall, buka PowerShell di folder project ini dan jalankan perintah berikut satu per satu:

### 4.1 Inisialisasi Git Repository

```powershell
git init
```

### 4.2 Tambahkan Semua File

```powershell
git add .
```

### 4.3 Commit Pertama

```powershell
git commit -m "Initial commit: Portfolio website"
```

### 4.4 Tambahkan Remote Repository

Ganti `YOUR_USERNAME` dan `YOUR_REPO_NAME` dengan username GitHub dan nama repository Anda:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

Contoh:
```powershell
git remote add origin https://github.com/muhdanfirdaus/portfolio-muhdan.git
```

### 4.5 Push ke GitHub

```powershell
git branch -M main
git push -u origin main
```

Anda akan diminta memasukkan username dan password GitHub. 

**Catatan:** Untuk password, gunakan **Personal Access Token** (bukan password akun):
- Buka GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token
- Pilih scope: `repo` (full control of private repositories)
- Copy token dan gunakan sebagai password

## Langkah 5: Verifikasi

1. Buka repository Anda di GitHub
2. Refresh halaman
3. Semua file project seharusnya sudah muncul

## Update Project di Masa Depan

Setelah melakukan perubahan pada project, gunakan perintah berikut untuk update ke GitHub:

```powershell
# Tambahkan file yang berubah
git add .

# Commit dengan pesan
git commit -m "Deskripsi perubahan yang Anda buat"

# Push ke GitHub
git push
```

## Tips Tambahan

### Melihat Status File
```powershell
git status
```

### Melihat History Commit
```powershell
git log
```

### Membatalkan Perubahan
```powershell
# Membatalkan perubahan file yang belum di-commit
git checkout -- nama-file

# Membatalkan semua perubahan
git reset --hard
```

### Membuat Branch Baru
```powershell
# Buat dan pindah ke branch baru
git checkout -b nama-branch

# Push branch baru ke GitHub
git push -u origin nama-branch
```

## Troubleshooting

### Error: "git is not recognized"
- Pastikan Git sudah terinstall
- Restart PowerShell/Terminal
- Cek instalasi: `git --version`

### Error: "Permission denied"
- Pastikan menggunakan Personal Access Token, bukan password
- Cek apakah token memiliki scope yang benar

### Error: "Repository not found"
- Pastikan URL remote sudah benar
- Cek dengan: `git remote -v`
- Update jika salah: `git remote set-url origin URL_YANG_BENAR`

### File Besar Tidak Ter-upload
- GitHub memiliki limit 100MB per file
- Gunakan Git LFS untuk file besar
- Atau simpan file besar di cloud storage (Cloudinary, AWS S3, dll)

---

**Selamat! Project Anda sekarang sudah di GitHub! 🎉**

Jangan lupa untuk update README.md dengan:
- Link repository yang benar
- Email dan social media Anda
- Screenshot atau demo link jika sudah deploy