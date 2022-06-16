import { Box } from "@chakra-ui/react";
import { Footer } from "../Footer";
import { HNews } from "../HomeNewsLetter";
import { HMid } from "../HomePageMid";
import { HomeVideo } from "../HomeVideo";
import { EBV } from "./EnterPriseBelowVideo";
import { ELast } from "./EnterPriseLast";
import { EVideo } from "./EnterPriseVideo";

export const Enterprise = () => {
  return (
    <Box>
      <Box w="100%">
        <Box
          style={{ width: "100%", display: "flex", backgroundColor: "black" }}
        >
          <Box style={{ paddingLeft: "10rem" }}>
            <p style={{ fontSize: "24px", color: "white" }}>ENTERPRISE</p>

            <h1 style={{ fontSize: "40px", color: "white" }}>
              Create engaging <br />
              videos at scale while
              <br /> keeping on brand.
            </h1>
            <br />
            <br />
            <p style={{ fontSize: "25px", color: "white" }}>
              Easiy makes videos for <br />{" "}
              <b>
                content marketing, <br />
                thought leadership,
              </b>{" "}
              and <br />
              <b>brand awareness</b> in a snap
            </p>
            <br />
            <br />
          </Box>
          <Box style={{ marginLeft: "10%" }}>
            <img
              style={{ width: "500px", paddingTop: "3rem" }}
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-header.png"
              alt="pic"
            />
          </Box>
        </Box>
      </Box>
      <HMid/>
      <EVideo/>
      <EBV/>
      <ELast/>
      <HomeVideo/>
      <HNews />
      <Footer/>
    </Box>
  );
};
