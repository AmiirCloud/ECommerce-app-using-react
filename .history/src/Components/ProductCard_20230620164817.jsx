import React from 'react'
import { useParams } from 'react-router-dom';
function ProductCard(props){
const parmas  = useParams();
const { products } =  props;

const selectedProduct  = products.find((product)=> product.id === Number(parmas.id)) 

console.log(selectedProduct.id)
    return(
     <>
   
    <div className='bg-blue-900'>
        <h1>ht</h1>

    </div>
     
     </>
        
    )
}
export default ProductCard;