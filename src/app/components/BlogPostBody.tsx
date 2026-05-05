import ReactMarkdown from 'react-markdown'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

type BlogPostBodyProps = {
  content: string
}

export default function BlogPostBody({ content }: BlogPostBodyProps) {
  return (
    <div className="prose prose-neutral max-w-none text-black prose-headings:text-black prose-p:text-black prose-li:text-black prose-strong:text-black prose-code:text-black prose-pre:bg-stone-100 prose-a:text-primary-color hover:prose-a:underline">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[
          [rehypeKatex, { strict: false, throwOnError: false }],
        ]}
        components={{
          a: ({ href, children, ...props }) => (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={
                href?.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              {...props}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
