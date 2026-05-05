import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'
import Sidebar from '../components/sidebar'

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

/** Turn one line of markdown into plain text (no #, **, `, links, math, etc.). */
function stripMarkdownPlain(line: string): string {
  let s = line.trim()
  if (!s) return ''

  s = s.replace(/\$\$[\s\S]*?\$\$/g, ' ')
  s = s.replace(/\$[^$\n]+\$/g, ' ')

  s = s.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
  s = s.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')

  s = s.replace(/\*\*(.+?)\*\*/g, '$1')
  s = s.replace(/__(.+?)__/g, '$1')
  s = s.replace(/\*(.+?)\*/g, '$1')
  s = s.replace(/_(.+?)_/g, '$1')

  s = s.replace(/`([^`]+)`/g, '$1')
  s = s.replace(/`/g, '')

  s = s.replace(/^#{1,6}\s+/, '')
  s = s.replace(/^>\s?/, '')
  s = s.replace(/^[-*+]\s+/, '')
  s = s.replace(/^\d+\.\s+/, '')

  return s.replace(/\s+/g, ' ').trim()
}

/** First two non-empty body lines, markdown removed, as separate preview lines. */
function excerptLinesFromBody(body: string): string[] {
  const rawLines = body.trimStart().split(/\r?\n/)
  const out: string[] = []
  for (const raw of rawLines) {
    if (out.length >= 2) break
    const plain = stripMarkdownPlain(raw)
    if (plain) out.push(plain)
  }
  return out
}

function listPosts() {
  if (!fs.existsSync(POSTS_DIR)) return []
  const slugs = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))

  return slugs
    .map((slug) => {
      const raw = fs.readFileSync(
        path.join(POSTS_DIR, `${slug}.md`),
        'utf8'
      )
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerptLines: excerptLinesFromBody(content),
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export default function BlogPage() {
  const blogPosts = listPosts()
  return (
    <div className="min-h-screen w-screen bg-secondary-color flex items-center justify-center p-4">
      <div className="bg-secondary-color flex flex-col md:flex-row justify-between p-4 w-full max-w-4xl h-auto md:h-[600px]">
        <Sidebar imageUrl="/images/personal_image.jpg" />
        <div className="flex flex-col min-h-0 w-full md:w-3/5 border-l border-black pl-14 overflow-hidden mt-4 md:mt-0 md:h-full">
          <h1 className="text-2xl md:text-3xl font-bold shrink-0">Blog</h1>
          <p className="italic text-base md:text-lg text-primary-color shrink-0">
            Trying to understand things better by writing about them
          </p>
          <div className="overflow-y-auto flex-1 min-h-0 pr-4 pt-4 pb-2">
            <ul className="flex flex-col gap-6">
              {blogPosts.map((post) => (
                <li key={post.slug} className="border-b border-black/10 pb-6 last:border-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <div className="overflow-hidden break-words rounded-sm border border-black p-3">
                      <span className="text-sm text-gray-600">
                        {formatPostDate(post.date)}
                      </span>
                      <h2 className="line-clamp-2 text-lg font-semibold text-black group-hover:text-primary-color group-hover:underline md:text-xl">
                        {post.title}
                      </h2>
                      <p className="mt-1 line-clamp-2 whitespace-pre-line text-sm text-gray-700 md:text-base">
                        {post.excerptLines.join('\n')}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
