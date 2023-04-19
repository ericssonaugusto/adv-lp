import { useState } from 'react'
import Accordion from '../components/Accordion';


export function Faq(){
 
  const [open, setOpen] = useState(false);
  const toggle = (index:any) => {
    if (open === index) {
      return setOpen(null as any)
    }
    setOpen(index)
  }

  const accordionData = [
    {
      title: "Quando devo procurar um advogado?",
      content: "Texto da resposta"
    },
    {
      title: "Advogado Paloma realmente é o melhor?",
      content: "Texto da resposta"
    },
    {
      title: "Quanto custa uma consulta inicial?",
      content: "Texto da resposta"
    },
    {
      title: "Vou precisar de um avalista?",
      content: "Texto da resposta"
    },
  ]
  
    return(
    <div className='grid gap-4 w-full py-20 bg-zinc-500 items-center'>
      <h2 className='text-3xl text-center text-white font-bold'>Principais duvidas</h2>
      {accordionData.map((data, index) => {
        return <Accordion 
        key={index} 
        open={index === open as any} 
        title={data.title} 
        content={data.content} 
        toggle={() => toggle(index)}
        />
      }
      )
      }
    </div>

    )
}