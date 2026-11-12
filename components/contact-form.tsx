"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [feedback, setFeedback] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const subject = String(data.get("subject") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()
    if (!name || !email || !subject || !message) {
      setFeedback("Please complete each field before continuing.")
      return
    }

    const body = `From: ${name}\nReply email: ${email}\n\n${message}`
    window.location.href = `mailto:hello@christopherowens.tech?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFeedback("Your email app should open with the message ready to send. If it does not, email hello@christopherowens.tech directly.")
  }

  return <div className="relative rounded-xl border border-zinc-700/70 bg-zinc-800/50 p-6 backdrop-blur-sm transition-colors hover:border-purple-500/50">
    <h3 className="mb-6 text-2xl font-bold">Send Me a Message</h3>
    <form onSubmit={handleSubmit} className="space-y-5">
      <div><label htmlFor="contact-name" className="sr-only">Your name</label><Input id="contact-name" name="name" autoComplete="name" placeholder="Your Name" required maxLength={100} className="border-zinc-700 bg-zinc-900/50 focus-visible:ring-purple-500" /></div>
      <div><label htmlFor="contact-email" className="sr-only">Your email</label><Input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Your Email" required maxLength={254} className="border-zinc-700 bg-zinc-900/50 focus-visible:ring-purple-500" /></div>
      <div><label htmlFor="contact-subject" className="sr-only">Subject</label><Input id="contact-subject" name="subject" placeholder="Subject" required maxLength={150} className="border-zinc-700 bg-zinc-900/50 focus-visible:ring-purple-500" /></div>
      <div><label htmlFor="contact-message" className="sr-only">Your message</label><Textarea id="contact-message" name="message" placeholder="Your Message" rows={5} required maxLength={5000} className="border-zinc-700 bg-zinc-900/50 focus-visible:ring-purple-500" /></div>
      <Button type="submit" className="w-full border-0 bg-gradient-to-r from-purple-500 to-pink-500">Prepare Email <Send className="ml-2 h-4 w-4" /></Button>
      <p aria-live="polite" role="status" className="min-h-5 text-sm text-zinc-300">{feedback}</p>
    </form>
  </div>
}
