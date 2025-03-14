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

