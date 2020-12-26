import React, { useState } from 'react';
import './Hamburger.css'


const Hamburger = ({isBurgerClick,BurgerClick}) => {


    // const [isBurgerClick, setIsBurgerClick] = useState(false);
    // const BurgerClick = () => {
    //     setIsBurgerClick(!isBurgerClick)

    //     if (isBurgerClick) {
    //         const classForBurger = 'active';
    //         console.log(classForBurger);
    //     }
    // }

   
    return (


        isBurgerClick ?
            <div className='hamburgerX' onClick={BurgerClick} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            : <div className='hamburger' onClick={BurgerClick}>
                <div></div>
                <div></div>
                <div></div>
            </div>
    )
}

export default Hamburger

