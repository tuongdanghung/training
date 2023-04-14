import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { fetchRegister } from '../../redux/slices/registerSlice'
import { useDispatch, useSelector } from 'react-redux';
const Register = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [city, setCity] = useState("")
    const [nation, setCountry] = useState("")
    const [street, setStreet] = useState("")
    const [error, setError] = useState("")
    const dt = useSelector(state => state.register.userRegister)
    useEffect(() => {
        if (dt?.err === 0) {
            navigate('/login');
        }
    }, [dt])
    const handleCreate = (e) => {
        e.preventDefault();
        dispatch(fetchRegister({ name, email, password, city, nation, street }))
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-sky-700 uppercase">
                    Register
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="mb-2">
                            <label
                                htmlFor="city"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                City
                            </label>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="country"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Country
                            </label>
                            <input
                                onChange={(e) => setCountry(e.target.value)}
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-500 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="Street"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Street
                        </label>
                        <input
                            onChange={(e) => setStreet(e.target.value)}
                            type="Street"
                            className="block w-full px-4 py-2 mt-2 text-sky-500 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link
                        to="#"
                        className="text-xs text-sky-600 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-6">
                        <button onClick={(e) => handleCreate(e)} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600">
                            Register
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    Do you already have an account?
                    <Link
                        to="/login"
                        className="font-medium text-sky-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register