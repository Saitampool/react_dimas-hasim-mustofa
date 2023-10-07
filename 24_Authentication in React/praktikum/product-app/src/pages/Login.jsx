/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const handleLogin = (e) => {
        e.preventDefault();
        const dummyUser = { username: 'dimas', password: '123456' };
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.username === username && user.password === password) {
            localStorage.setItem('isLoggedIn', true);
            Swal.fire({
                icon:'success',
                title: 'Berhasil login',
                confirmButtonText: "OK"
              })
            navigate('/product');
        } else if (username === dummyUser.username && password === dummyUser.password) {
            localStorage.setItem('user', JSON.stringify(dummyUser));
            localStorage.setItem('isLoggedIn', true);
            Swal.fire({
                icon:'success',
                title: 'Berhasil login',
                confirmButtonText: "OK"
              })
            navigate('/product');
        } else {
        setErrorMessage('Invalid username or password');
        }
    };

    return (
    <section className="flex justify-center items-center w-screen h-screen">
        <form onSubmit={handleLogin} className="flex flex-col gap-y-2">
            <label>Email</label>
            <input
                placeholder='email...'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-3 w-60 h-10 rounded-md bg-white border border-blue-500 focus:outline-none"
            />
            <label>Password</label>
            <input
                placeholder='password...'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-60 h-10 rounded-md bg-white border border-blue-500 focus:outline-none"
            />
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            <div className="h-10 mt-6">
                <button
                    type="submit"
                    className="w-full h-full bg-blue-500 text-white border-none focus:outline-none rounded-full flex items-center justify-center"
                    >
                    Login
                </button>
            </div>
            
        </form>
    </section>
    )
}

export default Login