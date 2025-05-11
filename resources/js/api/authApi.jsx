export const handleLogin = async (username, password) => {
    try {
        const res = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const data = await res.json()
        localStorage.setItem('token', data.token)

        if (!res.ok) {
            const errorData = data
            throw new Error(errorData.message || 'Username atau password salah')
        }

        return data
    } catch (e) {
        console.error('Gagal Login :', e)
        return null
    }
}


export const handleRegister = async (username, password, role) => {
    try {
        const res = await fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                role: role
            })
        })

        const data = await res.json()

        if(!res.ok){
            throw new Error(data?.message || 'Username sudah digunakan');
        }

        return data
    } catch (e) {
        console.error('Gagal Register :', e)
    }
}

export const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    window.location.reload()
}

export const getProfile = async () => {
    try{
        const token = localStorage.getItem('token')
        const res = await fetch('http://localhost:8080/auth/profile', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()

        if(!res.ok){
            throw new Error(data?.message || 'Gagal mengambil data profile');
        }

        return data
    }catch(e){
        console.error('Gagal mengambil data profile :', e)
    }
}