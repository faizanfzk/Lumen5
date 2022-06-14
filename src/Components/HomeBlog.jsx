import { Box, Heading, Text } from "@chakra-ui/react";

export const HBlog = () => {
  return (
    <Box w={"100%"} marginTop="10rem" marginBottom={"10rem"}>
      <Box w={"90%"} margin={"auto"} display="flex">
        <Box paddingTop={"200px"} paddingLeft="10%">
          <img
            width={"400px"}
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-content.png"
            alt="img"
          />
        </Box>
        <Box paddingLeft={"10%"}>
          <img
            width={"100px"}
            src="https://cloud2gnd.com/wp-content/uploads/2017/10/services-icons-new_spec-doc-icon.png"
            alt="icon"
          />
          <Heading as={"h1"}>
            Transform blog posts <br /> into videos with A.I
          </Heading>
          <Text lineHeight={"1.6rem"}>
            Starting from a blank page is hard — and <br /> with Lumen5, you
            don’t have to. Our AI- <br /> powered technology helps you
            storyboard <br /> your ideas, fit your content to a layout, and{" "}
            <br /> find music and visuals that enhance your <br /> message.
          </Text>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Text lineHeight={"1.4rem"}>
            “Lumen5 has enabled us to create more videos <br /> and drive more
            traffic, while having more time to <br /> invest in other projects.”
          </Text>
          <Box display={"flex"}>
            <Box paddingTop={"18px"} paddingRight="10px">
                <img style={{borderRadius:"50%",width:"50px"}} src="https://storage.googleapis.com/lumen5-site-images/website-assets/image-drew-s.jpg" alt="" />
               
            </Box>
            <Box>
            <Text lineHeight={"0.3rem"}><b>Drew Sykes,</b> Social Media Director <br />  <Heading as={"h2"} color="rgb(204,0,0)">NC STATE</Heading>
            <Text color={"rgb(204,0,0)"} fontSize="25px">UNIVERSITY</Text></Text>
        
          </Box>

          </Box>

        </Box>
      </Box>
    </Box>
  );
};
