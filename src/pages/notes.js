import React from 'react'
import MenuDesktop from '../../components/MenuDesktop'
import Notes from '../../components/Notes'
import { ChakraProvider,Flex,Box,useMediaQuery } from '@chakra-ui/react'
import { useState } from 'react'
import NotesProvider from '../../components/provider/NotesProvider'
import MenuMobile from '../../components/MenuMobile'
function notes() {
    const [isLoading, setIsLoading] = useState(true)
    const [notesData,setNotesData] = useState(null)
    const [isLargerThan800] = useMediaQuery('(min-width: 850px)')
    React.useEffect(()=>{
      async function fetchNotesData() {
        const res = await fetch('http://localhost:3000/api/notes', {
          cache: "no-store",
        });
        const data = await res.json()
        setNotesData(data)
        setIsLoading(false)
      }
      fetchNotesData()
    },[])
  return (
    <ChakraProvider>
        <NotesProvider>
    <Flex flexDir="row" justifyContent="space-around" alignItems="stretch" minHeight="100vh" minWidth="100vw">
    {isLargerThan800 ? 
      <Box flexGrow="1" backgroundColor="gray.100" minW="13rem"><MenuDesktop/>
    </Box> : <>
    <MenuMobile/>
    </>
    }
    <Box flexGrow="6" backgroundColor="white" minHeight="100vh">
      <Notes notes={notesData==null ? ["Loading"] : notesData}/>
    </Box>
    </Flex>
    </NotesProvider>
   </ChakraProvider>
  )
}

export default notes