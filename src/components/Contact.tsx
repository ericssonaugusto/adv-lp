import { FaPhoneAlt, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';



export function Contact() {
    return(
        <section id="contato" className='flex items-center flex-col py-48 border-t-2 '>
        <h2 className='text-4xl font-bold m-14 border-b-4 pb-2 border-red-900'>Contatos</h2>
        <ul className=' grid gap-8 grid-cols-1 w-3/4 items-center lg:grid-cols-4'>
        <li className='flex flex-col items-center gap-2'>
        <FaPhoneAlt color='#660000' size={24}/>
        <h3 className='font-bold text-3xl mt-6'>Telefone</h3>
        <span>(45) 99968-9178</span>        
        </li>
        <li className='flex flex-col items-center gap-2'>
        <FaWhatsapp color='#660000' size={32}/>
        <h3 className='font-bold text-3xl mt-6'>WhatsApp</h3>
        <span>(45) 99968-9178</span>        
        </li>
        <li className='flex flex-col items-center gap-2'>
        <FaFacebook color='#660000' size={32}/>
        <h3 className='font-bold text-3xl mt-6'>Facebook</h3>
        <span>@camilaschullerlopes</span>        
        </li>
        <li className='flex flex-col items-center gap-2'>
        <SiGmail color='#660000' size={26}/>
        <h3 className='font-bold text-3xl mt-6'>E-mail</h3>
        <span>camilaschullerl@gmail.com</span>        
        </li>
        </ul>
        </section>

    )
}