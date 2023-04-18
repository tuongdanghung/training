import React, { useEffect } from 'react'
import Slider from "react-slick"
import { fetchSameType } from '../../redux/slices/sameTypeSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import './index.scss'
const Carousel = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        className: "myCustomCarousel",
    };
    const sameTypeBook = useSelector(state => state?.sameType?.sameTypeBook?.bookData?.rows)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchSameType(props.category_code))
    }, [props.category_code], dispatch)
    return (
        <div className='w-4/5 mx-auto'>
            <Slider {...settings}>
                {sameTypeBook && sameTypeBook.map((item, index) => {
                    return (
                        <div key={index} className="group relative">
                            <div className="min-h-60 p-2 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-65">
                                <div>
                                    <img
                                        src={item && item.image}
                                        alt={item && item.title}
                                        className=" object-cover img-cover object-center mx-auto border border-solid border-sky-700"
                                    />
                                    <Link to={`/book/${item && item.id}`} className='p-2 title_type' title={item && item.title}>{item && item.title}</Link>
                                    <p className='title_type text-red-500 text-right'>{item && item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Carousel