import Link from "next/link"
import { Fragment } from "react"
import { ArrowUpRight, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  repoUrl: string
  category: string
  status: string
  architecture: { name: string; detail: string }[]
}

export function ProjectCard({ title, description, tags, repoUrl, category, status, architecture }: ProjectCardProps) {
  return <article className="group relative h-full overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-800/60 shadow-xl backdrop-blur-sm transition-colors hover:border-purple-500/60">
    <div aria-hidden="true" className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:bg-pink-500/15" />
    <div className="relative flex h-full flex-col p-6 md:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-200">{category}</span>
        <span className="text-xs text-zinc-400">{status}</span>
      </div>
      <div className="mb-6 flex min-h-32 flex-col justify-center gap-3 rounded-xl border border-zinc-700/70 bg-zinc-950/70 p-5 font-mono text-xs text-zinc-300 md:text-sm" aria-label="Simplified project architecture">
        <div className="flex w-full flex-col items-stretch justify-center gap-2 text-center sm:flex-row sm:flex-wrap sm:items-center">
          {architecture.map((node, index) => <Fragment key={node.name}>
            <span className="min-w-0 flex-1 rounded-lg border border-purple-400/30 bg-purple-400/10 px-3 py-2">{node.name}<br /><span className="text-purple-300">{node.detail}</span></span>
            {index < architecture.length - 1 && <ArrowUpRight className="mx-auto h-4 w-4 rotate-90 text-pink-400 sm:rotate-45" aria-hidden="true" />}
          </Fragment>)}
        </div>
        <p className="text-center text-[11px] text-zinc-500">Simplified from the repository documentation</p>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-300">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {tags.map((tag) => <li key={tag} className="rounded-full bg-zinc-700/70 px-3 py-1 text-xs text-zinc-200">{tag}</li>)}
      </ul>
      <div className="mt-auto border-t border-zinc-700/70 pt-5">
        <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md text-sm font-medium text-zinc-200 transition-colors hover:text-purple-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400">
          <Github className="mr-2 h-4 w-4" /> View source repository <ArrowUpRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  </article>
}
