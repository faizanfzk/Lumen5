import {Box} from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import { Enterprise } from "../EnterPrise/EnterPriseUpper"
import { Home } from "../HomePage"
import { Pricing } from "../Pricing/PriceUpper"
import {Signup } from "../Authentication/Signup"
import { Login } from "../Authentication/Login"
import { Checkout } from "../Checkout"
import { CaseTOp } from "../CaseStudies/CaseTop"


export const AllRoutes=()=>{

    return(
        <Box>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/enterprise" element={<Enterprise/>}/>
                <Route path="/casestudies" element={<CaseTOp/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                
                
            </Routes>

        </Box>
    )
}