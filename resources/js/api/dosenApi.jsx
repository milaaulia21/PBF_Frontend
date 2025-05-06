import { jwtDecode } from "jwt-decode";

export const handleDelete = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/dosen/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('gak betul ni bang')
        }

        const result = await response.json()
        return result
    }catch(e){
        console.error(e)
        throw e 
    }
};

export const handleEdit = async (id, nama, nip) => {
    try {
        const response = await fetch(`http://localhost:8080/dosen/${id}`,{
                method: 'PUT',
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama_dosen : nama,
                    nip : nip
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

  export const handleSubmit = async (nama, nip) => {
    const token = localStorage.getItem('token')
    const decodedToken = token ? jwtDecode(token) : null
    try{
        const response = await fetch('http://localhost:8080/dosen',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_dosen: nama,
                nip: nip,
                id_user: parseInt(decodedToken.data.id_user)
            })
        })
        
        const result = await response.json()
        console.log("Response", result)

    }catch(e){
        console.error("Gagal Mengirim Data :", e)
    }

}