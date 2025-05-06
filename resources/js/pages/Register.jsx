import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { handleRegister } from '../api/authApi';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmator, setPasswordConfirmator] = useState('');
    const [role, setRole] = useState('mahasiswa');
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirm: false
    });

    const togglePassword = (field) => {
        setShowPassword(prev => ({ ...prev, [field]: !prev[field] }));
    }

    const navigate = useNavigate();

    const handleRegisterWrapper = async (e) => {
        e.preventDefault();

        if (password.length < 8) {
            alert('Password harus minimal 8 karakter');
            return;
        }

        if (password !== passwordConfirmator) {
            alert('Konfirmasi password tidak sesuai');
            return;
        }

        await handleRegister(username, password, role)

        navigate(`/`);
    };

    return (
        <div className="min-h-[100dvh] min-w-[100dvw] bg-slate-100 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl flex flex-col justify-center overflow-hidden">
                <div className="px-1 py-4 bg-slate-800">
                    <h1 className="text-white text-center py-2 font-bold text-xl">REGISTRASI</h1>
                </div>
                <form
                    className="flex flex-col space-y-6 p-8"
                    onSubmit={handleRegisterWrapper}>
                    <div className="flex flex-col space-y-6 my-4">
                        <div className='space-y-2'>
                            <label htmlFor="username" className='block font-medium text-sm text-slate-700'>Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent" 
                                placeholder="JohnDoe123" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="password" className='block font-medium text-sm text-slate-700'>Password</label>
                            <div className='relative'>
                                <input 
                                    type={showPassword.password ? 'text' : 'password'} 
                                    id="password" 
                                    className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent" 
                                    placeholder="••••••••" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                                <button 
                                    type='button' 
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-slate-700' 
                                    onClick={() => togglePassword('password')}
                                >
                                    {showPassword.password ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                                </button>
                            </div>
                            <p className="text-xs text-slate-500">Minimal 8 karakter</p>
                        </div>

                        <div className='space-y-2'>
                            <label htmlFor="passwordConfirmator" className='block font-medium text-sm text-slate-700'>Konfirmasi Password</label>
                            <div className='relative'>
                                <input 
                                    type={showPassword.confirm ? 'text' : 'password'} 
                                    id="passwordConfirmator" 
                                    className="border w-full px-4 py-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent" 
                                    placeholder="••••••••" 
                                    value={passwordConfirmator}
                                    onChange={(e) => setPasswordConfirmator(e.target.value)}
                                    required 
                                />
                                <button 
                                    type='button' 
                                    className='absolute inset-y-0 right-0 pr-3 flex items-center text-slate-700' 
                                    onClick={() => togglePassword('confirm')}
                                >
                                    {showPassword.confirm ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="role" className='block font-medium text-sm text-slate-700'>Register Sebagai : </label>
                            <select 
                                name="role" 
                                id="role" 
                                value={role} 
                                onChange={(e) => setRole(e.target.value)} 
                                className="border w-full px-3 py-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent text-slate-700" 
                                required
                            >
                                <option value="">Login Sebagai :</option>
                                <option value="mahasiswa">Mahasiswa</option>
                                <option value="dosen">Dosen</option>
                            </select>
                        </div>
                    </div>
                    <button 
                        className='w-full bg-slate-900 text-white py-3 rounded-lg font-medium self-center px-9 mb-5 mt-10 hover:opacity-90 ease-in-out transition-all duration-150 focus:ring-2 focus:ring-offset-2 focus:ring-slate-600' 
                        type='submit'
                        onClick={() => handleRegisterWrapper}
                    >
                        BUAT AKUN
                    </button>
                    <div className='text-sm text-center text-slate-600'>
                        Sudah Punya Akun?{' '}
                        <span 
                            className="ms-2 text-sky-600 hover:opacity-70 ease-in-out transition-all duration-150 cursor-pointer"
                            onClick={() => navigate('/')}
                        >
                            Login
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}