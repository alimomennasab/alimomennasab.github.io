import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import matter from 'gray-matter'
import BlogPostBody from '../../components/BlogPostBody'

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

function formatPostDate(isoDate: string) {
  const d = new Date(isoDate)
  if (Number.isNaN(d.getTime())) return isoDate
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function postSlugs() {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

function readPost(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return {
    title: data.title as string,
    date: data.date as string,
    content,
  }
}

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = readPost(params.slug)
  if (!post) return { title: 'Post not found' }
  return { title: `${post.title} · Ali Momennasab` }
}

export default function BlogPostPage({ params }: Props) {
  const post = readPost(params.slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen w-full bg-secondary-color">
      <div className="mx-auto w-full max-w-3xl px-5 py-10 md:py-14">
        <Link
          href="/blog"
          className="inline-flex items-center rounded-md border border-black/15 bg-white/60 px-4 py-2 text-sm font-medium text-primary-color shadow-sm transition-colors hover:border-black/25 hover:bg-white"
        >
          ← All posts
        </Link>
        <article className="mt-10">
          <p className="text-sm text-gray-600">{formatPostDate(post.date)}</p>
          <h1 className="mt-2 text-3xl font-bold text-black md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-10">
            <BlogPostBody content={post.content} />
          </div>
        </article>
      </div>
    </div>
  )
}
