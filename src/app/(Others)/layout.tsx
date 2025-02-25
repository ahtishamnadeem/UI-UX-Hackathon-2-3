import "../globals.css"
import Footer from "../components/Footer";
import Header from "../components/Header";


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-black">
        <Header/>

        </div>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
