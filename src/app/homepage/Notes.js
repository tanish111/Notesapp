import React from 'react'
import { Textarea,Box } from '@chakra-ui/react'
import { Noto_Sans } from 'next/font/google'
const mongoose = require('mongoose')
const notosans = Noto_Sans({subsets: ['latin'],weight:"700"})
function Notes({idc}) {
  const title = "Hello"
  return (
    <Box display="flex" flexDir="column" justifyContent="flex-start" alignItems="stretch" minH="100%">
    <Textarea placeholder="Title" border="0" className={notosans.className} fontWeight="600" fontSize="2.5rem" height="3rem" value={idc} onChange={(e) => {localStorage.setItem("title",e.target.value)}}></Textarea>
    <Textarea border="0" placeholder='Write your note here!' flexGrow="1" onChange={(e) => {localStorage.setItem("noteData",e.target.value)}} ></Textarea>
    </Box>
  )
}

export default Notes