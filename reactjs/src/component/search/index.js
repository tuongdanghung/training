import React, { useEffect, useState } from 'react'
import { fetchSearch } from '../../redux/slices/searchSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Search from '../layout/search';
const SearchKeyword = () => {
    const { params } = useParams();
    const books = useSelector(state => state.search.searchBook?.bookData?.rows)
    console.log(books);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSearch(params))
    }, [params, dispatch])
    return (
        <div className=" bg-white search mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Search />
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {books?.map((product) => (
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
        </div>
    )
}

export default SearchKeyword