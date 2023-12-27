"use client";
import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Flex,useDisclosure,Modal,ModalBody,ModalContent,ModalOverlay,ModalCloseButton,FormControl,FormLabel,ModalHeader,Input,ModalFooter} from '@chakra-ui/react';
import { AddIcon,SearchIcon } from '@chakra-ui/icons';
import { Noto_Sans } from 'next/font/google';
import {useRouter} from 'next/router';
import SearchBar from './SearchBar';
const notosans = Noto_Sans({ subsets: ['latin'], weight: "800" })
function NotesTitle() {
  const router1 = useRouter()
  const [isAdd,setIsAdd] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()
  var title = ""
  function newNote(){
    var noteData = ""
    fetch("http://localhost:3000/api/notes",{
      method: "POST",
      header:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({title,noteData})
    }).then(()=>{
      router1.reload();
      onClose();
    })
  }

  function addNoteModel(){
    return (
      <ModalContent>
      <ModalHeader>Create a new Note</ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input placeholder='Title' onChange={(e) => {title=e.target.value}}/>
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button onClick={newNote} colorScheme='blue' mr={3}>
          Save
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </ModalFooter>
    </ModalContent>
    )
  }
  function addSearchModel()
{
  return (
    <SearchBar isop={isOpen} onop={onOpen} iscl={onClose}/>
  ) 
}  return (
    <>
    <Box display="flex" maxW="100%" flexDir="row" justifyContent="flex-start" alignItems="center" paddingBottom="5px">
    <Box flexGrow="1" marginLeft="10px" fontFamily={notosans} fontSize="2.5rem" fontWeight="700">My Notes</Box>
     <Button marginRight="5px"><Box w={6} h={6} fontSize="1.5rem" onClick={()=>{setIsAdd(true);onOpen()}}><AddIcon marginBottom="10px"/></Box>
     </Button>
     <Button marginRight="5px"><Box w={6} h={6} fontSize="1.5rem" onClick={()=>{setIsAdd(false);onOpen()}}><SearchIcon marginBottom="10px"/></Box>
     </Button>
  </Box>
  
  <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
            <ModalOverlay />
            {isAdd ? addNoteModel() : addSearchModel()}
      </Modal>
  </>
  )
}

export default NotesTitle