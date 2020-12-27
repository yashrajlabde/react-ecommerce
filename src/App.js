import React,{useState,useEffect} from 'react'
import './App.css';
import {Route, Switch} from  'react-router-dom'
import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ErrorPage from './pages/ErrorPage.js'
import {UserContext} from './component/UserContext'
import Database from './component/DataBase'




const App=()=> {

 var [product, setProduct] = useState([])
 

 
useEffect(()=>{

  const data =localStorage.getItem("cart-id")
  

  if(data){
    setProduct(JSON.parse(data));
  }

 
 
},[]);


useEffect(()=>{
  

  localStorage.setItem("cart-id",JSON.stringify(product))


})

  return (
    <>
     <UserContext.Provider value={{product,setProduct}}>
      <Switch>
       <Route exact path="/" component={HomePage}  />
       <Route path="/cart" component={CartPage} />
      </Switch>
      </UserContext.Provider>
     
    </>
  );
}

export default App;
