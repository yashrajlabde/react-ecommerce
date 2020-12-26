import React, {useContext } from 'react';
import "../component/Cart/CartPage.css"
import Navbar from '../component/Navbar/Navbar'
import { UserContext } from '../component/UserContext'
import CartItem from '../component/Cart/CartItem'

const CartPage=({product})=>{
    
    var { product, setProduct } = useContext(UserContext);


    return(
        <>
            <Navbar />

          <CartItem />
        
       
           
        </>
    )
}


export default CartPage;