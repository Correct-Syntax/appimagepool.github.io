import Image from 'next/image'
import Link from 'next/link'

function NavigationBar(props: any) {
  if (props.absolute === true) {
    return (
      <nav className="absolute w-full py-8 h-112px">
        <div className="flex flex-row justify-between w-full place-items-center">
          <div className="ml-50px">
            <Link href="/">
              <Image src="/appimagepool.svg" width={48} height={48} />
            </Link>
          </div>
          <div className="mr-50px">
            <Link href="/"><a className="px-4 font-bold text-accent">Home</a></Link>
            <Link href="/blog"><a className="px-4 font-bold text-accent">Blog</a></Link>
            <Link href="/#features"><a className="px-4 font-bold text-accent">Features</a></Link>
            <Link href="/#download"><a className="px-4 font-bold text-accent">Download</a></Link>
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className="w-full py-8 h-112px">
        <div className="flex flex-row justify-between w-full place-items-center">
          <div className="ml-50px">
            <Link href="/">
              <Image src="/appimagepool.svg" width={48} height={48} />
            </Link>
          </div>
          <div className="mr-50px">
            <Link href="/"><a className="px-4 font-bold text-accent">Home</a></Link>
            <Link href="/#blog"><a className="px-4 font-bold text-accent">Blog</a></Link>
            <Link href="/#features"><a className="px-4 font-bold text-accent">Features</a></Link>
            <Link href="/#download"><a className="px-4 font-bold text-accent">Download</a></Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavigationBar
