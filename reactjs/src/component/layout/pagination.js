import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Pagination = (props) => {
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        setCount(Math.round(props.count / 12))
    }, [props])

    const pagina = (count) => {
        let result = [];
        for (let i = 1; i <= count; i++) {
            result.push(i);
        }
        return result
    }
    const handleClick = (page) => {
        props.countPage(page);
        setCurrentPage(page);
    }
    return (
        <nav className='navigation' aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                {pagina(count).map((page) => {
                    return (
                        <li key={page}>
                            <Link
                                style={currentPage === page ? { color: '#2563eb', backgroundColor: '#eff6ff', border: '1px solid #d1d5db' } : null}
                                aria-current={page}
                                onClick={() => handleClick(page)}
                                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                {page}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>

    )
}

export default Pagination