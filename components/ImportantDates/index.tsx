import { Box } from "@chakra-ui/react";

/* export  function ImportantDates() {
    
    return (
        <Box bg='tomato' w='100%' p={4} color='white'>
        This is the Box
      </Box>
    )
} */
{/* <style>
#rcorners {
  borderRadius: 25px;
  background: #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
}
</style> */}

export type data={

    date: string
    event:string
}

const data: data[]=[
    {
        date:"20 dec",
        event:"Workshop Registration"

    },
    {
        date:"21 dec",
        event:"Hackathon"


    }
]

export function ImportantDates(data:data) {
        
    
    return (
        

//idk why div css is not applying         
        <Box bg='white' w='400px' p={4}  borderRadius='2xl' h='400px' borderTopRadius="0" boxShadow='xl'>
            <div color='red'>Important 
            </div>
        </Box>
    )
}

data.map((item: data)=>ImportantDates(item))

