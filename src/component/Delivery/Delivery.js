import React from 'react';
import '../Delivery/Delivery.css'
import Deliverylogo from '../images/shipped.png'
import Securelogo from '../images/security.png'
import Customercarelogo from '../images//customer-service.png'


const Delivery = () => {


    return (
       <>
       <div className="service-background">
          <div className="service-container">
            <div className="service-container-child">
                        <div className="delivery-img"><img src={Deliverylogo} alt=""/></div>
                        <div>Now offering free shipping for the products all over the Country </div>
                        
            </div>
            <div className="service-container-child">
                        
                        <div className="secure-img"><img src={Securelogo} alt="" /></div> <div>Covid safety regulations are followed</div>
                    </div>
            <div className="service-container-child">
                        <div className="customer-img"> <img src={Customercarelogo} alt="" /></div>
                        <div>Seven days a week Customer care services</div>
                        <div>*Timing may vary due to Covid restriction</div>
            </div>
          
          </div>
        

       </div>
       </>
    )



}

export default Delivery