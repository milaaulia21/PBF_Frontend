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