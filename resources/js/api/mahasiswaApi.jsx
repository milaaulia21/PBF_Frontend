import { jwtDecode } from "jwt-decode"


export const handleDelete = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/mahasiswa/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': "application/json",
            }
        })

        if (!response.ok) {
            throw new Error('Gak betul ini bang deletenya')
        }

        const result = await response.json()
        return result
    } catch (e) {
        console.error('Gagal Menghapus Data :', e)
        throw e
    }
}

export const handleEdit = async (id, nama, nim, prodi, tahunAkademik, judulSkripsi) => {
    try {
        const response = await fetch(`http://localhost:8080/mahasiswa/${id}`, {
            method: 'PUT',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_mhs: nama,
                nim: nim,
                prodi_mhs: prodi,
                thn_akademik: tahunAkademik,
                judul_skripsi: judulSkripsi
            })
        })

        if (!response.ok) {
            throw new Error('Gak betul ini bang editnya')
        }

        const result = await response.json()
        return result
    } catch (e) {
        console.error('Gagal Menghapus Data :', e)
        throw e
    }
}

export const handleSubmit = async (nama, nim, prodi, tahunAkademik, judulSkripsi) => {
    const token = localStorage.getItem('token')
    const decodedToken = token ? jwtDecode(token) : null
    try {
        const response = await fetch('http://localhost:8080/mahasiswa', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_mhs: nama,
                nim: nim,
                prodi_mhs: prodi,
                thn_akademik: tahunAkademik,
                judul_skripsi: judulSkripsi,
                id_user: parseInt(decodedToken?.data.id_user)
            })
        })

        const result = await response.json()
        console.log("Response", result)
    } catch (e) {
        console.error("Gagal Mengirim Data :", e)
    }

}