import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import { Noto_Sans } from 'next/font/google';
const getNotes = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/notes', {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch notes");
    }
    return res.json();
  } catch (error) {
    console.log("Error in fetching Data", error);
  }
};
const notosans = Noto_Sans({ subsets: ['latin'], weight: "800" })
export default async function MenuDesktop({ titleList }) {
  const { notes } = await getNotes();
  const notesTitle = notes;
  return (
    <div>
      <Flex flexDir="column" justifyContent="flex-start" alignItems="stretch" minH="100%">
        <Box display="flex" maxW="100%" flexDir="row" justifyContent="flex-start" alignItems="center">
          <Box flexGrow="1" marginLeft="10px" fontFamily={notosans} fontSize="2.5rem" fontWeight="700">My Notes</Box>
          {/* <Button marginRight="5px" onClick={createNewNote}><Box backgroundColor="red" w={6} h={6}></Box></Button> */}
        </Box>
        <Divider margin="0px" variant="solid" borderColor={'gray.400'} />
        <Flex flexGrow="1" flexDir="column">
          {notesTitle.map(item => {
            return (
              <Button onClick={()=>{localStorage.setItem('currid', item._id);}} key={item._id} variant='outline' paddingEnd="6px" textAlign="start" marginRight="6px" marginLeft="6px" height="2.5rem" fontSize="1.2rem" backgroundColor="gray.200" margin="4px" borderRadius="8px" paddingStart="10px">{item.title}</Button>
            )
          })}
        </Flex>
      </Flex>
    </div>
  )
}

