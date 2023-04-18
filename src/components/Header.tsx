import Image from 'next/image'
import logo from '../../public/assets/Camila-Logo.svg'


export function Header(){
    return(
        <>
        <header className='flex flex-col items-center pt-16 gap-2'>
        <Image
          alt="Logotipo Dr. Camilia Advogada"
          src={logo}
          width={120}
          priority/>
      <h1 className='text-gray-800 text-3xl font-serif uppercase	'>Camila Schuller Lopes</h1>
      <h2 className='text-gray-600 text-2xl uppercase tracking-widest'>Advocacia</h2>
      <nav>
        <ul className='flex gap-6 text-gray-600 text-gl uppercase tracking-widest pt-16'>
            <li><a href="#area">Especialidades</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contatos</a></li>
        </ul>
      </nav>     
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