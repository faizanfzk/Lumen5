import { Box, Heading, Text } from "@chakra-ui/react";

export const HBlog2=()=>{
    return(
        <Box w={"100%"} marginTop="10rem" marginBottom={"10rem"}>
      <Box w={"90%"} border="1px solid black" margin={"auto"} display="flex">
        <Box paddingTop={"200px"} paddingLeft="10%">
          <img
            width={"400px"}
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-customize.png"
            alt="img"
          />
        </Box>
        <Box paddingLeft={"10%"}>
          <img
           style={{width:"70px" , borderRadius:"40%"}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYL914TJKWxGhTz452jre-zGXlHpnbkwyl2w&usqp=CAU"
            alt="icon"
          />
          <Heading as={"h1"}>
           Making it easy to <br /> stay on brand
          </Heading>
          <Text lineHeight={"1.6rem"}>
          It has never been easier to stay on brand. <br /> 
          With Lumen5 templates, you can customize <br /> powered technology helps you
            storyboard <br /> each video with your unique logo,{" "}
            <br /> watermark, fonts, colors, and more. 
          </Text>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Text lineHeight={"1.4rem"}>
          “Whenever I got in touch with Lumen5 I felt like my <br /> 
          suggestions mattered and I was being listened to. <br /> It’s like I’m co-creating in a tiny way. It’s a great <br />
          feeling.”
          </Text>
          <Box display={"flex"}>
            <Box paddingTop={"10px"} paddingRight="10px">
                <img style={{borderRadius:"50%",width:"50px"}} src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-promod-s.jpg" alt="" />
               
            </Box>
            <Box>
            <Text lineHeight={"0.3rem"}><b>Pramod Sharma</b> , Actuary & Insurance Consultant <br />  <Heading as={"h2"} color="rgb(204,0,0)">TAXEVITY</Heading>
           </Text>
        
          </Box>

          </Box>

        </Box>
      </Box>
    </Box>
    )
}