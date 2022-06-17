import { Box, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isLogin } from "../../Redux/Auth/action";
import {
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://ssense-api.herokuapp.com/login", user)
      .then((res) => {
        localStorage.setItem("loginUser", JSON.stringify(res.data));
        console.log(res.data);
        dispatch(isLogin(res.data));
        setTimeout(() => {
          Navigate("/");
        }, 2000);
        setUser({
          email: "",
          password: "",
        });
        alert("Login Successful ! ! !");
      })
      .catch((e) => {
        alert("Login Failed");
        Navigate("/signup");
      });
  };

  return (
    <Box>
      <Box w={"100%"} display="flex" justifyContent={"space-between"}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box backgroundColor={"rgb(99, 80, 236)"} w={"30%"} position="fixed">
            <img
              style={{ paddingLeft: "30px", paddingTop: "30px" }}
              width={"150px"}
              color="white"
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
              alt=""
            />
            <Text
              mt={"-10px"}
              lineHeight={"4rem"}
              pl={"30px"}
              fontSize="50px"
              color="white"
            >
              Supercharge <br /> your content <br /> strategy
            </Text>

            <Text pl={"30px"} fontSize="30px" mt="-20px" color={"white"}>
              Join 800,000+ brands <br /> creating <br /> videos with Lumen5
            </Text>
            <Box display={"flex"} justifyContent="space-around">
              <Box>
                <img
                  width="90px"
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png"
                  alt=""
                />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent="space-around" mt="-10px">
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png"
                  alt=""
                />
              </Box>
              <Box>
                <img
                  width={"90px"}
                  src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Link>
        <Box w={"60%"}>
          <Box>
            <Heading as={"h1"} paddingLeft={"200px"} fontSize="40px">
              Welcome Back ! 👏
            </Heading>
          </Box>

          <Flex
            justify="center"
            align="center"
            direction="column"
            textAlign="center"
          >
            <Heading mt="10" as="h2" size="lg">
              LogIn
            </Heading>
            <FormControl
              w="400px"
              h="220px"
              margin="auto"
              boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              borderRadius="5px"
              p={"3"}
              cursor="pointer"
              padding="30px"
              mt={5}
            >
              {/* Email...................... */}
              <FormLabel htmlFor="email" color={"grey"}>
                Work Email
              </FormLabel>
              <Input
                height="30px"
                width="300px"
                marginLeft="20%"
                focusBorderColor="grey"
                id="email"
                type="email"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) => {
                  onChangeInput(e);
                }}
              />
              {/* Password ................................ */}

              <FormLabel htmlFor="Password" color={"grey"}>
                Password
              </FormLabel>
              <Input
                height="30px"
                width="300px"
                marginLeft="20%"
                type="password"
                id="password"
                focusBorderColor="grey"
                placeholder="Enter password"
                value={user.password}
                onChange={(e) => {
                  onChangeInput(e);
                }}
              />

              <Button
                mt="20px"
                height="40px"
                width="400px"
                borderColor="#ccd0d5"
                color="white"
                borderRadius={"50px"}
                backgroundColor={"rgb(99, 80, 236)"}
                _focus={{
                  boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
                transform="scale(0.98)"
                fontSize={"17px"}
                fontWeight="bold"
                _hover={{
                  bg: "#f5f6f7",
                  background: "white",
                  transform: "scale(0.98)",
                  color: "rgb(99, 80, 236)",
                }}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Login
              </Button>
            </FormControl>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
