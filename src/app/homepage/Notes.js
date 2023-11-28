import React from 'react'
import { Textarea,Box } from '@chakra-ui/react'
import { Noto_Sans } from 'next/font/google'
const notosans = Noto_Sans({subsets: ['latin'],weight:"700"})
function Notes({notes}) {
  const title = (notes.length) ? notes[0] : "";
  return (
    <Box display="flex" flexDir="column" justifyContent="flex-start" alignItems="stretch" minH="100%">
    <Textarea placeholder="Title" border="0" className={notosans.className} fontWeight="600" fontSize="2.5rem" height="3rem" defaultValue={title}></Textarea>
    <Textarea border="0" placeholder='Write your note here!' flexGrow="1"></Textarea>
    </Box>
  )
}

export default Notes