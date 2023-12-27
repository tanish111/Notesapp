import React from 'react'
import { Box, Button,Divider,Text } from '@chakra-ui/react'
import { useNotesListContext } from './provider/NotesProvider';
function SearchResultCard(props) {
    const notes = useNotesListContext();
    function openNote(){
        notes.setNotes(props.noteid)
        props.iscl()
    }
  return (
    <>
    <Button height="auto" display="flex" flexDir="column" marginTop="10px" width="100%" borderRadius="12px" variant="outline" onClick={openNote}>
        <Text padding="5px">{props.title}</Text>
        <Divider />
        <Text isTruncated width="100%" padding="5px" fontWeight="100">{props.noteData}</Text>
    </Button>
    </>
  )
}

export default SearchResultCard