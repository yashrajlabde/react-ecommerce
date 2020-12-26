import React, { useContext } from 'react';
import "../Cart/CartPage.css"
import { UserContext } from '../UserContext'
import DataBase from "../DataBase"
import { isCompositeComponentWithType } from 'react-dom/test-utils';



const CartItem = ({ product })=>{

    var { product, setProduct } = useContext(UserContext);
    var inCartObj={};
    inCartObj = DataBase.filter((item) => product.indexOf(item.id) !== -1)

    return(
        <>
            <div className="cart-container">
                <div className="cart-heading">My Shopping Bag</div>
              <div className="cart-item-main-container"> 

{
   
               
     inCartObj.map((item)=>{
         return(
             <div className="cart-item-container">
                <div className="cart-item-img"><img src={item.img[0]} alt=""/></div>
                <div className="cart-item-info">
                   <p>{item.name}</p>
                   <p>Product type : {item.type}</p>
                    <p>Quantity: 0</p>
                    <p>Total :  0</p>
                </div>
             </div> 
                   
         )
     })
}       
                </div>        
               
               </div>
          
            
        </>
    )
}



export default CartItem;