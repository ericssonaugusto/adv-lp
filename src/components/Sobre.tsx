import {FaRegHeart} from 'react-icons/fa'
import avatar from '../../public/assets/Camila-foto.jpg'
import Image from 'next/image'
export function Sobre( ){
    return(
        <section className="flex items-center  gap-6 my-20 mx-60 p-12">
             <div>
            <Image
          className='rounded-full w-68'
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
            <p className="text-2xl font-extralight"> Ofereço aos meus clientes todo suporte 
                consultivo e contencioso.</p>
            </div>
           
        </section>
    )
}