import { Box, Heading, Text } from "@chakra-ui/react";

export const EBV = () => {
  return (
    <Box>
      <Box w="100%" style={{ backgroundColor: "black" }}>
        <Box
          w="100%"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Box>
            <Heading as={"h2"} style={{ color: "white", paddingTop: "24px" }}>
              Scale your content and <br /> break that bottleneck
            </Heading>
            <Text
              style={{ color: "white", fontSize: "17px", lineHeight: "1.7rem" }}
            >
              Content creation bottlenecks swell up when a <br /> marketing team
              relies too much on a small group of <br /> specialized pros to
              produce a large volume of video <br /> content. Instead, put the
              freedom of video creation <br />
              directly into the hands of all your teams while <br /> ensuring
              brand control and watch your content library <br /> multiply.
            </Text>
          </Box>
          <Box>
            <Heading as={"h2"} style={{ color: "white", paddingTop: "24px" }}>
              Repurpose your <br /> already-amazing content
            </Heading>
            <Text
              style={{ color: "white", fontSize: "17px", lineHeight: "1.7rem" }}
            >
              Great video content speaks louder than words <br /> (literally),
              and doesn’t need to be made from scratch. <br /> Lumen5 makes it
              easy to repurpose all of your existing <br /> marketing assets and
              messaging into captivating <br /> bite-sized videos optimized for
              online distribution. <br />
              Multiply the content you already have and work <br /> smarter, not
              harder.
            </Text>
          </Box>
        </Box>
        <Box
          w="100%"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Box>
            <Heading as={"h2"} style={{ color: "white", paddingTop: "24px"  }}>
              Increase your customer <br /> engagement frequency
            </Heading>
            <Text
              style={{ color: "white", fontSize: "17px", lineHeight: "1.7rem", paddingBottom: "30px" }}
            >
              The most engaging brands are consistent and <br /> frequent with
              their communication while sharing <br /> relevant content that
              capture their audiences eyes, <br /> minds, and hearts. With
              Lumen5, your team can <br />
              produce engaging videos in minutes, allowing your <br /> brand to
              stay top-of-mind, up-to-date, and relevant.
            </Text>
          </Box>
          <Box>
            <Heading as={"h2"} style={{ color: "white", paddingTop: "24px" }}>
              Complement your agency <br /> with Lumen5
            </Heading>
            <Text
              style={{ color: "white", fontSize: "17px", lineHeight: "1.7rem" ,paddingBottom: "30px"  }}
            >
              Not every video needs a big budget. While agencies <br /> are great for
              your mega high-production campaigns, <br /> such as TV commercials,
              brands are turning to <br /> Lumen5 to meet the demands of daily or
              weekly video <br /> content, purpose-built for social media and corporate <br />
              communications.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
