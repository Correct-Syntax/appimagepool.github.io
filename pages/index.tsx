import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/Button'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { parseISO } from 'date-fns'

import githubIcon from '../public/github.svg'
import home from '../public/home.jpg'
import app from '../public/app.jpg'
import category from '../public/category.jpg'
import search from '../public/search.jpg'


function Home({ posts } : { posts: any }) {
  return (
    <div>
      <main>
        <div className="relative h-screen flex flex-col lg:flex-row space-y-5 mx-auto mt-20 md:mt-44">
          <div className="flex flex-col ml-6 md:ml-20 mr-6 md:mr-0 lg:ml-44">
            <h1 className="text-title font-bold text-accent">AppImage Pool</h1>
            <p className="text-paragraph text-gray-800 mt-3">A simple, modern AppImageHub client powered by flutter.</p>
            <div className="flex flex-row space-x-5 mt-6">
              <Button isAccented={ true } text="Download" link="/#download" />
              <Button isFlat={ true } text="Documentation" link="#" />
            </div>
          </div>
          <div className="lg:ml-28">
            <div className="mt-12 lg:mt-0 rounded-tl-md max-w-full h-auto">
              <Image src={app} />
            </div>
          </div>
        </div>

        <div id="blog" className="relative bg-secondary flex flex-col place-items-center py-32 px-6">
          <h1 className="text-heading-1 text-accent font-bold mx-auto align-center">Latest News</h1>
          <div className="w-full max-w-5xl mx-6 my-10">
            {posts.map((post: any) => (
              <div className="flex flex-col md:flex-row" key="{post.data.title}">
                <div className="w-full md:w-1/2 hover:scale-105 ease-linear duration-200">
                  <div className="max-w-full h-auto rounded-md shadow-lg">
                    <Image src={post.data.thumbnailUrl} width={300} height={200} />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col ml-0 md:ml-16 mt-10 md:mt-0 space-y-4 justify-center">
                  <h2 className="text-heading-2 text-accent">{post.data.title}</h2>
                  <p className="text-paragraph">{post.data.description}</p>
                  <div className="flex flex-row space-x-5">
                    {/* TODO: Use POSTS_PATH here */}
                    <Button isAccented={ true } text="Read More" link={ "posts/" + post.filePath.replace(".mdx", "") } />
                    <Button isFlat={ true } text="View All" link="/blog" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TODO: Get the feature pattern to show */}

        <div id="features" className="flex flex-col py-14 md:py-20">
          <h1 className="text-heading-1 text-accent font-bold mx-auto mb-10">Features</h1>
          <div className="max-w-6xl justify-center mx-auto">
            <div className="flex flex-col md:flex-row mx-4 my-20 items-center">
              <div className="w-full md:w-1/2 text-left md:text-right space-y-5 max-w-md md:max-w-sm">
                <h2 className="text-heading-2 text-accent">Simple Categories</h2>
                <p className="text-paragraph">All apps are sorted into categories so you can search and find what your looking for quickly</p>
              </div>
              <div className="w-full md:w-1/2 bg-contain bg-no-repeat bg-feature-pattern mt-10 md:mt-0 ml-0 md:ml-10">
                <div className="max-w-full h-auto hover:scale-105 ease-linear duration-200 rounded-md shadow-lg">
                  <Image src={category} />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mx-4 my-20 items-center">
              <div className="w-full md:w-1/2 bg-contain bg-no-repeat bg-feature-pattern mb-10 md:mb-0 mr-0 md:mr-10">
                <div className="max-w-full h-auto hover:scale-105 ease-linear duration-200 rounded-md shadow-lg">
                  <Image src={app} />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left space-y-5 max-w-md md:max-w-sm">
                <h2 className="text-heading-2 text-accent">Upgrade and Downgrade AppImages Easily</h2>
                <p className="text-paragraph">Upgrade or downgrade all apps with the click of a button</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mx-4 my-20 items-center">
              <div className="w-full md:w-1/2 text-left md:text-right space-y-5 max-w-md md:max-w-sm">
                <h2 className="text-heading-2 text-accent">Version History and Multi Download Support</h2>
                <p className="text-paragraph">Keep multiple versions of AppImages at the same time</p>
              </div>
              <div className="w-full md:w-1/2 bg-contain bg-no-repeat bg-feature-pattern mt-10 md:mt-0 ml-0 md:ml-10">
                <div className="max-w-full h-auto hover:scale-105 ease-linear duration-200 rounded-md shadow-lg">
                  <Image src={search} />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mx-4 my-20 items-center">
              <div className="w-full md:w-1/2 bg-contain bg-no-repeat bg-feature-pattern mb-10 md:mb-0 mr-0 md:mr-10">
                <div className="max-w-full h-auto hover:scale-105 ease-linear duration-200 rounded-md shadow-lg">
                  <Image src={home} />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-left space-y-5 max-w-md md:max-w-sm">
                <h2 className="text-heading-2 text-accent">Fast Downloader</h2>
                <p className="text-paragraph">Thanks to multiprocessing and parellism, AppImage Pool downloads apps extremely quickly</p>
              </div>
            </div>
          </div>
        </div>
        
        <div id="opensource" className="flex flex-col px-4 py-32">
          <a href="https://github.com/prateekmedia/appimagepool">
            <div className="flex flex-col md:flex-row justify-center place-items-center">
              <p className="order-last md:order-first text-xl sm:text-2xl md:text-3xl md:mr-6">Free and open source forever</p>
              <div className="order-first md:order-last w-10 h-10 mb-4 md:mb-0">
                <Image src={githubIcon} width={40} height={40} />
              </div>
            </div>
          </a>
        </div>

        <div id="download" className="flex flex-col bg-dark-1 pt-8 md:pt-32 pb-36 md:pb-64">
          <h1 className="text-heading-1 text-accent font-bold text-center py-32">Download</h1>
          <div className="flex flex-col md:flex-row justify-center mx-auto">
            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0">
              <Button isAccented={ true } text="Flatpak" link="https://flathub.org/apps/io.github.prateekmedia.appimagepool" />
              <Button isAccented={ true } text="AppImage" link="https://github.com/prateekmedia/appimagepool/releases/latest/" />
              <Button isAccented={ true } text="Nightly" link="https://github.com/prateekmedia/appimagepool/releases/continuous/" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home

export function getStaticProps() {
  const allPosts = postFilePaths.map((filePath: any) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath
    }
  }).sort((a: any, b: any) => {
      const beforeDate: any = parseISO(a.data.date);
      const afterDate: any = parseISO(b.data.date);
      return afterDate - beforeDate;
  })

  // TODO: Don't publish drafts

  const posts = [allPosts[0]]

  return { props: { posts } }
}
