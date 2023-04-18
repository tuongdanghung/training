import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBook } from '../../redux/slices/bookSlice'
import './style.scss';
import Search from '../layout/search';
import Pagination from '../layout/pagination';
import { Link } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    const dispatch = useDispatch()
    const [newPage, setNewPage] = useState(1)
    const books = useSelector(state => state.book.books?.bookData)
    const countPage = (page) => {
        setNewPage(page)
    }
    useEffect(() => {
        dispatch(fetchBook(newPage))
    }, [dispatch, newPage])
    return (
        <div className=" bg-white search mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Search />
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {books?.rows.map((product) => (
                    <Link to={`/book/${product.id}`} key={product.id} className="group relative">
                        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <p className='book-title' title={product.title}>{product.title}</p>
                                <p className="text-sm font-medium text-red-500">{product.price}</p>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
            <Pagination count={books?.count} length={books?.rows.length} countPage={countPage} />
        </div>
    )
}

export default Home