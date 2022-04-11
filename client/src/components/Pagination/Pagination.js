import React from 'react'

import { Link } from 'react-router-dom'
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'

import { SPagination } from './Pagination.elements'

export default function Pagination({ count, page, pageLimit, url }) {
    let totalPages = Math.ceil(count / pageLimit)
    let startLoop = page
    let diff = totalPages - page

    if (diff <= 3) {
        startLoop = totalPages - 3
    }
    let endLoop = startLoop + 3

    if (startLoop <= 0) {
        startLoop = 1
    }

    const links = () => {
        const store = []
        for (let i = startLoop; i <= endLoop; i++) {
            store.push(
                <li
                    key={i}
                    className={i === parseInt(page) ? 'active-page' : ''}
                >
                    <Link to={`/${url}/${i}`}>{i}</Link>
                </li>
            )
        }
        return store
    }

    const next = () => {
        if (page < totalPages) {
            return (
                <li>
                    <Link to={`/${url}/${parseInt(page) + 1}`}>
                        <BsChevronDoubleRight />
                    </Link>
                </li>
            )
        }
    }

    const prev = () => {
        if (page > 1) {
            return (
                <li>
                    <Link to={`/${url}/${parseInt(page) - 1}`}>
                        <BsChevronDoubleLeft />
                    </Link>
                </li>
            )
        }
    }
    return totalPages ? (
        <SPagination>
            {prev()}
            {links()}
            {next()}
        </SPagination>
    ) : (
        ''
    )
}
