import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout(props) {
  console.log("layout",props.modal);
  return (
    <html>
      <body>
        {props.children}
        {props.modal}
      </body>
    </html>
  )
}
