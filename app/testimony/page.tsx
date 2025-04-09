import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Star, ThumbsUp, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"

export default function TestimonyPage() {
  // Testimonial data
  const testimonials = {
    yelp: [
      {
        id: 1,
        name: "John Smith",
        rating: 5,
        text: "I'm extremely satisfied with their service. From design to construction, everything was professional, and the final result exceeded my expectations! Communication was smooth throughout, and the team was very responsible.",
        project: "Kitchen Remodel",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Sarah Johnson",
        rating: 5,
        text: "The team was very responsible. They promptly resolved any issues that arose during construction, and I'm very satisfied with the final result. Special thanks to the designer for providing creative solutions that made my space more functional and beautiful.",
        project: "Full House Renovation",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "Michael Brown",
        rating: 4,
        text: "The service was attentive, and the designer understood my needs and provided many creative solutions. The construction team was professional and efficient, though some minor details could have been better.",
        project: "Bathroom Renovation",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Emily Davis",
        rating: 5,
        text: "The entire process from consultation to completion was very smooth. The design plan met my needs perfectly, and the construction quality was excellent. I'm very satisfied with the final result and would recommend them to my friends!",
        project: "Living Room Remodel",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    google: [
      {
        id: 1,
        name: "David Chen",
        rating: 5,
        text: "Professional team, quality service. They not only completed the project on time but also exceeded my expectations in terms of quality. Their attention to detail makes the entire space look very sophisticated.",
        project: "Bedroom Renovation",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Jennifer Lin",
        rating: 5,
        text: "Very professional team, meticulous from design to construction. They understood my requirements and provided many practical suggestions. I'm very satisfied with the final result and highly recommend them!",
        project: "Kitchen Remodel",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 3,
        name: "Robert Wong",
        rating: 4,
        text: "Overall service was good. The designer was creative, and the construction team was professional. The project took slightly longer than expected, but the final result was satisfactory.",
        project: "Study Room Design",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Amanda Wu",
        rating: 5,
        text: "Very satisfied with this collaboration! The designer accurately understood my needs and provided many practical suggestions. The construction team was also professional, working meticulously, and the final result exceeded expectations.",
        project: "Full House Renovation",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  }

  // 评论截图数据
  const reviews = {
    yelp: [
      {
        id: 1,
        image: "/reviews/yelp-1.png", // 替换为实际的 Yelp 评论截图
        rating: 5,
      },
      {
        id: 2,
        image: "/reviews/yelp-2.png",
        rating: 5,
      },
      {
        id: 3,
        image: "/reviews/yelp-3.png",
        rating: 4,
      },
      {
        id: 4,
        image: "/reviews/yelp-4.png",
        rating: 5,
      }
    ],
    google: [
      {
        id: 1,
        image: "/reviews/google-1.png", // 替换为实际的 Google 评论截图
        rating: 5,
      },
      {
        id: 2,
        image: "/reviews/google-2.png",
        rating: 5,
      },
      {
        id: 3,
        image: "/reviews/google-3.png",
        rating: 4,
      },
      {
        id: 4,
        image: "/reviews/google-4.png",
        rating: 5,
      }
    ]
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Customer testimonials"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto flex min-h-[40vh] flex-col items-center justify-center px-4 py-20 text-center text-white md:px-6">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Client Testimonials</h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
            Hear what our clients have to say - their satisfaction is our greatest motivation
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="yelp" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList>
                <TabsTrigger value="yelp" className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  Yelp Reviews
                </TabsTrigger>
                <TabsTrigger value="google" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Google Reviews
                </TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(reviews).map(([platform, platformReviews]) => (
              <TabsContent key={platform} value={platform}>
                <div className="grid gap-6 md:grid-cols-2">
                  {platformReviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="relative aspect-[16/9] w-full">
                        <Image
                          src={review.image}
                          alt={`${platform} Review`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="p-4 border-t">
                        <div className="flex items-center justify-between">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  platform === 'yelp' 
                                    ? 'fill-[#FF1A1A] text-[#FF1A1A]' 
                                    : 'fill-yellow-400 text-yellow-400'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button asChild variant="outline">
                    <Link
                      href={platform === "yelp" 
                        ? "https://www.yelp.com/biz/buildverse-san-jose#reviews" 
                        : "https://www.google.com/maps/place/your-google-review-link"
                      }
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      View All {platform === "yelp" ? "Yelp" : "Google"} Reviews 
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight">Our Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our recent work across different categories
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Seismic Retrofit",
                image: "/projects/seismic-retrofit/1.jpg",
                href: "/projects?category=seismic-retrofit"
              },
              {
                title: "ADU",
                image: "/projects/adu/1.jpg",
                href: "/projects?category=adu"
              },
              {
                title: "Kitchen",
                image: "/projects/kitchen/1.jpg",
                href: "/projects?category=kitchen"
              },
              {
                title: "Bathroom",
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Ready to Start Your Project?</h2>
            <p className="mb-8 text-lg">
              Contact us for a free consultation and quote. Let's turn your ideas into reality together
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

