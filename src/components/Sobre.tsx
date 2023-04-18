import {FaRegHeart} from 'react-icons/fa'
import avatar from '../../public/assets/Camila-Sobre.jpg'
import Image from 'next/image'
export function Sobre( ){
    return(
        <section id="sobre" className="flex flex-col items-center justify-center gap-6 mx-auto my-16 w-3/4 lg:flex-row">
             <div>
            <Image
          className='rounded-full w-48'
          alt="Logo Camila"
          src={avatar}
          priority/>
            </div>
            <div>
            <header className='flex gap-2'>
            <span className="font-semibold text-3xl mb-6">Cuidando dos seus direitos</span>
            <FaRegHeart
            size={38}
            color='#660000'
            />
            </header>   
            <p className="text-2xl font-light"> Ofereço aos meus clientes todo suporte 
                consultivo e contencioso.</p>
            </div>
           
        </section>
    )
}