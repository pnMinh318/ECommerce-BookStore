import React from 'react'
import { Spinner } from 'react-bootstrap'
function Spinners() {
    return (
        <>
            <div style={{ textAlign: 'center',margin:'200px 0px' }}>
                <Spinner animation="border" variant="info" size='xl' />
                <h5 >PLEASE WAIT A SEC...</h5>
            </div>
        </>
    )
}

export default Spinners
