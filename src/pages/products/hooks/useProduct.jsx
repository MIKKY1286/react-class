import React, { useEffect, useState } from "react";
const useProduct = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [query, SetQuery] = useState("");
    const [sort, setSort] = useState("");
    const baseUrl = "https://fakestoreapi.com";
    const [products, setProducts] = useState([]);
  
    const handleInput = (e) => {
      SetQuery(e.target.value);
    };
  
    //  state updates in React are asynchronous
    const handleSearch = () => {
      setSearch(query);
    };
    useEffect(() => {
      fetchProducts();
    }, [search, sort]);
  
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${baseUrl}/products`);
        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  return {
    handleInput,
    handleSearch,
    products,
    isLoading
  }
}

export default useProduct