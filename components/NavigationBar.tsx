import Image from 'next/image'

function NavigationBar(props: any) {
  return (
    <nav className="relative w-full max-w-screen-xl py-8 mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between w-full place-items-center">
        <div className="cursor-pointer">
          <a href="/">
            <Image src="/appimagepool.svg" width={48} height={48} />
          </a>
        </div>
        <div className="mt-6 md:mt-0">
          <a href="/" className="px-4 font-bold text-accent hidden md:inline">Home</a>
          <a href="/#features" className="px-4 font-bold text-accent">Features</a>
          <a href="/blog" className="px-4 font-bold text-accent">Blog</a>
          <a href="/#download" className="px-4 font-bold text-accent">Download</a>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
