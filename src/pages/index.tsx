import { Area } from '@/components/Area'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Local } from '@/components/Local'
import { Sobre } from '@/components/Sobre'
import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Sobre />
    <Area />    
    <Contact />
    <Local />
    <Footer />
    </>
  )
}
