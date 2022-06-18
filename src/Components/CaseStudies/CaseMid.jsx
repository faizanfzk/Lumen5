import { Box, Heading, Text } from "@chakra-ui/react";

export const CaseMid = () => {
  return (
    <Box>
      <Box w="100%" pt={"100px"}>
        <Box w="90%" display={"flex"} margin="auto" justifyContent={"space-around"}>
          <Box>
            <img
              width={"250px"}
              style={{ borderRadius: "15px" }}
              src="https://images.ctfassets.net/5ltrds677kah/6bmIUsDjceTBBuLyIlQtPd/b4770d287c2a1e21de19eab7efeec52f/siemens1.png?w=400"
              alt=""
            />
            <Heading as={"h3"}>Siemens</Heading>
            <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
              How Siemens Transformed Digital <br /> Communications With Lumen5
            </Text>
          </Box>
          <Box>
            <img
              width={"250px"}
              style={{ borderRadius: "15px" }}
              src="https://images.ctfassets.net/5ltrds677kah/5Yp4i7R522ebbvbJXtnwS/c35344519394d88875664257119c8880/berkshire4.png?w=400"
              alt=""
            />
            <Heading as={"h3"}>Berkshire Hathaway</Heading>
            <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
              how Berkshire Hathaway <br /> HomeServices created 500 videos{" "}
              <br />
              in 10 months
            </Text>
          </Box>
          <Box>
            <img
              width={"250px"}
              style={{ borderRadius: "15px" }}
              src="https://images.ctfassets.net/5ltrds677kah/4CEMG9nD5szpcNtznePJWx/57c08b81180c494eed8c0021ce72924a/mondadori1.png?w=400"
              alt=""
            />
            <Heading as={"h3"}>Mondadori</Heading>
            <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
              Learn how Mondadori doubled <br /> social media engagement and{" "}
              <br /> tripled their video views with <br /> Lumen
            </Text>
          </Box>
          <Box>
            <img
              width={"250px"}
              style={{ borderRadius: "15px" }}
              src="https://images.ctfassets.net/5ltrds677kah/6qQh4D8FV5Tldbgr1D2XOc/278756ab5351d4952fe7ce26d72a7f3c/cms1.png?w=400"
              alt=""
            />
            <Heading as={"h3"}>CMS Law</Heading>
            <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
            How Lumen5 is helping CMS get in <br /> front of their audience and reach <br /> their video marketing goals
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
