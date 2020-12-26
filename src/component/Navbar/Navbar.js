import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import { MenuItem } from './MenuItem'
import Hamburger from './Hamburger'
import './Navbar.css'

const Navbar = () => {


    const [isBurgerClick, setIsBurgerClick] = useState(false);
    const BurgerClick = () => {
        setIsBurgerClick(!isBurgerClick)
    }

    return (<>

        <nav className="nav-tile">
            <div className="nav-holder">
                <h1 className="company-name">dravmo <img src="" alt="" /></h1>
                <ul className={isBurgerClick?'menu-tile active':'menu-tile'}>
                    {MenuItem.map((item, id) => {
                        return (
                            // <li key={item.id}><a className={item.cName} href={item.url}>{item.title}</a></li>
                            <li key={item.id}><a className={item.cName}><Link to={item.url} style={{ textDecoration: 'none', color:'#d5e9e8' }}>{item.title}</Link></a></li>
                        )

                    })}
                </ul>
                <Hamburger isBurgerClick={isBurgerClick} BurgerClick={BurgerClick}/>
            </div>
        </nav>


    </>)
}


export default Navbar