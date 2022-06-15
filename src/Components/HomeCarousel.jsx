import { Box, Heading, Text } from "@chakra-ui/react";

export const HCarousell = () => {
  return (
    <Box w={"100%"}>
      <Box textAlign={"center"}>
        <Heading as={"h3"} fontSize="40px">
          Tips and tricks for amplifying <br />
          your brand with video
        </Heading>
      </Box>
      <Box w="100%" display={"flex"} justifyContent="center">
        <Box width={"20%"}  pl="10px" border={"1px grey"}  box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <img
            width={"250px"}
            src="https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg"
            alt="cardimg"
          />
          <Text pl={"10px"} fontSize="18px">
            BLOG
          </Text>
          <Text pl={"10px"} fontSize="20px">
            Video Marketing: <br /> How to Get Started <br /> [Step by Step]
          </Text>
          <a
            href="https://lumen5.com/learn/video-marketing/"
            style={{
              textDecoration: "none",
              paddingLeft: "20px",
              
              fontSize: "18px",
            }}
          >
            Read story →
          </a>
        </Box>
        <Box width={"20%"} border={"1px grey"}  box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" pl="20px">
          <img
            width={"250px"}
            src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg"
            alt="cardimg"
          />
          <Text pl={"10px"} fontSize="18px">
            BLOG
          </Text>
          <Text pl={"10px"} fontSize="20px">
            How to Increase <br /> Your Facebook <br /> Video Views <br />{" "}
            [Complete Guide]
          </Text>
          <a
            href="https://lumen5.com/learn/"
            style={{
              textDecoration: "none",
              paddingLeft: "20px",
           
              fontSize: "18px",
            }}
          >
            Read story →
          </a>
        </Box>

        <Box width={"20%"} border={"1px grey"}  pl={"20px"}  box-shadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
          <img
            width={"250px"}
            src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg"
            alt="cardimg"
          />
          <Text pl={"10px"} fontSize="18px">
            BLOG
          </Text>
          <Text pl={"10px"} fontSize="20px">
          The Importance of <br /> Video in Your <br /> Content Strategy
         
          </Text>
          <a
            href="https://lumen5.com/learn/video-marketing-content-strategy/"
            style={{
              textDecoration: "none",
              paddingLeft: "20px",
              fontSize: "18px",
            }}
          >
            Read story →
          </a>
        </Box>
      </Box>
    </Box>
  );
};
