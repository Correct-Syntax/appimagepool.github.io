// import { MDXProvider } from '@mdx-js/react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Text from '../components/Text';

// const ResponsiveImage = (props) => (
//     <Image alt={props.alt} layout="responsive" {...props} />
// );

// const components = {
//     img: ResponsiveImage,
//     h1: Text,
//     h2: Text,
//     p: Text,
//     // code: Pre,
//     // inlineCode: Code,
// };

// export default function Post(props) {
//     return (
//       <MDXProvider components={components}>
//         <main {...props} />
//       </MDXProvider>
//     );
// }

const components = {};

export default function Post({ source }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = 'Some **mdx** text, with a component';
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
