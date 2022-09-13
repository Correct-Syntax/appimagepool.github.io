import fs from 'fs'
import matter from 'gray-matter'

import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import dynamic from 'next/dynamic'

import Image from 'next/image'

import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils'

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

export default function PostPage({ source, frontMatter }) {
    return (
        <div className="mx-50px mb-32 space-y-8">
            {/* TODO: Use Image instead of img */}
            <div className="flex flex-row justify-center">
                <img src={frontMatter.thumbnailUrl} width="600" className="rounded-md shadow-lg hover:scale-105 ease-linear duration-200"></img>
            </div>
            <div className="space-y-2">
                <h1 className="text-title text-accent font-bold">{frontMatter.title}</h1>
                {/* TODO: Add the reading time text next to author e.g. "Written by John Doe | 2 minute read time" */}
                <p className="text-small text-placeholder">Written by {frontMatter.author}</p>
                <p className="text-paragraph">{frontMatter.description}</p>
            </div>
            <MDXRemote {...source} components={components} className="prose" />
        </div>
    )
}

export const getStaticProps = async ({ params }) => {
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
    const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, ''))
                               .map((slug) => ({ params: { slug } }))

    return {
        paths,
        fallback: false,
    }
}
