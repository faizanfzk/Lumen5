import { Box, Text, Heading } from "@chakra-ui/react";

export const ELast = () => {
  return (
    <Box>
      <Box w={"100%"} marginTop="6rem" marginBottom={"10rem"}>
        <Box w={"90%"} margin={"auto"} display="flex">
          <Box paddingTop={"100px"} paddingLeft="10%">
            <img
              width={"500px"}
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-scale.png"
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
              Produce videos at scale <br /> and in-house. Seriously <br />{" "}
              easy.
            </Heading>
            <Text lineHeight={"1.6rem"}>
              Lumen5 is an unbelievably easy to use video creator built <br />
              specifically for users without experience in video editing. The{" "}
              <br />
              workflow is as simple as creating a PowerPoint presentation,{" "}
              <br /> and the output can be indistinguishable from professional{" "}
              <br />
              agency-produced videos.
            </Text>
            <br />
            <Text lineHeight={"1.4rem"}>
              You can create professional video from any text-based <br />{" "}
              content and cut video creation time to an average of six <br />{" "}
              minutes in Lumen5.
            </Text>
            <br />
            <Text lineHeight={"1.4rem"}>
              Enable your global teams to produce localized content for <br/> their
              audience as well in a snap. Just don't tell your boss it <br /> was this
              easy.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
