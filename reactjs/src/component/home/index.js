import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchUser } from '../../redux/slices/userSlice'
import './style.scss';
// import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    // const dispatch = useDispatch()
    // const user = useSelector(state => state.login.token)
    // console.log(user);
    // console.log(window.localStorage.getItem('auth'))
    // let navigate = useNavigate();
    // useEffect(() => {
    //     dispatch(fetchUser(user))
    //     // if (token === null) {
    //     //     navigate('login')
    //     //     return
    //     // }
    // }, [])
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
                <a href="/login">login</a>
            </div>

        </div>
    )
}

export default Home