export const handleDaftarSidang = async (profile) => {
    try {
        const response = await fetch('http://localhost:8080/sidang', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_mhs : profile.id_mhs,
            })
        })

        if (!response.ok) {
            throw new Error('Gak betul ini bang editnya')
        }

        const result = await response.json()
        console.log(result)
        return result
    } catch (e) {
        console.error('Gagal Menghapus Data :', e)
        throw e
    }
}

export const updateStatusSidang = async (id, status) => {
    try{
        const response = await fetch(`http://localhost:8080/sidang/update-status/${id}`, {
            method: 'PUT',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status : status
            })
        })

        const result = await response.json()
        console.log(result)
        return result
    }catch(e){
        console.error('Gagal Mengupdate Data :', e)
    }
}