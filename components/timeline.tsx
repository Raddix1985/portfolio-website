import { GlassmorphicCard } from "@/components/glassmorphic-card"

const experience = [
  {
    title: "IT Administrator / Support Consultant",
    detail: "IT administration and support",
    description: "Around 14 years of practical IT experience across infrastructure support, systems administration and hands-on troubleshooting.",
    label: "Professional experience",
  },
  {
    title: "IT Technician / Sales Associate",
    detail: "IT support and customer-facing sales",
    description: "Earlier work combined technical troubleshooting with customer service and sales support.",
    label: "Previous experience",
  },
  {
    title: "Independent Infrastructure Engineering",
    detail: "Ongoing · Independent projects",
    description: "Building and documenting cloud infrastructure, automation and systems projects as a separate body of practical engineering work.",
    label: "Independent project work",
  },
]

export function Timeline() {
  return <ol className="relative space-y-6 border-l border-zinc-700 pl-6 md:ml-6">
    {experience.map((item) => <li key={item.title} className="relative">
      <span aria-hidden="true" className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ring-4 ring-zinc-950" />
      <GlassmorphicCard>
        <p className="mb-2 text-xs font-medium uppercase tracking-wide text-purple-300">{item.label}</p>
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p className="mb-4 text-sm text-zinc-400">{item.detail}</p>
        <p className="text-zinc-300">{item.description}</p>
      </GlassmorphicCard>
    </li>)}
  </ol>
}
