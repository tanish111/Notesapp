"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Textarea,Box, Button } from '@chakra-ui/react'
import { Noto_Sans } from 'next/font/google'
const notosans = Noto_Sans({subsets: ['latin'],weight:"700"})
export default function EditNoteForm({ id, title, noteData }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newnoteData, setNewnoteData] = useState(noteData);
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newnoteData }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };


console.log(JSON.stringify({ newTitle, newnoteData }))
return (
    <Box display="flex" flexDir="column" justifyContent="flex-start" alignItems="stretch" minH="100%">
    <Textarea placeholder="Title" border="0" className={notosans.className} fontWeight="600" fontSize="2.5rem" height="3rem" value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}></Textarea>
    <Textarea border="0" placeholder='Write your note here!' flexGrow="1"value={newnoteData} onChange={(e) => {setNewnoteData(e.target.value)}} ></Textarea>
    <Button onClick={handleSubmit}>Save</Button>
    </Box>
)


//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//       <input
//         onChange={(e) => setNewTitle(e.target.value)}
//         value={newTitle}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Title"
//       />

//       <input
//         onChange={(e) => setNewnoteData(e.target.value)}
//         value={newnoteData}
//         className="border border-slate-500 px-8 py-2"
//         type="text"
//         placeholder="Topic Description"
//       />

//       <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
//         Update Topic
//       </button>
//     </form>
//   );
}