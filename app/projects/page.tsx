"use client"; // Required for useState and useEffect

import React, { useState } from "react"; // Import useState
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"

// Import Lightbox component and styles
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
// Optional: Import plugins like Zoom
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/plugins/thumbnails.css"

// Define types for project data
type ProjectCategoryData = {
  title: string;
  description: string | JSX.Element; // Allow string or JSX Element
  images: string[];
  certImages?: string[]; // Optional certification images
};

type ProjectCategories = {
  [key: string]: ProjectCategoryData; // Index signature
};

// Project data with type assertion
const projectCategories: ProjectCategories = {
    "seismic-retrofit": {
      title: "Seismic Retrofit",
      description: (
        <div className="space-y-4">
          <p>
            We specialize in strengthening existing buildings to make them more resistant to seismic activity. As a certified contractor with the EarthquakeBraceBolt program, we ensure your property meets the highest safety standards.
          </p>
          <p className="flex items-center gap-2">
            <span>Certified by:</span>
            <a 
              href="http://www.EarthquakeBraceBolt.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-bright-orange hover:text-bright-orange/80 underline flex items-center gap-1"
            >
              EarthquakeBraceBolt.com
              <ExternalLink className="h-4 w-4" />
            </a>
          </p>
        </div>
      ),
      images: [
        "/projects/seismic-retrofit/1.jpg",
        "/projects/seismic-retrofit/2.jpg",
        "/projects/seismic-retrofit/3.jpg",
        "/projects/seismic-retrofit/4.jpg"
      ],
      certImages: [
        "/certification/earthquake-brace-bolt.png",
        "/certification/fema-trained.png"
      ]
    },
    "adu": {
      title: "ADU",
      description: "Custom Accessory Dwelling Unit solutions that maximize your property value and living space. From design to completion, we create functional and beautiful living spaces that meet all local regulations.",
      images: [
        "/projects/adu/1.jpg",
        "/projects/adu/2.jpg",
        "/projects/adu/3.jpg",
        "/projects/adu/4.jpg"
      ],
    },
    "kitchen": {
      title: "Kitchen",
      description: "Modern kitchen renovations that combine style with functionality. We create spaces that inspire culinary creativity while maximizing storage and workflow efficiency.",
      images: [
        "/projects/kitchen/1.jpg",
        "/projects/kitchen/2.jpg",
        "/projects/kitchen/3.jpg",
        "/projects/kitchen/4.jpg"
      ],
    },
    "bathroom": {
      title: "Bathroom",
      description: "Elegant bathroom transformations that blend luxury with practicality. Our designs focus on creating spa-like experiences while ensuring durability and comfort.",
      images: [
        "/projects/bathroom/1.jpg",
        "/projects/bathroom/2.jpg",
        "/projects/bathroom/3.jpg",
        "/projects/bathroom/4.jpg"
      ],
    },
};

export default function ProjectsPage() {
  // State for lightbox
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCategoryImages, setCurrentCategoryImages] = useState<{ src: string }[]>([])

  // Function to open the lightbox with explicit types
  const openLightbox = (categoryKey: string, index: number) => {
    // Ensure categoryKey exists before accessing
    if (projectCategories[categoryKey]) {
      const imagesForLightbox = projectCategories[categoryKey].images.map((src: string) => ({ src }))
      setCurrentCategoryImages(imagesForLightbox)
      setCurrentIndex(index)
      setOpen(true)
    } else {
      console.error("Invalid category key:", categoryKey)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=600&width=1920"
            alt="Projects showcase"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto flex min-h-[40vh] flex-col items-center justify-center px-4 py-20 text-center text-white md:px-6">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Projects</h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
            Browse our featured projects and experience the perfect combination of professional design and construction
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="seismic-retrofit" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
                <TabsTrigger value="seismic-retrofit">Seismic Retrofit</TabsTrigger>
                <TabsTrigger value="adu">ADU</TabsTrigger>
                <TabsTrigger value="kitchen">Kitchen</TabsTrigger>
                <TabsTrigger value="bathroom">Bathroom</TabsTrigger>
              </TabsList>
            </div>

            {/* Use Object.entries<[string, ProjectCategoryData]> for correct typing */}
            {Object.entries<[string, ProjectCategoryData]>(projectCategories).map(([category, data]) => (
              <TabsContent key={category} value={category}>
                <div className="mx-auto max-w-7xl">
                  <div className="mb-12">
                    {category === "seismic-retrofit" ? (
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                          {typeof data.description === 'string' ? <p className="text-lg text-gray-600">{data.description}</p> : data.description}
                        </div>
                        <div className="md:w-1/2 grid grid-cols-2 gap-4">
                          {data.certImages?.map((imgSrc: string, idx: number) => (
                            <div key={idx} className="relative aspect-video">
                              <Image
                                src={imgSrc}
                                alt={`Certification ${idx + 1}`}
                                fill
                                className="object-contain rounded-lg"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center">
                        {typeof data.description === 'string' ? <p className="text-lg text-gray-600">{data.description}</p> : data.description}
                      </div>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {data.images.map((image: string, index: number) => (
                      <div
                        key={index}
                        className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        onDoubleClick={() => openLightbox(category, index)}
                      >
                        <Image
                          src={image}
                          alt={`${data.title} - Image ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm font-medium">Double-click to view</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentCategoryImages}
        index={currentIndex}
        plugins={[Zoom]}
      />

      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Want to create your ideal space?</h2>
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

