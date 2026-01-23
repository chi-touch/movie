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
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <div className="relative w-full h-[500px] rounded-[20px] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute inset-0 p-12 flex flex-col justify-between">
                  <h1 className="text-6xl font-black text-white max-w-md tracking-tight">
                    {slide.title}
                  </h1>

                  <div className="flex items-center justify-between gap-20 ">
                    <button className="flex items-center px-8 py-3.5 bg-white/10 backdrop-blur-md rounded-2xl text-white font-bold text-sm hover:bg-white/20 transition-all border border-white/10 gap-2">
                      <Plus size={18} />
                      Watchlist
                    </button>

                    <div className="flex gap-2.5 pb-2">
                      {Array.from({ length: count }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => api?.scrollTo(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index
                              ? "bg-teal-400 w-6"
                              : "bg-white/50 hover:bg-white"
                            }`}
                        />
                      ))}
                    </div>

                    <button className="flex items-center gap-2 px-10 py-3.5 bg-teal-400 rounded-2xl text-black font-bold text-sm hover:bg-teal-500 transition-all shadow-lg shadow-teal-400/20">
                      <Play size={18} />
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-4 bg-white/10 backdrop-blur-md border-0 text-white hover:bg-white/20 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <CarouselNext
          className="right-4 bg-white/10 backdrop-blur-md border-0 text-white hover:bg-white/20 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </Carousel>
    </div>
  )
}
