
import { Link } from "react-router-dom";
import useProduct from "./hooks/useProduct";

const Products = () => {
  const {products, handleInput, handleSearch, isLoading} = useProduct()
  
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
                    <Link to={`/products/${item.id}`} key={index}>
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
