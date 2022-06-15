import { Link } from "react-router-dom"
import { HBlog } from "./HomeBlog"
import { HBlog2 } from "./HomeBlog2"
import {HCarousell} from "./HomeCarousel"
import { HNews } from "./HomeNewsLetter"
import { HMid } from "./HomePageMid"
import { HomeVideo } from "./HomeVideo"

export const Home=()=>{
    return(
        <div style={{width:"100%"}}>

            <div style={{width:"100%", display:"flex"}}>

                <div style={{ paddingLeft:"10rem"}}>
                    <h1 style={{fontSize:"40px"}}>Video maker built to <br />supercharge your <br /> content strategy</h1>
                    <br />
                    <br />
                    <p style={{fontSize:"25px"}}>Easiy makes videos for <br /> <b>content marketing, <br />thought leadership,</b> and <br />
                    <b>brand awareness</b> in a snap
                     
                    </p>
                    <br />
                    <br />
                    <Link to="/signup" style={
                        {textDecoration:"none",
                        borderRadius:"50px",
                        padding:"15px",
                        backgroundColor:"rgb(88,70,246)" ,
                        color:"white"}}>Sign up free</Link>
                </div>
                <div style={{marginLeft:"10%"}}>
                    <img style={{width:"500px",paddingTop:"3rem"}} src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-hero.png" alt="pic" />
                </div>
               
            </div>
            <HMid/>
            <HomeVideo/>
            <HBlog/>
            <HBlog2/>
            <HCarousell/>
            <HNews/>
        
          
           
        
        </div>
    )
}