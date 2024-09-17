import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

//Fuente principal
const popinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })
//Meta Data para CEO
export const metadata: Metadata = {
  title: 'Banco Tu Guarida 💸 ',
  description: 'Tu banco amigo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    //Idioma y fuente a utilizar
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}
