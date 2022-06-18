import { Footer } from "../Footer"
import { HNews } from "../HomeNewsLetter"
import { Box, Heading, Text } from "@chakra-ui/react";

export const BMid=()=>{
    return(
        <Box>
        <Box w="100%" pt={"100px"}>
          <Box w="90%" display={"flex"} margin="auto" justifyContent={"space-around"}>
            <Box>
              <img
                width={"250px"}
                style={{ borderRadius: "15px" }}
                src="https://images.ctfassets.net/5ltrds677kah/1PZVc3Lm5w8CdYIROtKYdQ/024aa5c270749e239a4603207f10667d/ncstate1.png?w=400"
                alt=""
              />
              <Heading as={"h3"}>NC State University</Heading>
              <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
              How Lumen5 is helping NC State <br /> University boost their online <br /> presence and drive more traffic
              </Text>
            </Box>
            <Box>
              <img
                width={"250px"}
                style={{ borderRadius: "15px" }}
                src="https://images.ctfassets.net/5ltrds677kah/sHpNEfrQNeXZZPBN9SqAY/8a7485933bddc3ab99d832342f9b794f/taxevity1.png?w=400"
                alt=""
              />
              <Heading as={"h3"}>Taxevity</Heading>
              <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
              How Lumen5 is helping Taxevity <br /> with brand consistency
                <br />
                in 10 months
              </Text>
            </Box>
            <Box>
              <img
                width={"250px"}
                style={{ borderRadius: "15px" }}
                src="https://images.ctfassets.net/5ltrds677kah/1vY85VxpSTeHf5v8JHpGTj/9324f772f8a894e54243862414863c7f/mitsubishi1.png?w=400"
                alt=""
              />
              <Heading as={"h3"}>Mitsubushi</Heading>
              <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
              How Lumen5 is helping MHI expand <br /> their content strategy and speed <br /> up their workflow
              </Text>
            </Box>
            <Box>
              <img
                width={"250px"}
                style={{ borderRadius: "15px" }}
                src="https://images.ctfassets.net/5ltrds677kah/7IVEpPjwhpbvaW9GLk9okQ/457f4058deb29b711941ef66dfcff7e6/dnv1.png?w=400"
                alt=""
              />
              <Heading as={"h3"}>CMS Law</Heading>
              <Text fontSize={"15px"} color={"grey"} lineHeight="1.2rem">
              How Lumen5 helped DNV GL level <br /> up their social media game
              </Text>
            </Box>
          </Box>
        </Box>
        <HNews/>
        <Footer/>
      </Box>
    )
}