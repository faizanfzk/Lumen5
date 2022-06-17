import { Box } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import "./Checkout.css"


export const Checkout=()=>{
    const [loading,setLoading]=useState("false")
    const Navigate=useNavigate()
    const handleClick=()=>{
        setLoading("true")
        setTimeout(()=>{

            alert("Payment Successful")
            Navigate("/")
        },3000)
    }
    return(
        <Box>
            <Box>
               
            <div className="mainAddress">
    <form className="addressForm">
      <h1>Complete Payment</h1>
      <p>Name On Card</p>
      <input type="text" className="name" placeholder="Enter your name"  required="true"/>
      <p>Card Number</p>
      <input type="number" className="cardNumber" placeholder="Enter your card number (123)" required="true" />
      <p>CVV</p>
      <input type="number" className="CVV" placeholder="Enter your CVV (123)"  required="true"/>
      <p>Expiry Date</p>
      <input type="text" className="expDate" placeholder="Enter expiry date (12/25)" required="true" />
     <Button onClick={handleClick} className="submit" >Submit</Button>
    </form>
  </div>

            </Box>
        </Box>
    )
}