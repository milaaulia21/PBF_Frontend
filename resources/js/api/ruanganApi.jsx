export const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/ruangan/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': "application/json",
      }
    })

    if (!response.ok) {
      throw new Error('Gagal menghapus data');
    }

    const result = await response.json()
    return result

  } catch (e) {
    console.error('Gagal Menghapus Data :', e)
    throw e
  }
}

export const handleEdit = async (id, kode_ruangan, nama_ruangan) => {
  try {
      const response = await fetch(`http://localhost:8080/ruangan/${id}`,{
              method: 'PUT',
              mode: "cors",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  kode_ruangan : kode_ruangan,
                  nama_ruangan : nama_ruangan
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