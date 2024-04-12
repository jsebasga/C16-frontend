import { NavView } from '../(main)/components'
import '../globals.css'

export const metadata = {
  title: 'Ronda',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <NavView />
        {children}
      </body>
    </html>
  )
}