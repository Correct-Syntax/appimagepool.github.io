import Image from 'next/image'
import Link from 'next/link'

function NavigationBar(props: any) {
  return <nav className="w-full py-8 h-112px">
    <div className="absolute w-full">
      <div className="flex flex-row justify-between w-full place-items-center">
        <div className="ml-50px">
          <Link href="/">
            <Image src="/appimagepool.svg" width={48} height={48} />
          </Link>
        </div>
        <div className="mr-50px">
          <a className="px-4 font-bold text-accent" href="/#">Home</a>
          <a className="px-4 font-bold text-accent" href="/#blog">Blog</a>
          <a className="px-4 font-bold text-accent" href="/#features">Features</a>
          <a className="px-4 font-bold text-accent" href="/#download">Download</a>
        </div>
      </div>
    </div>
  </nav>;
}

export default NavigationBar
