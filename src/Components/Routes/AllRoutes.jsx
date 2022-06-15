import {Box} from "@chakra-ui/react"
import {Routes,Route} from "react-router-dom"
import { Enterprise } from "../EnterPrise/EnterPriseUpper"
import { Home } from "../HomePage"
import { Pricing } from "../Pricing/PriceUpper"

export const AllRoutes=()=>{

    return(
        <Box>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/enterprise" element={<Enterprise/>}/>
                
            </Routes>

        </Box>
    )
}