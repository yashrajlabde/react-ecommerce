import React, { useState, useEffect } from 'react';
import VerticalTab from './VerticalTab';
import MainItems from './MainItems'


import '../Devices-component/ProductContainer.css'


const ProductContainer = () => {

    const [heading, setHeading] = useState('Mobiles');

    const handleClickVerticleTab1 = (item) => {

         setHeading(item.type)
      
    }

    useEffect(() => {
    //    console.log("render");
    }, [heading]);


    return (
        <div className="product-container" >
            <VerticalTab handleClickVerticleTab={handleClickVerticleTab1} />
            <MainItems heading={heading}/>
           

        </div>
    )
}


export default ProductContainer