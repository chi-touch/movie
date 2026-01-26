"use client"
import TopVideo from "@/components/re-useable-component/topVideo"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ChevronLeft, ChevronRight, Plus, Star, Play } from "lucide-react"
import PopularMovies from "@/components/re-useable-component/popularMovies"
import Image from "next/image"

export default function Home() {

  const topVideo = [
    { id: 1, title: 'The Crown', image: '/myPic.jpg', }

  ]
  const popularMovies = [
    {
      id: 1,
      title: "Loki",
      episodes: "6 Ep",
      genre: "Superhero",
      image: "/myPic.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Chernobyl",
      episodes: "5 Ep",
      genre: "Mini Series",
      image: "/myPic.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "Rick and Morty",
      episodes: "49 Ep",
      genre: "Fantasy",
      image: "/myPic.jpg",
      rating: 5,
    },
    {
      id: 4,
      title: "Loki",
      episodes: "6 Ep",
      genre: "Superhero",
      image: "/myPic.jpg",
      rating: 5,
    },
    {
      id: 5,
      title: "Chernobyl",
      episodes: "5 Ep",
      genre: "Mini Series",
      image: "/myPic.jpg",
      rating: 5,
    },
    {
      id: 6,
      title: "Rick and Morty",
      episodes: "49 Ep",
      genre: "Fantasy",
      image: "/myPic.jpg",
      rating: 5,
    },
  ]

  return (
    // <div className="h-full flex flex-col gap-8">


    <div className="flex-1 flex flex-col gap-8 min-h-0">


      <Tabs defaultValue="movies">
        <TabsList

          // className="text-white bg-black"
          className="sticky top-0 z-10 bg-black pt-4 pb-2 w-full py-10 rounded-none">


          <TabsTrigger value="movies">Movie</TabsTrigger>
          <TabsTrigger value="tv show">TV Shows</TabsTrigger>
          <TabsTrigger value="anime">Anime</TabsTrigger>

          <div className="relative w-80 left-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search"
              className="w-60 bg-[#21242D] text-white pl-10 pr-10 py-3 rounded-xl outline-none focus:ring-1 focus:ring-teal-400/50 text-sm font-medium placeholder-gray-500"
            />
            <Filter className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-white" size={18} />
          </div>
        </TabsList>
        <div>
          <TabsContent value="movies">
            <TopVideo />
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Popular on TinyMoviez</h2>
              <PopularMovies />
              {/* <PopularMovies /> */}
             

            </div>
          </TabsContent>
          <TabsContent value="tv show">
            <TopVideo />
          </TabsContent>
        </div>
      </Tabs>

    </div>

    // </div>
  )
}
