import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom'

import DataBase from '../DataBase'
import '../Devices-component/MainItems.css'
import Modal from '../Modal/Modal'
import { UserContext } from '../UserContext'



const MainItems = ({ heading }) => {


    var { product, setProduct } = useContext(UserContext);
    // var [product,setProduct]= useState([]);
    const [showModal, setShowModal] = useState(-1);

    const getModal = (value) => setShowModal(value)

    const hideModal = (value) => setShowModal(-1)

    const addtoCart = (item) => {
        if (product.indexOf(item.id) === -1) {
            item.addedToCart = true;
            setProduct([...product, item.id])

            console.log(item.addedToCart)
        } else {
            item.addedToCart = false;
            product = product.filter(value => value != item.id)
            setProduct([...product])

        }




    }



    useEffect((Database) => {
        console.log(product)
    }, [product, DataBase]);

    return (
        <div className="main-item-container" >

            <div className="main-heading">{heading}</div>
            <div className="component-container">
                {

                    DataBase.map((item) => {
                        if (item.type === heading) {
                            var element = "";
                            for (let index = 0; index < item.rating; index++) {

                                element = element + "★";
                            }



                            var inCart = () => {
                                if (product.indexOf(item.id) === -1) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }




                            return (
                                <>
                                    <div className="menu-card"
                                        id={item.id}
                                        key={item.id}

                                    >
                                        <img onClick={() => getModal(item.id)} className="image-card" id={item.id} src={item.img} alt="" />
                                        <p className="name-card" id={item.id}>{item.name}</p>
                                        <p className="price-card">{item.price}</p>

                                        {
                                            // item.addedToCart
                                            //  product.indexOf(item.id)

                                            inCart()
                                                ? <p><button className="cart-button"
                                                    onClick={() => addtoCart(item)
                                                    } >
                                                    ADDED
                                        </button></p> :

                                                <p><button className="cart-button-selected"
                                                    onClick={() => addtoCart(item)
                                                    } >
                                                    Add to Cart
                                        </button></p>



                                        }


                                    </div>
                                    <Modal show={showModal == item.id} onHide={() => hideModal(item.id)} item={item} />
                                </>
                            )
                        }
                    })
                }
            </div>
        </div>




    )
}



export default MainItems