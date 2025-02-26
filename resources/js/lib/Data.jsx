const dataRuangan = [
    {
      "id_ruangan": 1,
      "kode_ruangan": "R101",
      "nama_ruangan": "Ruang Sidang 1"
    },
    {
      "id_ruangan": 2,
      "kode_ruangan": "R102",
      "nama_ruangan": "Ruang Sidang 2"
    },
    {
      "id_ruangan": 3,
      "kode_ruangan": "R103",
      "nama_ruangan": "Ruang Sidang 3"
    },
    {
      "id_ruangan": 4,
      "kode_ruangan": "R104",
      "nama_ruangan": "Ruang Seminar A"
    },
    {
      "id_ruangan": 5,
      "kode_ruangan": "R105",
      "nama_ruangan": "Ruang Seminar B"
    },
    {
      "id_ruangan": 6,
      "kode_ruangan": "R106",
      "nama_ruangan": "Ruang Presentasi 1"
    },
    {
      "id_ruangan": 7,
      "kode_ruangan": "R107",
      "nama_ruangan": "Ruang Presentasi 2"
    },
    {
      "id_ruangan": 8,
      "kode_ruangan": "R108",
      "nama_ruangan": "Ruang Diskusi"
    },
    {
      "id_ruangan": 9,
      "kode_ruangan": "R109",
      "nama_ruangan": "Ruang Rapat Kecil"
    },
    {
      "id_ruangan": 10,
      "kode_ruangan": "R110",
      "nama_ruangan": "Ruang Rapat Besar"
    }
  ]

  const dataDosen = [
    {
        "id_dosen": 1,
        "nama_dosen": "Prih Diantono",
        "nip": 198012345
    },
    {
        "id_dosen": 2,
        "nama_dosen": "Muhammad Ramadani",
        "nip": 198012346
    },
    {
        "id_dosen": 3,
        "nama_dosen": "Ahmad Fauzi",
        "nip": 198012347
    },
    {
        "id_dosen": 4,
        "nama_dosen": "Dewi Anjani",
        "nip": 198012348
    },
    {
        "id_dosen": 5,
        "nama_dosen": "Siti Rahmawati",
        "nip": 198012349
    },
    {
        "id_dosen": 6,
        "nama_dosen": "Andi Wijaya",
        "nip": 198012350
    },
    {
        "id_dosen": 7,
        "nama_dosen": "Budi Hartono",
        "nip": 198012351
    },
    {
        "id_dosen": 8,
        "nama_dosen": "Citra Anggraini",
        "nip": 198012352
    },
    {
        "id_dosen": 9,
        "nama_dosen": "Dedi Santoso",
        "nip": 198012353
    },
    {
        "id_dosen": 10,
        "nama_dosen": "Eka Prasetyo",
        "nip": 198012354
    }
]

const dataMahasiswa = [
    {
        "id_mhs": 1,
        "nama_mhs": "Bikra Abna",
        "nim": 220101,
        "prodi_mhs": "Informatika",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Sistem Penjadwalan Sidang Skripsi Otomatis"
    },
    {
        "id_mhs": 2,
        "nama_mhs": "Muhammad Hasan",
        "nim": 220102,
        "prodi_mhs": "Informatika",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Optimasi Algoritma Penjadwalan"
    },
    {
        "id_mhs": 3,
        "nama_mhs": "Dewi Lestari",
        "nim": 220103,
        "prodi_mhs": "Informatika",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Pengembangan Sistem Pakar Diagnosa Penyakit"
    },
    {
        "id_mhs": 4,
        "nama_mhs": "Andi Saputra",
        "nim": 220104,
        "prodi_mhs": "Teknik Elektro",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Analisis Kinerja Panel Surya"
    },
    {
        "id_mhs": 5,
        "nama_mhs": "Siti Aminah",
        "nim": 220105,
        "prodi_mhs": "Teknik Mesin",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Desain Prototipe Mesin Pengering Padi"
    },
    {
        "id_mhs": 6,
        "nama_mhs": "Rudi Hartono",
        "nim": 220106,
        "prodi_mhs": "Informatika",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Implementasi Machine Learning di Prediksi Cuaca"
    },
    {
        "id_mhs": 7,
        "nama_mhs": "Lina Kurniawati",
        "nim": 220107,
        "prodi_mhs": "Teknik Sipil",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Studi Kelayakan Struktur Jembatan Baja"
    },
    {
        "id_mhs": 8,
        "nama_mhs": "Budi Santoso",
        "nim": 220108,
        "prodi_mhs": "Teknik Elektro",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Optimasi Sistem Distribusi Listrik"
    },
    {
        "id_mhs": 9,
        "nama_mhs": "Ani Wijayanti",
        "nim": 220109,
        "prodi_mhs": "Informatika",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Rancang Bangun Aplikasi Absensi Online"
    },
    {
        "id_mhs": 10,
        "nama_mhs": "Dani Pratama",
        "nim": 220110,
        "prodi_mhs": "Teknik Mesin",
        "thn_akademik": "2024/2025",
        "judul_skripsi": "Inovasi Teknologi Pendingin Ramah Lingkungan"
    }
]


