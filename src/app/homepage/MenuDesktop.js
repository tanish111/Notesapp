"use client"
import React from 'react'
import { ModalFooter,Input,FormLabel,FormControl,ModalBody,ModalContent,Box, Button, Divider, Flex,Text,useDisclosure,ModalHeader,Modal,ModalOverlay,ModalCloseButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Noto_Sans } from 'next/font/google'
const mongoose = require('mongoose')
const notosans = Noto_Sans({ subsets: ['latin'], weight: "800" })
const getNotes = async() => {
  try {
    const res = await fetch('http://localhost:3000/api/notes',{
    cache: "no-store",
  });
  if(!res.ok){
    throw new Error("Failed to fetch notes");
  }
  } catch (error){

  }
}
function MenuDesktop({titleList,addNotefunc}) {
  const notesTitle = titleList
  var count = Object.keys(notesTitle).length
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  function createNewNote(){
    const title = initialRef.current.value;
    count = count+1;
    const id = count+1;
    const newNote = {
      notekey:toString(id),
      title:title,
      notes:" "
    }
    notesTitle.push(newNote)
    onClose()
  }
  return (
    <div>
    <Flex flexDir="column" justifyContent="flex-start" alignItems="stretch" minH="100%">
      <Box display="flex" maxW="100%" flexDir="row" justifyContent="flex-start" alignItems="center">
        <Box flexGrow="1" marginLeft="10px" fontFamily={notosans} fontSize="2.5rem" fontWeight="700">My Notes</Box>
        <Button marginRight="5px" onClick={onOpen}><AddIcon w={6} h={6} /></Button>
      </Box>
      <Divider margin="0px" variant="solid" borderColor={'gray.400'} />
      <Flex flexGrow="1" flexDir="column">
        {notesTitle.map(item => {
          return (
            <Button key = {item.id} variant='outline' paddingEnd="6px" textAlign="start" marginRight="6px" marginLeft="6px" height="2.5rem" fontSize="1.2rem" backgroundColor="gray.200" margin="4px" borderRadius="8px" paddingStart="10px">{item.title}</Button>
          )
        })}
      </Flex>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='Title' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={createNewNote}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
    </div>
  )
}

export default MenuDesktop