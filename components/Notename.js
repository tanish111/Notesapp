"use client";
import React from 'react'
import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNotesListContext } from './provider/NotesProvider';
import { useRouter } from 'next/router'
function Notename(props) {
    const router1 = useRouter()
    const name = props.name
    const id = props.noteid
    function deleteNote(){
      fetch(`http://localhost:3000/api/notes?id=${id}`,{
        method: "DELETE",
      }).then(() => {
        router1.reload();
      }
      )
    }
    const notes = useNotesListContext();
  return (
    <>
<Flex flexDir="row" alignItems="center" justifyContent="flex-start">
<Flex flexDir="row" alignItems="center" justifyContent="flex-start" flexGrow="1">
         <Button flexGrow="1" variant='outline' paddingEnd="6px" textAlign="start" marginRight="6px" marginLeft="6px" height="2.5rem" fontSize="1.2rem" backgroundColor="gray.200" margin="4px" borderRadius="8px" paddingStart="10px" onClick={() => {
          notes.setNotes(id);
         }}>{name.length > 15 ? name.slice(0,15)+"..." : name}</Button>
         <Button padding="8px" marginRight="5px" backgroundColor="gray.200" variant='outline' onClick={deleteNote}>
         <DeleteIcon color="red" />
         </Button>
</Flex>
</Flex>
</>
  )
}

export default Notename