import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchSameType } from '../../redux/slices/sameTypeSlice'
import Search from '../layout/search';
import { Link } from 'react-router-dom';
const Category = () => {
    const { params } = useParams();
    const dispatch = useDispatch()
    const data = useSelector(state => state?.sameType?.sameTypeBook?.bookData?.rows)
    console.log(data);
    useEffect(() => {
        dispatch(fetchSameType(params))
    }, [params, dispatch])
    return (
        <div className=" bg-white search mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <Search />
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data?.map((product) => (
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

export default Category