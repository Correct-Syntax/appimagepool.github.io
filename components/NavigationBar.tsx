import Image from 'next/image'

function NavigationBar(props: any) {
  return <nav className="absolute w-full">
    <div className="pt-8 flex flex-row justify-between w-full place-items-center">
      <div className="ml-50px">
        <Image src="/appimagepool.svg" width={48} height={48} />
      </div>
      <div className="mr-50px">
        <a className="px-4 font-bold text-accent" href="/#">Home</a>
        <a className="px-4 font-bold text-accent" href="/#blog">Blog</a>
        <a className="px-4 font-bold text-accent" href="/#features">Features</a>
        <a className="px-4 font-bold text-accent" href="/#download">Download</a>
      </div>
    </div>
  </nav>;
}

export default NavigationBar
