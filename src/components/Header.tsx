import Image from 'next/image'
import logo from '../../public/assets/Camila-Logo.svg'


export function Header(){
    return(
        <header className='flex flex-col items-center p-6'>
      <Image
          className='w-40'
          alt="Logo minhas anotações"
          src={logo}
          priority/>
      <h1 className='text-gray-800 text-3xl'>CAMILA SCHULLER LOPES</h1>
      <h2 className='text-gray-600 text-1xl'>Advocacia</h2>
      
    </header>
    )
}