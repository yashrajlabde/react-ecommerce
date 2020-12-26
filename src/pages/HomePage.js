import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Landing from '../component/LandingPage/Landing'
import ProductContainer from '../component/Devices-component/ProductContainer';
import Delivery from '../component/Delivery/Delivery'


const HomePage=()=>{


    return(
        <>
            <Navbar />
            <Landing />
            <ProductContainer />
            <Delivery />
        </>
    )
}



export default HomePage;