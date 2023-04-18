import Accordion from '../components/Accordion';

export function Faq(){
    return(
    <div className='grid gap-4 w-full py-20 bg-zinc-500 items-center'>
        <h2 className='text-3xl text-center text-white font-bold'>Principais duvidas</h2>
      <Accordion title="Quando devo procurar um advogado?" content="Texto da resposta" />
      <Accordion title="Advogado Paloma realmente é o melhor?" content="Texto da resposta" />
      <Accordion title="Quanto custa uma consulta inicial?" content="Texto da resposta" />
      <Accordion title="Vou precisar de um avalista?" content="Texto da resposta" />
      <Accordion title="Preciso usar terno no tribunal?" content="Texto da resposta" />
    </div>

    )
}