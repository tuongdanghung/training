import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import { fetchOneBook } from '../../redux/slices/bookSlice'
import { useParams } from 'react-router-dom';
import Rating from '../layout/rating';
import Slider from '../layout/slider';
const Book = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const book = useSelector(state => state?.book?.books?.rows)
    const category = book && book[0].category_code;
    useEffect(() => {
        dispatch(fetchOneBook(id))
    }, [id])
    return (
        // <div>Book {book && book[0].title}</div>
        <div className=" bg-white search mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 mb-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                <div className="group relative">
                    <div className="box-img min-h-80 p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-85">
                        <img
                            src={book && book[0].image}
                            alt={book && book[0].title}
                            className=" object-cover object-center mx-auto"
                        />
                    </div>
                </div>
                <div className="group relative">
                    <div className="flex justify-between">
                        <div>
                            <h1 className='text-3xl mb-4' title={book && book[0].title}>{book && book[0].title}</h1>
                            <p className="text-3xl font-medium text-red-500 mb-4">£ {book && book[0].price}</p>
                            <span className=' text-green-500 font-semibold flex mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                In stock ({book && book[0].available} available)
                            </span>
                            <Rating />
                            <hr className='my-8' />
                            <div className="alert alert-warning bg-amber-200 text-yellow-800 p-2 rounded-md border border-solid border-amber-700" role="alert"><strong>Warning!</strong>
                                This is a demo website for web scraping purposes. Prices and ratings here were randomly
                                assigned and have no real meaning.</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-3xl mb-4 mt-9'>Product Description</p>
            <hr className='mb-4' />
            <p>
                {book && book[0].description}
            </p>
            <p className='text-3xl mb-4 mt-9'>Product Information</p>
            <hr className='mb-4' />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <tbody>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                UPC
                            </th>
                            <td className="px-6 py-4">	{book && book[0].id}</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Product Type
                            </th>
                            <td className="px-6 py-4">Book</td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Price (excl. tax)
                            </th>
                            <td className="px-6 py-4">{book && book[0].price}</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Price (incl. tax)
                            </th>
                            <td className="px-6 py-4">{book && book[0].price}</td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Tax
                            </th>
                            <td className="px-6 py-4">£0.00</td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Availability
                            </th>
                            <td className="px-6 py-4">In stock ({book && book[0].available} available)</td>
                        </tr>
                        <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                Number of reviews
                            </th>
                            <td className="px-6 py-4">	0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p className='text-3xl mb-4 mt-9'>Several books of the same type</p>
            <hr className='mb-4' />
            <Slider category_code={category} />
        </div>
    )
}

export default Book