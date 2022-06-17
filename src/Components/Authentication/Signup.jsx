import { Box, Text ,Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Flex,
  
  } from "@chakra-ui/react";
  import axios from "axios"
  import { useNavigate } from "react-router-dom";
  import { useState } from "react";

export const Signup = () => {
    const Navigate = useNavigate();
  

    
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

 

  const handleChange = (e) => {
    // console.log(e.target)
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleRegister =(e)=>{
  e.preventDefault();
  axios.post("https://ssense-api.herokuapp.com/register",user
  
  ).then((res)=>{
    setTimeout(()=>{
      Navigate("/login");
    },3000);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });  
      alert("Signup Successfull !!!")
     

  }).catch((e)=>{
    console.log("e",e);
    
      alert("Please Enter Right Credentials")
     
  })
      
      }  

  return (
    <Box>
      <Box w={"100%"} display="flex" justifyContent={"space-between"}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Box backgroundColor={"rgb(99, 80, 236)"} w={"30%"} position="fixed">
            <img
              style={{ paddingLeft: "30px", paddingTop: "30px" }}
              width={"150px"}
              color="white"
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
              alt=""
            />
            <Text
              mt={"-10px"}
              lineHeight={"4rem"}
              pl={"30px"}
              fontSize="50px"
              color="white"
            >
              Supercharge <br /> your content <br /> strategy
            </Text>

            <Text pl={"30px"} fontSize="30px" mt="-20px" color={"white"}>
              Join 800,000+ brands <br /> creating <br /> videos with Lumen5
            </Text>
            <Box display={"flex"} justifyContent="space-around">
              <Box>
                <img
                  width="90px"
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png"
                  alt=""
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-around" mt="-10px">
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </NavLink>
        <Box w={"60%"}>
          <Box>
            <Heading paddingLeft={"180px"} as={"h2"} fontWeight="bolder" fontSize="30px">Get started with a free account ✌️</Heading>
          </Box>
       
          <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
        >
      <Heading mt="10" as="h2" size="lg">
        Signup 🥳
      </Heading>
      <FormControl
       w="400px"
        h="320px"
        margin="auto"
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        borderRadius="5px"
        p={"3"}
        cursor="pointer"
        padding="30px"
        mt={5}
      >
        {/* First name..................... */}
        <FormLabel htmlFor="text" color={"grey"}>First Name</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="firstName"
          type="email"
          placeholder="Enter a first name"
          value={user.firstName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {/* LastName............................ */}
        <FormLabel htmlFor="text" color={"grey"}>Last Name</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="lastName"
          type="text"
          placeholder="Enter a last name"
          value={user.lastName}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {/* Email...................... */}
        <FormLabel htmlFor="email" color={"grey"}>Work Email</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          id="email"
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {/* Password ................................ */}
        
        <FormLabel htmlFor="text" color={"grey"}>Password</FormLabel>
        <Input
        height="30px"
        width="300px"
        marginLeft="20%"
          type="password"
          id="password"
          focusBorderColor="RGBA(0, 0, 0, 0.64)"
          placeholder="Enter your password"
          value={user.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <Button
          mt="20px"
          height="40px"
        width="400px"
   
          borderColor="#ccd0d5"
          color="white"
          borderRadius={"50px"}
         
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
          transform="scale(0.98)"
          backgroundColor="rgb(99, 80, 236)"
          fontSize={"17px"}
          fontWeight="bold"
  
          _hover={{
            bg: "#f5f6f7",
            background: "white",
            color:"rgb(99, 80, 236)",
            transform: "scale(0.98)",
            fontWeight:"bold"
          }}
          onClick={(e) => { handleRegister(e)
            }}
        >
          Submit
        </Button>
      </FormControl>
      </Flex>
        

           
          </Box>
        </Box>
      </Box>
 
  );
};
