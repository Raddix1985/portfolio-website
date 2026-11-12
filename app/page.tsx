import Link from "next/link"
import Image from "next/image"
import type { ReactNode } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"

const skillGroups = [
  { title: "Cloud & Platform Engineering", items: ["Microsoft Azure", "Azure Container Apps", "Azure Storage", "Terraform", "Infrastructure as Code"] },
  { title: "DevOps & Automation", items: ["GitHub Actions", "CI/CD", "Docker", "OIDC authentication"] },
  { title: "Infrastructure & Security", items: ["Azure networking", "Managed identity", "Remote Terraform state", "Python"] },
]

const projects = [
  {
    title: "Azure Platform Engineering Lab",
    description: "A hands-on Azure platform lab using Terraform to provision a container application environment. The repository documents remote Terraform state, GitHub Actions OIDC authentication, managed identity for image pulls, and the application infrastructure.",
    tags: ["Azure", "Terraform", "Azure Container Apps", "Azure Storage", "GitHub Actions", "OIDC", "Docker"],
    repoUrl: "https://github.com/Raddix1985/azure-platform-lab",
    category: "Personal project · Proof of concept",
    status: "Repository available",
    architecture: [
      { name: "GitHub Actions", detail: "OIDC" },
      { name: "Terraform", detail: "Azure resources" },
      { name: "Container Apps", detail: "Managed identity" },
    ],
  },
  {
    title: "Azure AI Infrastructure Lab",
    description: "Terraform infrastructure for experimenting with Azure AI Foundry resources and model deployments, with integration to the SimpliCreate LiteLLM gateway.",
    tags: ["Azure AI Foundry", "Terraform", "AzureRM", "Model deployments", "LiteLLM"],
    repoUrl: "https://github.com/Raddix1985/azure-ai-lab",
    category: "Infrastructure - AI lab",
    status: "Repository available",
    architecture: [
      { name: "Terraform", detail: "AzureRM" },
      { name: "Azure AI Foundry", detail: "Model deployments" },
      { name: "LiteLLM", detail: "Gateway integration" },
    ],
  },
  {
    title: "Event-Driven Intake Automation",
    description: "A sanitized Make.com scenario blueprint for webhook-based intake. It stores submissions in Notion, falls back to Google Sheets if the primary write fails, routes engagement-specific Gmail replies, and sends Slack notifications.",
    tags: ["Make.com", "Webhooks", "Notion", "Google Sheets", "Gmail", "Slack"],
    repoUrl: "https://github.com/Raddix1985/event-driven-api-pipeline",
    category: "Integration - Scenario blueprint",
    status: "Documented blueprint",
    architecture: [
      { name: "Webhook", detail: "Intake" },
      { name: "Notion", detail: "Sheets fallback" },
      { name: "Gmail + Slack", detail: "Routed notifications" },
    ],
  },
  {
    title: "LandingGen",
    description: "A client-side landing page generator with three presets, an editable live preview, configurable sections and SEO fields, and export to standalone HTML or a ZIP bundle.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Live preview", "HTML export", "JSZip"],
    repoUrl: "https://github.com/Raddix1985/landing-gen",
    category: "Web tool - Static generator",
    status: "Client-side app",
    architecture: [
      { name: "Form editor", detail: "Configuration" },
      { name: "Live preview", detail: "Desktop + mobile" },
      { name: "Export", detail: "HTML + ZIP" },
    ],
  },
  {
    title: "SimpliCreate Web Platform",
    description: "An Angular web application with server-side rendering, Sanity-backed content services, and Vercel Analytics and Speed Insights integration.",
    tags: ["Angular", "Server-side rendering", "Sanity", "Vercel Analytics", "Speed Insights"],
    repoUrl: "https://github.com/Raddix1985/simplicreate-web",
    category: "Web platform - Angular",
    status: "Repository available",
    architecture: [
      { name: "Angular", detail: "Web application" },
      { name: "Sanity", detail: "Content services" },
      { name: "Vercel", detail: "Analytics + insights" },
    ],
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      <main id="main-content">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="animate-blob absolute left-10 top-20 h-72 w-72 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-3xl" />
            <div className="animate-blob animation-delay-2000 absolute right-10 top-40 h-72 w-72 rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-3xl" />
            <div className="animate-blob animation-delay-4000 absolute bottom-20 left-1/3 h-72 w-72 rounded-full bg-fuchsia-500 opacity-20 mix-blend-multiply blur-3xl" />
          </div>
          <div className="container relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">Cloud Infrastructure &amp; Platform Engineer</p>
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                <span className="block">Hi, I&apos;m</span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Christopher Owens</span>
              </h1>
              <p className="max-w-[600px] text-xl text-zinc-300">Engineering reliable infrastructure. Automating operations. Building scalable cloud platforms.</p>
              <p className="max-w-[600px] text-lg text-zinc-400">Building automated, secure and reliable cloud infrastructure through Infrastructure as Code, containerization, CI/CD and modern platform engineering practices.</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild className="group border-0 bg-gradient-to-r from-purple-500 to-pink-500"><Link href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button>
                <Button asChild variant="outline" className="border-zinc-700 text-pink-300 hover:text-pink-200"><Link href="#contact">Contact Me</Link></Button>
              </div>
              <div className="flex gap-4 pt-2">
                <SocialLink href="https://github.com/Raddix1985" label="GitHub"><Github /></SocialLink>
                <SocialLink href="https://www.linkedin.com/in/christopher-owens-46bb3531/" label="LinkedIn"><Linkedin /></SocialLink>
                <SocialLink href="mailto:hello@christopherowens.tech" label="Email"><Mail /></SocialLink>
              </div>
            </div>
            <div className="flex justify-center"><CreativeHero /></div>
          </div>
          <a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 flex h-10 w-6 -translate-x-1/2 items-start justify-center rounded-full border-2 border-white/30 p-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"><span className="h-1.5 w-1.5 rounded-full bg-white/70" /></a>
        </section>

        <section id="about" className="section-anchor relative py-10 md:py-12">
          <div className="container relative z-10">
            <SectionHeading title="About Me" subtitle="A practical path into cloud and platform engineering" />
            <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-10">
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-70 blur-xl" />
                <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-950/50 shadow-2xl md:aspect-[6/5]">
                  <Image src="/christopher-avatar.png" alt="Stylized cloud and infrastructure engineering illustration" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </div>
              </div>
              <GlassmorphicCard>
                <p className="text-lg leading-relaxed text-zinc-300">I bring around 14 years of practical IT industry experience, built through infrastructure support, systems administration and hands-on troubleshooting. I&apos;m growing that foundation into cloud, DevOps and platform engineering through practical projects and continuous learning.</p>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300">My current engineering work includes Azure, Terraform, Docker and automation. I&apos;m especially interested in platform engineering, reliable infrastructure and observability: making systems easier to deploy, understand and operate.</p>
                <p className="mt-4 text-lg leading-relaxed text-zinc-300">Independent projects and a homelab give me space to test ideas, document what I learn and build repeatable systems.</p>
                <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Info label="Name" value="Christopher Owens" />
                  <Info label="Email" value={<a className="hover:text-purple-300" href="mailto:hello@christopherowens.tech">hello@christopherowens.tech</a>} />
                  <Info label="Location" value="Cape Town, South Africa" />
                  <Info label="Career focus" value="Cloud, platform & infrastructure engineering" />
                </dl>
              </GlassmorphicCard>
            </div>
          </div>
        </section>

        <section id="skills" className="section-anchor relative py-10 md:py-12">
          <div className="container relative z-10">
            <SectionHeading title="Technical Skills" subtitle="Grouped by the work they support" />
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => <GlassmorphicCard key={group.title}>
                <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">{group.items.map((item) => <li key={item} className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1.5 text-sm text-zinc-200">{item}</li>)}</ul>
              </GlassmorphicCard>)}
            </div>
            <p className="mt-6 text-center text-sm text-zinc-500">Skills and technologies shown here reflect the tools and practices featured in the projects below.</p>

            
          </div>
        </section>

        <section id="projects" className="section-anchor relative py-10 md:py-12">
          <div className="container relative z-10">
            <SectionHeading title="Engineering Projects" subtitle="Independent work and practical infrastructure labs" />
            <div className={`mx-auto mt-10 grid w-full gap-6 ${projects.length === 1 ? "max-w-3xl grid-cols-1" : "max-w-6xl grid-cols-1 lg:grid-cols-2"}`}>
              {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
            </div>
          </div>
        </section>

        <section id="experience" className="section-anchor relative py-10 md:py-12">
          <div className="container relative z-10">
            <SectionHeading title="Experience & Practice" subtitle="Professional background and independent engineering" />
            <div className="mx-auto mt-10 max-w-4xl"><Timeline /></div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-zinc-500">Experience and practice in infrastructure and platform engineering.</p>
          </div>
        </section>

        <section id="learning" className="section-anchor relative py-10 md:py-12">
          <div className="container relative z-10">
            <SectionHeading title="Certifications & Learning" subtitle="Learning through practical work" />
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
              <GlassmorphicCard>
                <h3 className="text-xl font-semibold">Certifications</h3>
                <p className="mt-3 text-zinc-300">Currently pursuing my certifications AZ-104 and AZ-400.</p>
            
              </GlassmorphicCard>
              <GlassmorphicCard>
                <h3 className="text-xl font-semibold">Currently Exploring</h3>
                <p className="mt-3 text-sm text-zinc-400">Current learning focus</p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-zinc-300">
                  <li>Azure platform services and infrastructure automation</li>
                  <li>Containerized application delivery and CI/CD</li>
                  <li>Infrastructure reliability and observability</li>
                </ul>
              </GlassmorphicCard>
            </div>
          </div>
        </section>

        <section id="contact" className="section-anchor relative py-10 md:py-12">
          <div className="container relative z-10">
            <SectionHeading title="Get In Touch" subtitle="Let's talk about infrastructure and platform work" />
            <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
              <GlassmorphicCard>
                <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
                <div className="space-y-6">
                  <ContactLine icon={<Mail />} label="Email" href="mailto:hello@christopherowens.tech" text="hello@christopherowens.tech" />
                  <ContactLine icon={<Linkedin />} label="LinkedIn" href="https://www.linkedin.com/in/christopher-owens-46bb3531/" text="linkedin.com/in/christopher-owens-46bb3531/" />
                  <ContactLine icon={<Github />} label="GitHub" href="https://github.com/Raddix1985" text="github.com/Raddix1985" />
                </div>
                <div className="mt-8 border-t border-zinc-700 pt-6"><h4 className="mb-3 text-lg font-medium">Career direction</h4><p className="text-zinc-300">Open to opportunities in cloud, platform, DevOps, infrastructure and systems engineering.</p></div>
              </GlassmorphicCard>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-10">
        <div className="container flex flex-col items-center justify-between gap-5 md:flex-row">
          <div><Link href="#main-content" className="text-xl font-bold"><span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Owens</span><span>.tech</span></Link><p className="mt-2 text-sm text-zinc-500">© {new Date().getFullYear()} Christopher Owens</p></div>
          <p className="text-sm text-zinc-500">Cloud Infrastructure &amp; Platform Engineering</p>
        </div>
      </footer>
    </div>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="rounded-full bg-zinc-800/70 p-3 text-zinc-300 transition-colors hover:bg-purple-500/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400">{children}</Link>
}

function Info({ label, value }: { label: string; value: ReactNode }) {
  return <div><dt className="text-sm text-zinc-500">{label}</dt><dd className="mt-1 font-medium text-zinc-100">{value}</dd></div>
}

function ContactLine({ icon, label, href, text }: { icon: ReactNode; label: string; href: string; text: string }) {
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex min-w-0 items-center gap-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-purple-300">{icon}</span><span className="min-w-0"><span className="block text-sm text-zinc-500">{label}</span><span className="block break-all font-medium text-zinc-100 group-hover:text-purple-200">{text}</span></span></a>
}




