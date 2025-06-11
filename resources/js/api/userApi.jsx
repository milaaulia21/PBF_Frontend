export const handleDelete = async(id) => {
    try{
        const response = await fetch(`http://localhost:8080/users/${id}`, {
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

    }catch(e){
        console.error('Gagal Menghapus Data :', e)
        throw e
    }
}

export const handleUpdateIsAdmin = async (id, isAdmin) => {
    try{
        const response = await fetch(`http://localhost:8080/users/${id}/isAdmin`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                isAdmin: isAdmin === 'N' ? 'Y' : 'N'
            })
        })

        if (!response.ok) {
            throw new Error('Gak betul ini bang updatenya')
        }

        const result = await response.json()
        return result
    }catch(e){
        throw e
    }
}

export const handleGetNotification = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/notification?user_id=${id}`, {
            method: 'GET',
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

export const handleDeleteNotification = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/notification/${id}`, {
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