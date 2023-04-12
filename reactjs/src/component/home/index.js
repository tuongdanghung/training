import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/slices/userSlice'
import './style.scss';
const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.listUsers.bookData)
    console.log(user);
    console.log(Math.ceil(user?.count / user?.rows.length));
    useEffect(() => {
        dispatch(fetchUser())
    }, [])
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