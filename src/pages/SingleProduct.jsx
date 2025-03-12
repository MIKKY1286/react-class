import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
const SingleProduct = () => {
    const {id} = useParams()
    const baseUrl = "https://fakestoreapi.com";

    useEffect(()=>{
        fetchProduct()
    }, [])
    const fetchProduct = async () => {

        try {
          const res = await fetch(`${baseUrl}/products/${id}`);
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        } 
      };
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct