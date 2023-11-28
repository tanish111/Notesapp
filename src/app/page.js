"use client"
import { Box,ChakraProvider,Flex, color} from "@chakra-ui/react"
import  {useState,useCallback}  from "react";
import Notes from "./homepage/Notes"
import MenuDesktop from "./homepage/MenuDesktop"
export default function Home() {
  const [notes,setNotes] = useState([])
  console.log(notes)
  return (
   <ChakraProvider>
    <Flex flexDir="row" justifyContent="space-around" alignItems="stretch" minHeight="100vh" minWidth="100vw">
    <Box flexGrow="1" backgroundColor="gray.100" minW="13rem">
      <MenuDesktop titleList={notes}/>
    </Box>
    <Box flexGrow="6" backgroundColor="white" minHeight="100vh">
      <Notes notes={notes}/>
    </Box>
    </Flex>
   </ChakraProvider>
  )
}
