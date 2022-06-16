import {Box} from "@chakra-ui/react"
import {NavLink} from "react-router-dom"

export const Navbar=()=>{
    return(
        <Box pb={"100px"}>
            <Box w="100%" display={"flex"} justifyContent="space-around" position={"fixed"} backgroundColor="white" >
                <Box>
                    <NavLink to="/"><img width={"150px"} paddingRight="80px" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" alt="Lumen5" /></NavLink>

                </Box>
                <Box display={"flex"} justifyContent="space-evenly">
                    <Box pt="30px">
                    <NavLink to="/pricing" style={{textDecoration:"none",paddingRight:"35px", paddingTop:"30px"}}>Pricing</NavLink>
                    </Box>
                    <Box pt="30px">
                    <NavLink  to="/enterprise" style={{textDecoration:"none",paddingRight:"35px", paddingTop:"30px"}}>Enterprise</NavLink>
                    </Box>
                    <Box pt="30px">
                    <NavLink to="" style={{textDecoration:"none",paddingRight:"35px", paddingTop:"30px"}}>Case studies</NavLink>
                    </Box>
                    <Box pt="30px">
                    <NavLink to="" style={{textDecoration:"none",paddingRight:"35px", paddingTop:"30px"}}>Learn</NavLink>
                    </Box>

                    <Box pt="30px" pr={"30px"} style={{}}>
                        <NavLink to="/login" style={{border:"1px solid rgb(88,70,246) ",padding:"15px",color:"blue", borderRadius:"50px",width:"100px",textDecoration:"none"}}>Login</NavLink>

                    </Box>
                    <Box pt="30px">
                        <NavLink to="/signup" style={{backgroundColor:"rgb(88,70,246)",padding:"15px",color:"white", borderRadius:"50px",width:"100px",textDecoration:"none"}}>Sign up</NavLink>
                    </Box>

                </Box>
            </Box>

        </Box>
    )
}