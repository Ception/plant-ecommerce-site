import '../styles/global.css'

export const metadata = {
  title: 'Weed Website',
  description: 'A website for weed lovers',
}
 
export default function RootLayout({ children }) {
 return (
    <html>
        <body>{children}</body>
    </html>
  )
}