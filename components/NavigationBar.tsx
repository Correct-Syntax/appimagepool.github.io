import Image from 'next/image'
import Link from 'next/link'

function NavigationBar(props: any) {
  return (
    <nav className="relative w-full max-w-screen-xl py-8 mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between w-full place-items-center">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src="/appimagepool.svg" width={48} height={48} />
            
          </Link>
        </div>
        <div className="mt-6 md:mt-0">
          <Link href="/"><a className="px-4 font-bold text-accent hidden md:inline">Home</a></Link>
          <Link href="/#features"><a className="px-4 font-bold text-accent">Features</a></Link>
          <Link href="/blog"><a className="px-4 font-bold text-accent">Blog</a></Link>
          <Link href="/#download"><a className="px-4 font-bold text-accent">Download</a></Link>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
