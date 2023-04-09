import './globals.css'
export const metadata = {
  title: 'Generic App',
  description: 'Created by Malena Fresco',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
