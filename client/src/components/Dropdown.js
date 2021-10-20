import React, { useState } from 'react'

function Dropdown({content,toggle}) {

    const [isOpen,setIsOpen] = useState(false)

    const toggleDropdown= ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div classname='navbar-dropdown-content'>
            <div>

            </div>
        </div>
    )
}

export default Dropdown
