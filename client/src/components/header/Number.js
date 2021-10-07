import React from 'react'
import{useState} from 'react'
function Number() {

    const [notifyNumber,setNotifyNumber]=useState(1)

    return (
        <>
            {notifyNumber !==0 && <p style={{float:'right',color:'red'}}>{notifyNumber}</p>}
        </>
    )
}

export default Number
