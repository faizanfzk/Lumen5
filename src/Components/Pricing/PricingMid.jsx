import { Box, Text } from "@chakra-ui/react"

export const PMid=()=>{
    return(
        <Box pt={"50px"}>
            <Box display={"flex"} w={"80%"} margin="auto" justifyContent={"space-between"}>
                <Box  >
                    <Text fontSize={"13px"} fontWeight={"bold"}>What's included :</Text>
                    <Text fontSize={"13px"}>✔️ Unlimited videos</Text>
                    <Text fontSize={"13px"}>✔️ Contains Lumen5 watermark  </Text>
                    <Text fontSize={"13px"}>✔️ 720p video resolution</Text>
                </Box>
                <Box >
                    <Text fontSize={"13px"} fontWeight={"bold"}>Everything in Free, plus:</Text>
                    <Text fontSize={"13px"}>✔️ No Lumen5 branding</Text>
                    <Text fontSize={"13px"}>✔️ 15M stock photos & videos </Text>
                    <Text fontSize={"13px"}>✔️ Custom colors & styles</Text>
                    <Text fontSize={"13px"}>✔️ 1080p video resolution</Text>
                    <Text fontSize={"13px"}>✔️ Access to icons</Text>
                </Box>
                <Box >
                    <Text fontSize={"13px"} fontWeight={"bold"}>Everything in Starter, plus:</Text>
                    <Text fontSize={"13px"}>✔️ Full Shutterstock libraries</Text>
                    <Text fontSize={"13px"}>✔️ Upload watermarks & font</Text>
                    <Text fontSize={"13px"}>✔️ Multiple saved templates</Text>
                   
                </Box>
                <Box >
                    <Text fontSize={"13px"} fontWeight={"bold"}>Everything in Professional, plus:</Text>
                    <Text fontSize={"13px"}>✔️ Lumen5 design team</Text>
                    <Text fontSize={"13px"}>✔️ Bespoke branded templates</Text>
                    <Text fontSize={"13px"}>✔️ Dedicated customer success</Text>
                    <Text fontSize={"13px"}>✔️ Teams & collaboration</Text>
                    <Text fontSize={"13px"}>✔️ Enterprise-level security</Text>
                   
                </Box>


            </Box>


        </Box>
    )
}