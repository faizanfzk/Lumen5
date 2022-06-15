import { Box, Heading, Text } from "@chakra-ui/react";

export const EVideo = () => {
  return (
    <Box>
      <Box w={"100%"} marginTop="5rem">
        <Heading as={"h2"} textAlign="center" fontSize="35px">
          Bespoke custom templates
        </Heading>
        <Text fontSize={"20px"} fontWeight="200px" textAlign={"center"}>
          We work with your brand ever step of the way
        </Text>
      </Box>
      <Box
        w={"90%"}
        display="flex"
        justifyContent="space-around"
        margin="auto"
        marginBottom="40px"
      >
        <Box>
          <video
            controls
            loop
            autoPlay
            muted
            style={{ width: "550px", borderRadius: "10px" }}
            src="https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4"
          ></video>
        </Box>
        <Box>
          <video
            controls
            loop
            autoPlay
            muted
            style={{ width: "550px", borderRadius: "10px" }}
            src="https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4"
          ></video>
        </Box>
      </Box>
      <Box
        w={"90%"}
        display="flex"
        justifyContent="space-around"
        margin="auto"
        marginBottom="40px"
      >
        <Box>
          <video
            controls
            loop
            autoPlay
            muted
            style={{ width: "550px", borderRadius: "10px" }}
            src="https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4"
          ></video>
        </Box>
        <Box>
          <video
            controls
            loop
            autoPlay
            muted
            style={{ width: "550px", borderRadius: "10px" }}
            src="https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4"
          ></video>
        </Box>
      </Box>
    </Box>
  );
};
