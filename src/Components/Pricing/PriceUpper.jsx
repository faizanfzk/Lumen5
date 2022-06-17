import { Box, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import { PBottom } from "./PriceBottom";
import { PMid } from "./PricingMid";
import { Navbar } from "../Navbar";

export const Pricing = () => {
  return (
    <Box w={"100%"}>
      <Navbar/>
      <Box
        w="90%"
        textAlign={"center"}
        margin="auto"
        pt={"15px"}
      >
        <Text fontSize={"23px"}>Pricing</Text>
        <Box w={"100%"} lineHeight="1rem">
          <Heading as={"h1"} fontSize="40px">
            Plans for your video content creation
          </Heading>
          <Heading as={"h1"} fontSize="40px">
            strategy
          </Heading>
        </Box>
      </Box >
      <Box w={"100%"} display="flex" justifyContent={"center"} pt="50px">
        <Box  w="20%" lineHeight={"1rem"} >
          <Heading as={"h3"} pl="5px" fontSize={"30px"}>
            Community
          </Heading>
          <Text pl="5px">For casual video enthusiasts</Text>
       

          <Heading as={"h3"} pl="5px" fontSize={"30px"} pt="30px">
            $ 0
          </Heading>
          <Text fontSize={"15px"} pl="5px">forever free</Text>
          <Box
            border={"1px solid blue"}
            width="130px"
            height="30px"
          
            textAlign={"center"}
        borderRadius="50px"
           pt="10px"
           mt="50px"
          
          >
            <Link
              to=""
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              Get started
            </Link>
          </Box>
        </Box>
        <Box  w="20%" lineHeight={"1rem"}>
          <Heading as={"h3"} pl="5px" fontSize={"30px"}>
            Starter
          </Heading>
          <Text pl="5px">For individual content <br /> creators</Text>
       

          <Heading as={"h3"} pl="5px" fontSize={"30px"}>
            $ 59 USD
          </Heading>
          <Text fontSize={"15px"} pl="5px">per month, billed yearly</Text>
          <Box
            border={"1px solid blue"}
            width="130px"
            height="30px"
            borderRadius="50px"
            textAlign={"center"}
        
           pt="10px"
           mt="60px"
          >
            <Link
              to="/checkout"
              style={{ textDecoration: "none", textAlign: "center",}}
            >
              Get started
            </Link>
          </Box>
        </Box>
        <Box  w="20%" lineHeight={"1rem"}>
          <Heading as={"h3"} pl="5px" fontSize={"30px"}>
            Professioinal
          </Heading>
          <Text pl="5px">For professional video <br /> storytellers</Text>
       

          <Heading as={"h3"} pl="5px" fontSize={"30px"}>
            $ 149 USD
          </Heading>
          <Text fontSize={"15px"} pl="5px">per month, billed yearly</Text>
          <Box
            border={"1px solid blue"}
            width="130px"
            height="30px"
            borderRadius="50px"
            textAlign={"center"}
        
           pt="10px"
           mt="60px"
          >
            <Link
              to="/checkout"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              Get started
            </Link>
          </Box>
        </Box>
        <Box  w="20%" lineHeight={"1rem"}>
          <Heading as={"h3"} pl="5px" fontSize={"30px"}>
            Enterprise
          </Heading>
          <Text pl="5px">For casual video enthusiasts</Text>
       

          <Heading as={"h3"} pl="5px" pt="25px" fontSize={"30px"}>
         Custom
          </Heading>
          
          <Box
            border={"1px solid blue"}
            width="130px"
            height="30px"
            borderRadius="50px"
            textAlign={"center"}
           pt="10px" mt="100px"
          >
            <Link
              to="/enterprise"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
             Learn More
            </Link>
          </Box>
        </Box>
      </Box>
      
      <PMid/>
      <PBottom/>
      <Footer/>
    </Box>
    
  );
};
