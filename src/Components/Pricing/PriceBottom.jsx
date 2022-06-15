import { Box, Text, Stack, Badge, useColorModeValue } from "@chakra-ui/react";

export const PBottom = () => {
  return (
    <Box>
      <Box>
        <Box textAlign={"center"} pt="50px">
          <Text fontSize={"24px"}>
            Over 6 million videos created by thousands of businesses
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent="space-around">
        <Box>
          <Box
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
          >
            <img
              width={"80px"}
              style={{ borderRadius: "50%" }}
              src={
                "https://storage.googleapis.com/lumen5-site-images/comment-darren.png"
              }
              alt={"Avatar Alt"}
            />

            <Text
              textAlign={"center"}
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              "A member from our ProBlogger group <br /> created a video using
              Lumen5 and <br /> published it on Facebook. In 24 hours <br /> the
              video got 300,000 views, just using <br /> this little tool."
            </Text>

            <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={useColorModeValue("gray.50", "gray.800")}
                fontWeight={"400"}
                color="grey"
                fontSize={"12px"}
              >
                DARREN ROWSE
              </Badge>
            </Stack>
          </Box>
        </Box>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <img
            width={"80px"}
            style={{ borderRadius: "50%" }}
            src={
              "https://storage.googleapis.com/lumen5-site-images/comment-nicholas.png"
            }
            alt={"Avatar Alt"}
          />

          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            "By using Lumen5, we increased our <br /> Facebook engagements by
            448%, and <br />
            boosted our reach dramatically. Our <br /> page grew from 5,000 to
            23,000 likes <br /> within a week!
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
              color="grey"
              fontSize={"12px"}
            >
              NICHOLAS YANG
            </Badge>
          </Stack>
        </Box>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <img
            width={"80px"}
            style={{ borderRadius: "50%" }}
            src={
              "https://storage.googleapis.com/lumen5-site-images/comment-tova.png"
            }
            alt={"Avatar Alt"}
          />

          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            "My first video already got over <br /> 650,000 views on my facebook page. <br />
            It is an amazing program and I’m <br /> really impressed! It made
            converting a <br /> blog post into a video so easy."
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
              color="grey"
              fontSize={"12px"}
            >
           TOVA LEIGH
            </Badge>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
