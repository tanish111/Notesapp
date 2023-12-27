import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Flex,useDisclosure,Modal,ModalBody,ModalContent,ModalOverlay,ModalCloseButton,FormControl,FormLabel,ModalHeader,Input,ModalFooter} from '@chakra-ui/react';
import SearchResultCard from './SearchResultCard';
function SearchBar(props) {
    var searchData = ""
    const [searchResults,setSearchResults] = useState([])
    function searchNote(){
        fetch(`http://localhost:3000/api/notes/search?what=${searchData}`, {
          cache: "no-store",
        }).then((res) => {
          res.json().then(
            (noteDataF) => {
                setSearchResults(noteDataF.notes)
            })
            }
          )
      }
  return (
    <>    <ModalContent paddingTop="10px">
    <ModalBody pb={6}>
      <FormControl>
        <Input placeholder='What?' onChange={(e) => {searchData=e.target.value}} marginBottom="15px"/>
      </FormControl>
      <Button onClick={searchNote} colorScheme='blue' mr={3}>
        Search
      </Button>
      <Button onClick={props.iscl}>Cancel</Button>
      <Box>
            {
            searchResults.map(item => {
                return (
                  // Give Proper Key
                  <SearchResultCard key={item._id} iscl={props.iscl} noteid={item._id} noteData={item.noteData} title={item.title}/>
                  )
              })}
      </Box>
      </ModalBody>
  </ModalContent></>
  )
}

export default SearchBar