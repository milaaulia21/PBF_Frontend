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

export const handleEdit = async (id, nama, nim , prodi, tahunAkademik, judulSkripsi) => {
    try {
        const response = await fetch(`http://localhost:8080/mahasiswa/${id}`,{
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
                    judul_skripsi : judulSkripsi
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