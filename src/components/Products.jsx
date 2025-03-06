import React, { useEffect, useState } from 'react'

const Products = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [query, SetQuery] = useState('')
    const [sort, setSort] = useState('')
    const baseUrl = 'https://fakestoreapi.com'

    const handleInput = (e) => {
        SetQuery(e.target.value)
        console.log(query);
    }

    //  state updates in React are asynchronous
    const handleSearch = () => {
        setSearch(query)
    }
    useEffect(() => {
        fetchProducts()
    }, [search, sort]) // revoke every time the state changes

    const fetchProducts = async () => {
        setIsLoading(true)
        try {
            const res = await fetch(`${baseUrl}/products`)
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <div>
                <input type="search" onChange={handleInput} />

                <button onClick={handleSearch}>Search</button>
            </div>
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <h1>Product title</h1>
                    </div>
                )
            }
            <button>Get products</button>
        </div>
    )
}

export default Products