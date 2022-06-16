import { Box, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box mt="80px" style={{ backgroundColor: "rgb(36,40,47)" }}>
      <Box w="100%" display={"flex"} justifyContent="space-around" paddingTop="50px">
        <Box>
          <img
            width={"100px"} 
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png"
            alt="logo"
          />
          <Text color="white" fontSize={"13px"}>
            Lumen5 combines powerful <br /> A.I. with a simple drag-and-<br/>drop interface
            to help you <br /> create professional video <br /> content in minutes.
          </Text>
        </Box>
        <Box display={"flex"} pr="50px">
          <Box pr={"80px"} >
            <Text color="white" fontSize={"13px"} pb={"20px"}>EXPLORE</Text>

            <Text color={"grey"} fontSize="13px"  pb="5px">About</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Features</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Careers</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Linkedin</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Support</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Community group</Text>
          </Box>
          <Box pr={"80px"}>
            <Text color="white" fontSize={"13px"} pb={"20px"}>Video Tools</Text>

            <Text color={"grey"} fontSize="13px" pb="5px">Add Text to Video</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Cut Video</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Merge Video</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Compress Video</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Resize Video</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">See all</Text>
          </Box>
          <Box pr={"80px"}>
            <Text color="white" fontSize={"13px"} pb={"20px"}>VIDEO CREATORS</Text>

            <Text color={"grey"} fontSize="13px"  pb="5px">Video Editor</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Photo Video Maker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Facebook Video MAker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">YouTube Intro Maker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">Instagram Video Maker</Text>
            <Text color={"grey"} fontSize="13px" pb="5px">See all</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
