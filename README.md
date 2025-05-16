# 🧑‍🎓 Frontend Penjadwalan Sidang – Laravel + React

Ini adalah **frontend aplikasi penjadwalan sidang skripsi** berbasis **Laravel + React**, menggunakan **Vite** untuk bundling. React digunakan sebagai view layer, disajikan oleh Laravel.

---

## 🧰 Teknologi yang Digunakan

- Laravel 12
- React 19 (via Laravel Vite)
- Tailwind CSS + DaisyUI
- Pusher (Notifikasi real-time)
- JWT Auth (integrasi backend)

---

## ⚡ Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/milaaulia21/PBF_Frontend -b new-branch
cd PBF-Frontend
```

### 2. Install Dependensi Laravel

```bash
composer install
```
### 3. Install Dependensi React (Node.js)

```bash
npm install
```
### 4. Copy File Environtment

```bash
cp .env.example .env
php artisan key:generate
```
### 5. Jalankan Migrations

```bash
php artisan migrate
```
### 6. Jalankan Concurrently via composer
```bash
composer run dev
```

