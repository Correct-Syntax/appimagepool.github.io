import type { NextPage } from 'next'
import Link from 'next/link'
import Button from '../components/Button'
import Date from '../components/Date'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { parseISO } from 'date-fns'

function Blog({ posts } : { posts: any }) {
    return (
        <div>
            <div id="blog" className="flex flex-col max-w-4xl place-items-center mx-auto mt-20 px-6">
                <div>
                    <h1 className="text-heading-1 text-accent font-bold">Blog</h1>
                    {/* TODO: Order by date */}
                    {/* TODO: Add pagination */}
                    {posts.map((post: any) => (
                      <div className="flex flex-col md:flex-row my-32" key={post.data.title}>
                        <div className="w-full md:w-1/2 hover:scale-105 ease-linear duration-200">
                          <img src={post.data.thumbnailUrl} className="max-w-full h-auto rounded-md shadow-lg"></img>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col ml-0 md:ml-16 mt-10 md:mt-0 space-y-4 justify-center">
                          <h2 className="text-heading-2 text-accent">{post.data.title}</h2>
                          <span className="text-small text-placeholder">
                            {post.data.author} |&nbsp;
                            <Date dateString={post.data.date}/>
                          </span>
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
    const posts = postFilePaths.map((filePath: any) => {
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

    return { props: { posts } }
  }  
