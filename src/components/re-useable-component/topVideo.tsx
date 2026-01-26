"use client"
import * as React from "react"
import Image from "next/image"
import { Plus, Play } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"

export default function TopVideo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const slides = [
    {
      id: 1,
      title: 'The Crown',
      image: '/myPic.jpg',
    },
    {
      id: 2,
      title: 'Stranger Things',
      image: '/st.jpg',
    },
    {
      id: 3,
      title: 'The Mandalorian',
      image: '/m.jpg',
    },
  ]

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative group">
      
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className=""
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative h-[350px] w-170 ">
              
                <Image 
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="rounded-3xl ml-3"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <h1 className="text-5xl font-black text-white max-w-md tracking-tight">
                    {slide.title}
                  </h1>

                  <div className="flex flex-col gap-5 justify-center items-center sm:flex-row sm:gap-30">
                    <Button size="lg" className="px-7 py-2 bg-[#415851] backdrop-blur-10px rounded-2xl text-white font-bold text-sm hover:bg-[#415851] transition-all gap-2">
                      <Plus size={15} />Watchlist</Button>
                    <div className="flex gap-2.5 bg-[#746a67] h-6 w-20 px-4 rounded-1.5xl justify-center mt-2 ">
                      {Array.from({ length: count }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => api?.scrollTo(index)}
                          className={`w-2 h-2.5 mt-1.5 rounded-3xl transition-all duration-300 ${current === index
                            ? "bg-[#00B9AE] w-2"
                            : "bg-white/50 hover:bg-white"
                            }`}
                        />
                      ))}
                    </div>  

                    <Button size="lg" variant="secondary" className="px-7 py-2 bg-[#00B9AE] backdrop-blur-10px rounded-2xl text-white font-bold text-sm hover:bg-[#00B9AE]transition-all gap-2">Watch Now</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-4 bg-[#3d4446] backdrop-blur-md  text-white hover:bg-white/20 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <CarouselNext
          className="right-4 bg-[#3d4446] backdrop-blur-md border-0 text-white hover:bg-white/20 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </Carousel>
    </div>
  )
}
