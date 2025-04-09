import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, CheckCircle, Clock, Quote, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function Home() {
  const testimonials = [
    {
      title: "On-Time Delivery",
      description: "We prioritize timely project completion with strict adherence to schedules. Our project management system ensures clear timelines and regular progress updates, keeping every renovation on track.",
      author: "Project Management Team",
      role: "Buildverse Construction",
    },
    {
      title: "Quality Assurance",
      description: "Every project undergoes rigorous quality control measures. Our attention to detail ensures lasting durability, from material selection to final installation, with a proven track record of excellence.",
      author: "Quality Control Department",
      role: "Buildverse Construction",
    },
    {
      title: "Expert Team",
      description: "Our experienced design and construction teams bring innovative yet practical solutions to every project. We combine technical expertise with creative design to transform spaces according to client specifications.",
      author: "Design & Construction Team",
      role: "Buildverse Construction",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Modern construction project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center md:px-6">
          <h1 className="font-geist-sans mb-6 text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
            Crafting Spaces,
            <br />
            <span className="text-bright-orange">Shaping Dreams</span>
          </h1>
          <p className="mb-8 max-w-2xl text-xl text-gray-300 sm:text-2xl">
            From concept to creation, we bring your vision to life with precision and passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-14 px-8 bg-white text-bright-orange hover:bg-gray-100 transition-all duration-300 text-lg"
            >
              <Link href="/projects">
                Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 border-2 border-white bg-transparent px-8 text-white hover:bg-white hover:text-bright-orange transition-all duration-300 text-lg"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Why Choose Buildverse Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Why Choose Buildverse</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
              Our commitment to excellence in every aspect of construction
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-24">
            {/* Timeliness Feature */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-bright-orange/10 flex items-center justify-center group">
                <Clock className="h-12 w-12 md:h-16 md:w-16 text-bright-orange transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-bright-orange">On-Time Delivery</h3>
                <div className="relative">
                  <p className="text-muted-foreground text-lg">
                    We maintain strict adherence to project timelines through our sophisticated project management system. Every phase is carefully planned and monitored, ensuring timely completion while maintaining the highest quality standards. Regular progress updates keep you informed throughout the entire process.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Feature */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-bright-yellow/10 flex items-center justify-center group">
                <CheckCircle className="h-12 w-12 md:h-16 md:w-16 text-bright-yellow transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-bright-yellow">Quality Assurance</h3>
                <div className="relative">
                  <p className="text-muted-foreground text-lg">
                    Our comprehensive quality control system ensures excellence at every step. From material selection to final installation, we implement rigorous standards and detailed inspections. This systematic approach guarantees lasting durability and impeccable finishing in all our projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise Feature */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-bright-blue/10 flex items-center justify-center group">
                <Award className="h-12 w-12 md:h-16 md:w-16 text-bright-blue transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-bright-blue">Expert Team</h3>
                <div className="relative">
                  <p className="text-muted-foreground text-lg">
                    Our team combines years of industry experience with innovative design thinking. Each project benefits from our collaborative approach, where skilled craftsmen work alongside creative designers to deliver solutions that are both beautiful and functional. We pride ourselves on transforming challenging spaces into exceptional environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover how we've transformed spaces and realized our clients' dreams.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Seismic Retrofit",
                category: "Seismic Retrofit",
                image: "/projects/seismic-retrofit/1.jpg",
                href: "/projects?category=seismic-retrofit"
              },
              {
                title: "ADU",
                category: "ADU",
                image: "/projects/adu/1.jpg",
                href: "/projects?category=adu"
              },
              {
                title: "Kitchen",
                category: "Kitchen",
                image: "/projects/kitchen/1.jpg",
                href: "/projects?category=kitchen"
              },
              {
                title: "Bathroom",
                category: "Bathroom",
                image: "/projects/bathroom/1.jpg",
                href: "/projects?category=bathroom"
              }
            ].map((project, index) => (
              <Link
                key={index}
                href={project.href}
                className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center">
                      <span className="mr-2">View Projects</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-bright-orange text-white hover:bg-bright-orange/90 transition-all duration-300"
            >
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bright-orange text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Ready to Transform Your Space?
            </h2>
            <p className="mb-10 text-xl opacity-90">
              Let's bring your vision to life. Contact us today for a free consultation and take the first step towards
              your dream space.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-bright-orange hover:bg-gray-100 transition-all duration-300 h-14 px-8 text-lg"
            >
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

