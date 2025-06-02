"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Navbar from "@/components/navbar"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Form submitted successfully",
        description: "We'll contact you shortly",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Contact us"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto flex min-h-[40vh] flex-col items-center justify-center px-4 py-20 text-center text-white md:px-6">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
            We're ready to help with any questions or needs you may have
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Contact Information</h2>
            <div className="mb-8 space-y-4">
              {/*
              <div className="flex items-center justify-center">
                <MapPin className="mr-4 h-6 w-6 text-bright-orange" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-muted-foreground">
                    2311 Sunny Vista Dr.
                    <br />
                    San Jose, CA 95128
                    <br />
                    United States
                  </p>
                </div>
              </div>
              */}
              <div className="flex items-center justify-center">
                <Phone className="mr-4 h-6 w-6 text-bright-orange" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-muted-foreground">(408) 728-8866</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="mr-4 h-6 w-6 text-bright-orange" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-muted-foreground">buildverse.ca@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="mr-4 h-6 w-6 text-bright-orange" />
                <div>
                  <h3 className="font-bold">Service Area</h3>
                  <p className="text-muted-foreground">San Francisco Bay Area</p>
                </div>
              </div>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight">Business Hours</h2>
            <div className="space-y-2 max-w-xs mx-auto">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday</span>
                <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span className="text-muted-foreground">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Here are some common questions our clients ask, which might help you
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                question: "What services do you provide?",
                answer:
                  "We offer comprehensive building and renovation services, including interior design, kitchen and bathroom remodels, full house renovations, and new construction projects. Whether it's a small renovation or a large project, we can provide professional solutions.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project duration depends on the scale and complexity of the work. Small renovations may take 2–4 weeks, while larger renovations might require 2–3 months. For new constructions, the timeline typically extends to 6 months or more. Before starting the project, we’ll provide a detailed schedule and strive to complete it on time.",
              },
              {
                question: "Do you offer free consultations and quotes?",
                answer:
                  "Yes, we provide free initial consultations and quotes. You can contact us via phone or email, and we'll arrange for a professional to communicate with you, understand your needs, and provide appropriate solutions and quotes.",
              },
              {
                question: "What materials do you use?",
                answer:
                  "We use high-quality building and renovation materials and collaborate with several reputable suppliers. We'll recommend the most suitable materials based on your budget and needs, ensuring the quality and durability of your project.",
              },
              {
                question: "Do you provide warranties?",
                answer:
                  "Yes, we offer warranties for all our work. Generally, the construction quality warranty period is 1 year, with longer warranty periods for certain special projects. Detailed warranty terms will be clearly stated in the contract.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
