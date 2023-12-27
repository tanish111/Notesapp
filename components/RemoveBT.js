import React from 'react'
import {Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation';
function RemoveBT({id}) {
    const router = useRouter();
    const removeTopic = async() => {
        console.log(id)
        const confirmed = confirm('Are You Sure?');
        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/notes?id=${id}`,{
                method: "DELETE",
            });
            if(res.ok){
            router.refresh();
        }
        }
    };
  return (
    <Button onClick={removeTopic} h='1rem' w='1rem' borderRadius="50%" margin="5px" color="red">
      X
    </Button>
  )
}

export default RemoveBT