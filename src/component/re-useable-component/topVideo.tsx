"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export default function TopVideo() {
    const topVideo = [
        { id: 1, title: 'The Crown', image: '/myPic.jpg' }
    ]

    return (
        <div className="relative rounded-3xl group">
            {topVideo.map((item) => (
                <div key={item.id} className="relative w-full h-full">
                    <div className="w-full h-full bg-gray-700 rounded-3xl relative shrink-0 overflow-hidden">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

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

                    <div className="absolute inset-0 p-10 flex flex-col justify-between pointer-events-none">
                        <h1 className="text-5xl font-bold text-white max-w-md pointer-events-auto">{item.title}</h1>

                        <div className="flex items-end justify-between pointer-events-auto">
                            <div className="flex gap-5">
                                <button className="flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white font-bold text-sm hover:bg-white/20 transition-colors">
                                    <Plus size={18} />
                                    Watchlist
                                </button>
                                <button className="flex items-center gap-2 px-8 py-3 bg-teal-400 rounded-xl text-black font-bold text-sm hover:bg-teal-500 transition-colors">
                                    Watch Now
                                </button>
                            </div>

                            <div className="flex gap-2 pb-2">
                                <div className="w-2 h-2 rounded-full bg-teal-400" />
                                <div className="w-2 h-2 rounded-full bg-white" />
                                <div className="w-2 h-2 rounded-full bg-white/50" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}