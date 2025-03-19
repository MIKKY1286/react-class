import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
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

  return (
    <div>
      <div>
        <input type="search" onChange={handleInput} />

        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Products</h1>
          {/* products */}
          <section>
            {
                products?.map((item, index)=>(
                    <Link to={`/products/${item.id}`}>
                        <img src={item.image} alt="" width={200}/>
                        <h1>{item.title}</h1>
                        <span>{item.price}</span>
                        <p>{item.category}</p>
                    </Link>
                ))
            }
          </section>
          {/* end of products */}
        </div>
      )}
      <button>Get products</button>
    </div>
  );
};

export default Products;
