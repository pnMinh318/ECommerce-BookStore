import React, { useState } from 'react'


function SearchBox({ history,location }) {
    const query = location.search ? location.search.split('?q=')[1] : ''
    const [search, setSearch] = useState(query)


    const submitHandler = (e) =>{
        e.preventDefault()
        if(search.trim()){
            history.push(`/search?q=${search}`)
        }else{
            history.push('/products')
        }
    }

    
    return (
        <div>
            <form className='text-right'
                onSubmit={(e) => submitHandler(e)}>
                <input className='search__input'
                    autoComplete='off'
                    onChange={(e)=>setSearch(e.target.value)}
                    placeholder='Sách bạn muốn tìm'
                    name='search__input'
                    value={search || ''}
                ></input>
                <button className='search__input' type='submit'> Tìm</button>
            </form>
        </div>
    )
}

export default SearchBox
