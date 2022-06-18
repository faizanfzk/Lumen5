import { Box, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import { BMid } from "./CaseBMid";
import { CaseMid } from "./CaseMid";

export const CaseTOp = () => {
  return (
    <Box>
        <Navbar/>
      <Box w="100%">
        <Box textAlign={"center"}>
          <Heading as={"h2"} style={{ fontSize: "30px" }}>
            Case Studies & Customer Stories
          </Heading>
        </Box>
        <Box w="90%" display={"flex"} margin="auto" justifyContent={"space-around"}>
          <Box>
            <Heading as={"h1"} fontSize="40px" lineHeight={"2.9rem"}>
              How Siemens <br /> Transformed Digital <br /> Communications With{" "}
              <br />
              Lumen5
            </Heading>

            <Text fontSize={"18px"} lineHeight={"1.5rem"}>
              “With the traditional agency, the time is <br /> usually about one
              week. But with Lumen5, <br /> it’s cut down from weeks to hours.”{" "}
              <br />
              <Text fontSize={"14px"} color="grey">
                {" "}
                —Michelle Hsiao, Visual Content Director at Siemens AG
              </Text>{" "}
              <br />
              <Link
                to=""
                style={{
                    fontSize:"16px",
                  textDecoration: "none",
                  borderRadius: "50px",
                  padding: "15px",
                  backgroundColor: "rgb(88,70,246)",
                  color: "white",
                }}
              >
                Read Case Study
              </Link>
            </Text>
          </Box>
          <Box mt="20px">
            <img style={{borderRadius:"15px",width:"600px"}}
              src="https://images.ctfassets.net/5ltrds677kah/6bmIUsDjceTBBuLyIlQtPd/b4770d287c2a1e21de19eab7efeec52f/siemens1.png?w=1000"
              alt=""
            />
          </Box>
        </Box>
      </Box>
      <CaseMid/>
      <BMid/>
    </Box>
  );
};
