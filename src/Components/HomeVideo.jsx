import { Box ,Heading , Text  } from "@chakra-ui/react"

export const HomeVideo=()=>{
    return(
        <Box w={"100%"}>

            <Box w={"100%"} marginTop="5rem">
                <Heading as={"h2"} textAlign="center" fontSize="35px">Captivating video templates</Heading>
                <Text fontSize={"20px"} fontWeight="200px" textAlign={"center"}  > Drag and drop. No experience required</Text>
            </Box>
            <Box w={"90%"} display="flex" justifyContent="space-around"  margin="auto" marginBottom="40px">
                <Box>
              <video controls loop autoPlay muted style={{width:"350px" , borderRadius:"10px" }} src="https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4"></video>
               </Box>
             <Box>
                <video controls loop autoPlay muted  style={{width:"350px" , borderRadius:"10px" }}   src="https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4"></video>

             </Box>
             <Box>
             <video controls loop autoPlay muted  style={{width:"350px" , borderRadius:"10px"}}   src="https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4"></video>


             </Box>

            </Box>
            <Box w={"90%"} display="flex" justifyContent="space-around" margin="auto" marginBottom="40px">
                <Box>
              <video controls loop autoPlay muted style={{width:"350px" , borderRadius:"10px" }} src="https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4"></video>
               </Box>
             <Box>
                <video controls loop autoPlay muted  style={{width:"350px" , borderRadius:"10px" }}   src="https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4"></video>

             </Box>
             <Box>
             <video controls loop autoPlay muted  style={{width:"350px" , borderRadius:"10px"}}   src="https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4"></video>


             </Box>

            </Box>
            
        </Box>
    )
}