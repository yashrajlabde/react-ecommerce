import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import MainItems from '../Devices-component/MainItems'
import '../Modal/Modal.css'

function Modal({ item, show, onHide }) {
    
    var colorArray = item.color;
    var descriptionArray= item.description;
    const [imgUrl,setImgUrl]= useState(0);


    const handleCarousalclickRight=()=>{
        if(imgUrl===item.img.length-1){
            setImgUrl(0)
        }
        else{
            setImgUrl(imgUrl+1)
        }
    }


    const handleCarousalclickLeft=()=>{
        if(imgUrl===0){
            setImgUrl(item.img.length-1)
        }
        else{
            setImgUrl(imgUrl-1)
        }
    }
    return ReactDOM.createPortal(

        show ? <>
            <div className="product-modal-container" onClick={onHide} />
            <div className="modal-card">
                <div className="modal-card-child">
                   <div className="modal-product-image">
                        <img src={item.img[imgUrl]} alt="" />
                        <p className="modal-product-price">Price: {item.price}</p>
                        <div className="right-side" onClick={handleCarousalclickRight}>
                           <div></div>
                           <div></div>
                        </div>
                        <div className="left-side" onClick={handleCarousalclickLeft}>
                            <div></div>
                            <div></div>
                        </div>
                   </div>
                    
                    <div className="modal-close" onClick={onHide}>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="modal-description">
                        <p className="modal-product-name">{item.name}</p>
                        <p className="modal-product-type">{item.type} Category</p>
                        <p className="modal-product-description">
                        
                        {descriptionArray.map((desc)=>(
                            <li>{desc}</li>
                        ))}
                        
                        </p>
                        <div className="modal-product-color">
                          Colors:
                        { 
                        
                            colorArray.map((color)=>(
                                <div>{color}</div>
                            ))
                       
                       
                        }
                          
                        
                        </div>
                    </div>

                </div>
            </div>

        </>
            : null, document.getElementById("modal-portal")




    )
}

export default Modal
