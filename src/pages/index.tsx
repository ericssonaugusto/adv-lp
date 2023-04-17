import { Area } from '@/components/Area'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Sobre } from '@/components/Sobre'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header />
    <Sobre />
    <Area />
    <Contact />
    </>
  )
}
