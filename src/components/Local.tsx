import { FaMapMarkerAlt } from 'react-icons/fa';



export function Local() {
    return(
        <section id="contato" className='flex items-center flex-col py-48 border-t-2 '>
        <h2 className='text-4xl font-bold m-14 border-b-4 pb-2 border-red-900'>Endereços</h2>
        <ul className=' grid gap-8 grid-cols-1 w-3/4 items-center lg:grid-cols-2'>
        <li className='flex flex-col items-center gap-2'>
        <FaMapMarkerAlt color='#660000' size={24}/>
        <h3 className='font-bold text-3xl mt-6'>Foz do Iguaçu</h3>
        <p>Avenida Rosa Cirilo de Castro, nº 200, sala 04<br/>Jardim Polo Centro <br />CEP 85863-735</p>        
        </li>
        <li className='flex flex-col items-center gap-2'>
        <FaMapMarkerAlt color='#660000' size={32}/>
        <h3 className='font-bold text-3xl mt-6'>Medianeira</h3>
        <p>Avenida Brasilia, nº 1420 <br/>Shopping Medianeira, sala 16 <br />CEP 85863-735</p>        
        </li>
        </ul>
        </section>

    )
}