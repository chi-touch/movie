"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export default function TopVideo() {
  const topVideo = [
    { id: 1, title: 'The Crown', image: '/myPic.jpg' }
  ]

  return (
    // <div className="relative w-full rounded-3xl group">
    // <div className="relative rounded-[20px] group overflow-hidden">
    <div className="flex rounded-[20px] overflow-hidden relative gap-4 pb-1">
      {topVideo.map((item) => (
        // <div key={item.id} className="w-14 h-12 bg-gray-700 rounded-2xl relative shrink-0 overflow-hidden">
        <div key={item.id} className=" w-full">

          {/* <div className="w-full h-90 bg-gray-700 rounded-2xl relative shrink-0 overflow-hidden"> */}
          

          <div className="w-full rounded-2xl overflow-hidden shrink-0">
            <div className="relative w-full h-[750px] ">
            <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
          </div>
          </div>


          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors text-white">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors text-white">
              <ChevronRight size={20} />
            </button>
          </div>


          <div className="absolute inset-0 p-12 flex flex-col justify-between">
            <h1 className="text-6xl font-black text-white max-w-md tracking-tight">{item.title}</h1>


            <div className="flex justify-center gap-15">
              <button className="flex items-center px-8 py-3.5 bg-white/10 backdrop-blur-md rounded-2xl text-white font-bold text-sm hover:bg-white/20 transition-all border border-white/10">
                <Plus size={18} />
                Watchlist
              </button>
              <div className="flex gap-2.5 pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/50" />
              </div>
              <button className="flex items-center gap-2 px-10 py-3.5 bg-teal-400 rounded-2xl text-black font-bold text-sm hover:bg-teal-500 transition-all shadow-lg shadow-teal-400/20">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}