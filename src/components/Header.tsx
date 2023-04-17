import Image from 'next/image'
import logo from '../../public/assets/Camila-Logo.svg'


export function Header(){
    return(
        <>
        <header className='flex items-center p-16 gap-6'>
        <Image
          className='w-12'
          alt="Logotipo Dr. Camilia Advogada"
          src={logo}
          priority/>
      <h1 className='text-gray-800 text-xl font-serif uppercase	'>Camila Schuller Lopes</h1>
      <h2 className='text-gray-600 text-1xl'>Advocacia</h2>     
      </header>
      <div className='bg-banner bg-no-repeat bg-cover w-full my-4'>
        <div className='w-full flex gap-4 flex-col justify-center items-center h-screen bg-opacity-80 bg-black'>
        <h2 className='text-white font-bold text-6xl'>
            Direito Civil, Previdenciário e Trabalhista </h2>
        <p className='text-white text-2xl'>
            Soluções jurídicas que atendem suas necessidades 
            com atendimento personalizado.</p>
        </div>
       </div>
      </>
    )
}