const dataJadwal = [
    {
      "id_sidang": 1,
      "nama_mahasiswa": "Bikra Abna",
      "nama_ruangan": "Ruang Sidang 1",
      "tanggal_sidang": "2024-12-01",
      "waktu_mulai": "08:00:00",
      "waktu_selesai": "10:00:00",
      "status": "Selesai"
    },
    {
      "id_sidang": 2,
      "nama_mahasiswa": "Muhammad Hasan",
      "nama_ruangan": "Ruang Sidang 2",
      "tanggal_sidang": "2024-12-02",
      "waktu_mulai": "09:00:00",
      "waktu_selesai": "11:00:00",
      "status": "Selesai"
    },
    {
      "id_sidang": 3,
      "nama_mahasiswa": "Ramadani Putra",
      "nama_ruangan": "Ruang Sidang 3",
      "tanggal_sidang": "2024-12-03",
      "waktu_mulai": "10:00:00",
      "waktu_selesai": "12:00:00",
      "status": "Proses"
    },
    {
      "id_sidang": 4,
      "nama_mahasiswa": "Dewi Anjani",
      "nama_ruangan": "Ruang Sidang 4",
      "tanggal_sidang": "2024-12-04",
      "waktu_mulai": "13:00:00",
      "waktu_selesai": "15:00:00",
      "status": "Dijadwalkan"
    },
    {
      "id_sidang": 5,
      "nama_mahasiswa": "Siti Rahmawati",
      "nama_ruangan": "Ruang Sidang 5",
      "tanggal_sidang": "2024-12-05",
      "waktu_mulai": "14:00:00",
      "waktu_selesai": "16:00:00",
      "status": "Dijadwalkan"
    },
    {
      "id_sidang": 6,
      "nama_mahasiswa": "Andi Wijaya",
      "nama_ruangan": "Ruang Sidang 6",
      "tanggal_sidang": "2024-12-06",
      "waktu_mulai": "08:30:00",
      "waktu_selesai": "10:30:00",
      "status": "Selesai"
    },
    {
      "id_sidang": 7,
      "nama_mahasiswa": "Budi Hartono",
      "nama_ruangan": "Ruang Sidang 7",
      "tanggal_sidang": "2024-12-07",
      "waktu_mulai": "09:30:00",
      "waktu_selesai": "11:30:00",
      "status": "Proses"
    },
    {
      "id_sidang": 8,
      "nama_mahasiswa": "Citra Anggraini",
      "nama_ruangan": "Ruang Sidang 8",
      "tanggal_sidang": "2024-12-08",
      "waktu_mulai": "13:30:00",
      "waktu_selesai": "15:30:00",
      "status": "Dijadwalkan"
    },
    {
      "id_sidang": 9,
      "nama_mahasiswa": "Dedi Santoso",
      "nama_ruangan": "Ruang Sidang 9",
      "tanggal_sidang": "2024-12-09",
      "waktu_mulai": "14:30:00",
      "waktu_selesai": "16:30:00",
      "status": "Dijadwalkan"
    },
    {
      "id_sidang": 10,
      "nama_mahasiswa": "Eka Prasetyo",
      "nama_ruangan": "Ruang Sidang 10",
      "tanggal_sidang": "2024-12-10",
      "waktu_mulai": "08:00:00",
      "waktu_selesai": "10:00:00",
      "status": "Proses"
    }
  ]


export default { dataDosen, dataMahasiswa, dataRuangan, dataJadwal }