export const handleLogin = async (username, password) => {
    try {
        const res = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })

        const data = await res.json()
        console.log(data)
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


export const handleRegister = async (username, password) => {
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
                role: 'mahasiswa'
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