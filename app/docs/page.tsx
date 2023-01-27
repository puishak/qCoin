import Link from 'next/link';
export default function Docs() {
    return (
        <div>
            <h1 className='text-xl border-b text-slate-800'>Docs</h1>
            <Link href='https://bitcoin.org/bitcoin.pdf'>
                <p>Bitcoin Whitepaper</p>
            </Link>
            <Link href='https://www.investopedia.com/news/how-bitcoin-works/'>
                <p>Investopedia: How Bitcoin Works</p>
            </Link>
        </div>
    )
}