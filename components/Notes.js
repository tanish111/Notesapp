import React, { useEffect, useState } from 'react'
import { Textarea,Box } from '@chakra-ui/react'
import { Noto_Sans } from 'next/font/google'
import { useNotesListContext } from './provider/NotesProvider'
const notosans = Noto_Sans({subsets: ['latin'],weight:"700"})
function Notes(props) {
  var notesID = useNotesListContext().notes;
  const [titleF,setTitleF] = useState("")
  var [notesdata,setNotesData] = useState("")
  useEffect(() => {
    if(notesID!=""){
    fetch(`http://localhost:3000/api/notes/${notesID}`, {
      cache: "no-store",
    }).then((res) => {
      res.json().then(
        (noteDataF) => {
          setTitleF(noteDataF.note.title)
          setNotesData(noteDataF.note.noteData)
        }
      )
    });
  }
}, [notesID]);
useEffect(() => {
  if(notesID!=""){
  const newTitle = titleF
  const newnoteData = notesdata
  fetch(`http://localhost:3000/api/notes/${notesID}`,{
    method:"PUT",
    headers:{
      "Content-type":"application/json",
    },
    body: JSON.stringify({newTitle,newnoteData}),
  }).then((res)=>{
    console.log(res.status)
  });
}else{
  
}
},[titleF,notesdata])
  return (
    <Box display="flex" flexDir="column" justifyContent="flex-start" alignItems="stretch" minH="100%">
    <Textarea placeholder="Title" border="0" className={notosans.className} fontWeight="600" fontSize="2.5rem" height="3rem" value={titleF} onChange={(e) => {
      setTitleF(e.target.value);
    }}></Textarea>
    <Textarea border="0" placeholder='Write your note here!' flexGrow="1" onChange={(e) => {setNotesData(e.target.value)}} value={notesdata}></Textarea>
    </Box>
  )
}

export default Notes