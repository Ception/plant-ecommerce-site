import '../styles/global.css'
import Header from './(components)/Header'
import Footer from './(components)/Footer'

export const metadata = {
  title: 'Weed Website',
  description: 'A website for weed lovers',
}
 
export default function RootLayout({ children }) {
 return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}