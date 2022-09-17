import type { NextPage } from 'next'
import Link from 'next/link'
import Button from '../components/Button'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'

function Blog({ posts }) {
    return (
        <div>
            <div id="blog" className="flex flex-col place-items-center">
                <div>
                    <h1 className="mb-16 text-heading-1 text-accent font-bold">Blog</h1>
                    {/* TODO: Order by date */}
                    {/* TODO: Add pagination */}
                    {posts.map((post) => (
                        <div className="mb-32 flex flex-row space-x-120px">
                            <div className="mr-60px hover:scale-105 ease-linear duration-200">
                                <img src={post.data.thumbnailUrl} width="480" className="rounded-md shadow-lg"></img>
                            </div>
                            <div className="flex flex-col w-380px space-y-4 justify-center">
                            <h2 className="text-heading-2 text-accent">{post.data.title}</h2>
                            <p className="text-small text-placeholder">{post.data.author} | {post.data.date}</p>
                            <p className="text-paragraph">{post.data.description}</p>
                            {/* TODO: Use POSTS_PATH here */}
                            <Button isAccented={ true } text="Read More" link={ "posts/" + post.filePath.replace(".mdx", "") } />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog

export function getStaticProps() {
    const posts = postFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)
  
      return {
        content,
        data,
        filePath
      }
    })
  
    return { props: { posts } }
  }  
