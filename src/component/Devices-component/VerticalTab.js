import React from 'react';
import DataBase from '../DataBase'
import Media from 'react-media';
import '../Devices-component/VerticalTab.css'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';




const VerticalTab = ({ id, name, type, handleClickVerticleTab }) => {

    const Newdata = [...DataBase];
    const UniqueType = [];


    // const handleClickVerticleTab=(item)=>{
    //     console.log(item.type)
    // }

    return (
        <>
            <div className="sideBar">
                <div className="side-container">
                    <h3>Categories</h3>

                    <div className="type-list-container">
                    
                        <SimpleBar
                            style={{ color: "black", minHeight: 80 }}>
                            {

                                Newdata.map((item) => {
                                    if (UniqueType.indexOf(item.type) === -1) {
                                        UniqueType.push(item.type)
                                        return (

                                            <div className="type-list"
                                                key={item.id} onClick={() => handleClickVerticleTab(item)}>
                                                {item.type}</div>

                                        )
                                    }

                                })

                            }
                        </SimpleBar>
                    </div>


                </div>
            </div>
           
        </>
    )
}



export default VerticalTab