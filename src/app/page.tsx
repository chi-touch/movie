"use client"
import { Search, Filter, ChevronLeft, ChevronRight, Plus, Star, Play } from "lucide-react"
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
  ]

  return (
    <div className="h-full w-full overflow flex flex-col gap-8 pb-3">

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8 text-gray-400 font-bold text-sm">
          <button className="hover:text-white transition-colors">Movies</button>
          <button className="text-teal-400 pb-1 border-b-2 border-teal-400">TV Shows</button>
          <button className="hover:text-white transition-colors">Anime</button>
        </div>

        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#21242D] text-white pl-10 pr-10 py-3 rounded-xl outline-none focus:ring-1 focus:ring-teal-400/50 text-sm font-medium placeholder-gray-500"
          />
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-white" size={18} />
        </div>
      </div>


      <div className="relative w-full h-[700px] rounded-3xl overflow-hidden group">
        {topVideo.map((item) => (
          <div key={item.id} className="relative w-full h-full">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <ChevronLeft size={20} />
              </button>
              <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors text-white">
                <ChevronRight size={20} />
              </button>
            </div>


            <div className="absolute inset-0 p-10 flex flex-col justify-between">
              <h1 className="text-5xl font-bold text-white max-w-md">{item.title}</h1>

              <div className="flex items-end justify-between">
                <div className="flex gap-5">
                  <button className="flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white font-bold text-sm hover:bg-white/20 transition-colors">
                    <Plus size={18} />
                    Watchlist
                  </button>
                  <div className="flex gap-2 pb-2 ml-10">
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <div className="w-2 h-2 rounded-full bg-white/50" />
                  </div>

                  <button className="flex items-center ml-10 mr-40 gap-2 px-8 py-3 bg-teal-400 rounded-xl text-black font-bold text-sm hover:bg-teal-500 transition-colors">
                    Watch Now
                  </button>
                </div>

                {/* <div className="flex gap-2 pb-2">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white/50" />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>


      <div>
        <h2 className="text-xl font-bold text-white mb-6">Popular on TinyMoviez</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularMovies.map((movie) => (
            <div key={movie.id} className="h-[250px] rounded-3xl overflow-hidden relative group cursor-pointer bg-[#21242D]">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">{movie.title}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-teal-400 text-teal-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col text-xs text-gray-400">
                    <span>{movie.episodes}</span>
                    <span>{movie.genre}</span>
                  </div>

                  <div className="flex gap-2">
                    <button className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-md hover:bg-white/20 transition-colors">
                      <Plus size={20} className="text-white" />
                    </button>
                    <button className="px-6 h-10 bg-teal-400 text-black text-xs rounded-xl font-bold hover:bg-teal-500 transition-colors">
                      Watch
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
