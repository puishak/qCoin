import '@/styles/globals.css'
import Link from 'next/link';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {



    const header = (
        <header className='text-center bg-slate-400 rounded-lg p-4 my-4'>
            <Link href='/'>
                <h1>qCoin</h1>
            </Link>
            <Link href='/team'>
                <p>Team</p>
            </Link>
            <Link href='/docs'>
                <p>Docs</p>
            </Link>
        </header>
    )

    return (
        <html lang="en">
            <head />
            <body className='mx-auto max-w-4xl'>
                {header}
                {children}
            </body>
        </html>
    )
}
