"use client"
import { Box,ChakraProvider,Flex} from "@chakra-ui/react"
import Notes from "./homepage/Notes"
import MenuDesktop from "./homepage/MenuDesktop"
export default async function Home() {
  return (
   <ChakraProvider>
    <Flex flexDir="row" justifyContent="space-around" alignItems="stretch" minHeight="100vh" minWidth="100vw">
    <Box flexGrow="1" backgroundColor="gray.100" minW="13rem">
      <MenuDesktop titleList={[]}/>
    </Box>
    <Box flexGrow="6" backgroundColor="white" minHeight="100vh">
      <Notes notes={[]}/>
    </Box>
    </Flex>
   </ChakraProvider>
  )
}
