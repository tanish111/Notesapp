import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import { Noto_Sans } from 'next/font/google';
import Notename from './Notename';
import RemoveBT from './RemoveBT';
import { useRouter } from 'next/navigation';
import NotesTitle from './NotesTitle';
import { useState,useEffect } from 'react';
import { useNotesListContext } from './provider/NotesProvider';
const notosans = Noto_Sans({ subsets: ['latin'], weight: "800" })
export default function MenuDesktop() {
  const [isLoading, setIsLoading] = useState(true)
  const [notesData,setNotesData] = useState(null)
  useEffect(()=>{
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
        var notes = notesData==null ? ["Loading"] : notesData
        var notesTitle = []
        for (let i in notes.notes){
            notesTitle.push([notes.notes[i]._id,notes.notes[i].title])
        }
  return (
    <div>
      <Flex flexDir="column" justifyContent="flex-start" alignItems="stretch" minH="100%">
        <NotesTitle />
        <Divider margin="0px" variant="solid" borderColor={'gray.400'} />
        <Flex flexGrow="1" flexDir="column">
          {notesTitle.map(item => {
            return (
              // Give Proper Key
                <Notename key={item[0]} noteid={item[0]} name={item[1]}/>
            )
          })}
        </Flex>
      </Flex>
    </div>
  )
}
