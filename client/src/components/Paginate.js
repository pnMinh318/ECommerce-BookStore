import React from 'react'
import { Pagination, PageItem } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
function Paginate({ pages, page, history, isAdmin = false, query = '' }) {
    return (
        pages > 1 && (
            <Pagination size='20px' className='justify-content-center'>
                {
                    [...Array(pages).keys()].map((x) => {
                        return (
                            // <Link key={x + 1} to={`/page/${x + 1}`}>
                            <PageItem  
                                key={x + 1}
                                active={x + 1 === page}
                                onClick={() => history.push(`/page/${x + 1}`)}
                            >{x + 1}</PageItem>
                            // </Link>
                        )
                    }
                    )
                }
            </Pagination>
        )
    )
}

export default Paginate
