import { useContext, useEffect } from "react"
import useDashboard from "./hooks/useDashboard"
import { productContext } from "../../contexts/ProductContext"



const Dashboard = () => {
    const {user} = useDashboard()
    const {products, fetchProducts} = useContext(productContext)
    console.log(products);
    useEffect(()=>{
        fetchProducts()
    },[])
    

    return (
    <div>
        <nav>
            <p>Good morning, {user?.name}</p>
            {
                products.data?.map(product => (
                    <div>
                        <h1>{product.name}</h1>
                    </div>
                ))
            }
        </nav>
    </div>
  )
}

export default Dashboard

const styles = {
    container: {
        padding: '5rem '
    }
}
