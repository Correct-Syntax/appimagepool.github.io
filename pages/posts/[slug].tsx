import fs from 'fs'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'

import Image from 'next/image'

import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

import Date from '../../components/Date'

function Heading1Text(props) {
    return (
        <h1 { ...props } className="text-heading-1 text-accent font-bold"></h1>
    )
}

function Heading2Text(props) {
    return (
        <h2 { ...props } className="text-heading-2 text-accent"></h2>
    )
}

function ParagraphText(props) {
    return (
        <p { ...props } className="text-paragraph"></p>
    )
}

const components = {
    "h1": Heading1Text,
    "h2": Heading2Text,
    "p": ParagraphText
}

export default function PostPage({ source, frontMatter } : { source: any, frontMatter: any }) {
    return (
        <div className="flex flex-col max-w-4xl mb-32 space-y-8 mx-auto px-6 mt-10">
            {/* TODO: Use Image instead of img */}
            <img src={frontMatter.thumbnailUrl} className="max-w-2xl w-auto h-auto rounded-md shadow-lg hover:scale-105 ease-linear duration-200"></img>
            <div className="space-y-2">
                <h1 className="text-title text-accent font-bold">{frontMatter.title}</h1>
                <span className="text-small text-placeholder pb-2">
                    Written by {frontMatter.author} |&nbsp;
                    <Date dateString={frontMatter.date}/>
                </span>
                <p className="text-paragraph">{frontMatter.description}</p>
            </div>
            <MDXRemote {...source} components={components} />
        </div>
    )
}

export const getStaticProps = async ({ params } : { params: any }) => {
    const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
    const source = fs.readFileSync(postFilePath)

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
        },
        scope: data,
    })

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        }
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths.map((path: any) => path.replace(/\.mdx?$/, ''))
                               .map((slug: any) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
