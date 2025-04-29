import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AdddFir from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import { set } from 'mongoose'
import AddFirm from '../components/forms/AddFirm'



const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showFirm, setShowFirm] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    
    
const showLoginHandler = () => {
  setShowLogin(true )
  setShowRegister(false)
  setShowFirm(false)
  setShowProduct(false)

}
const showRegisterHandler = () => {
  setShowRegister(true)
  setShowLogin(false)
  setShowFirm(false)
  setShowProduct(false)
 
}

const showFirmHandler = () => {
  setShowFirm(true)
  setShowLogin(false)
  setShowRegister(false)
  setShowProduct(false)

}

const showProductHandler = () => {
  setShowProduct(true)
  setShowLogin(false)
  setShowRegister(false)
  setShowFirm(false)
  setShowLogin(false)

}

const showWelcomeHandler = () => {
  setShowRegister(true)
  setShowLogin(false)
  setShowFirm(false)
  setShowProduct(false)

}

  return (
    <>
        <section className='landingSection'>
            <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler}/>
            <div className="collectionSection">
              
            <SideBar showFirmHandler={showFirmHandler} showProductHandler={showProductHandler}/>
            
            {showLogin && <Login/>}
            {showRegister && <Register showLoginHandler={showLoginHandler}/>}
            {showFirm && <AddFirm/>}
            {showProduct && <AddProduct/>}

            
            
            
            
            
            
            
            
            
            </div>
              
        </section>
    </>
  )
}

export default LandingPage