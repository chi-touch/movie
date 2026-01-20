import { Bell, ChevronRight, ChevronLeft, ChevronDown, Plus } from 'lucide-react'
import Image from 'next/image'

export default function RightBar() {
    const continueWatching = [
        { id: 1, title: 'WandaVision', episode: '1 Episode left', progress: 70, image: '/myPic.jpg' },
        { id: 2, title: 'Rick and Morty', episode: '2 Episode left', progress: 40, image: '/myPic.jpg' },
    ]

    const topRated = [
        { id: 1, title: 'Supernatural', episodes: '320 Ep', genre: 'Horror, Fantasy', image: '/myPic.jpg' },
        { id: 2, title: 'Rick and Morty', episodes: '49 Ep', genre: 'Sci-Fi', image: '/myPic.jpg' },
    ]

    const genres = [
        { id: 1, title: 'Drama', image: '/myPic.jpg' },
        { id: 2, title: 'Sitcom', image: '/myPic.jpg' },
        { id: 3, title: 'Suspense', image: '/myPic.jpg' },
    ]

    return (
        <div className="w-[300px] bg-sidebar h-full flex flex-col p-5 border-l border-white/5 bg-[#21242D] overflow-hidden no-scrollbar">
            <div className="flex items-center justify-between mb-8">
                <button className="p-3 rounded-2xl bg-[#2b2d38] text-gray-400 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border border-[#2b2d38]" />
                </button>
                <div className="flex items-center gap-3">
                    <div className='flex items-center gap-1 cursor-pointer text-white'>
                        <span className="text-sm font-medium">Samantha</span>
                        <ChevronDown size={16} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-yellow-500 overflow-hidden relative border-2 border-[#2b2d38]">
                        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative">
                            <Image src="/myPic.jpg" alt="pic" width={100} height={100} className="bg-gray-700" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-white">Continue</h3>
                        <div className='flex items-center gap-1 text-gray-400'>
                            <ChevronLeft size={16} className="cursor-pointer hover:text-white" />
                            <ChevronRight size={16} className="cursor-pointer hover:text-white" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-bold cursor-pointer hover:text-white ">
                        See More <ChevronRight size={14} />
                    </div>
                </div>

                <div className="flex overflow-hidden relative gap-4 pb-1">
                    {continueWatching.map((item) => (
                        <div key={item.id} className="w-[150px] h-[100px] bg-[#2b2d38]  border-[1px solid #F9F9F91A] mb-8 rounded-3xl p-3 group hover:bg-[#343744] transition-colors shrink-0 flex flex-col justify-between">
                            <div className="flex gap-3">
                                <div className="w-14 h-12 bg-gray-700 rounded-2xl relative shrink-0 overflow-hidden">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                                <div className='flex-1 min-w-0 flex flex-col justify-center gap-1'>
                                    <h4 className="font-bold text-xs truncate text-white">{item.title}</h4>
                                    <p className="text-[9px] text-gray-400">{item.episode}</p>
                                    <div className="h-1 bg-gray-700 rounded-full w-full mt-0.5">
                                        <div className="h-full bg-teal-400 rounded-full" style={{ width: `${item.progress}%` }} />
                                    </div>
                                </div>
                            </div>

                            <div className='flex gap-2  '>
                                <button className="flex-1 h-[40px] w-[55px] bg-[#373a48] rounded-xl text-gray-300 text-[10px] py-1  font-bold hover:bg-gray-600 transition-colors">Drop</button>
                                <button className="flex-1 h-[40px] w-[55px] bg-teal-400 text-black text-[10px] py-1 rounded-xl font-bold hover:bg-teal-500 transition-colors">Watch</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-6 mt-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-white">Top Rated</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold cursor-pointer hover:text-white">
                        See More <ChevronRight size={14} />
                    </div>
                </div>

                <div className="flex overflow-hidden relative gap-4 pb-1">
                    {topRated.map((item) => (
                        <div key={item.id} className="w-[150px] h-[100px] bg-[#2b2d38] rounded-3xl overflow-hidden relative shrink-0 group">
                            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2">
                                <div>
                                    <h4 className="font-bold text-xs text-white mb-0.5">{item.title}</h4>
                                    <p className="text-[9px] text-gray-300">{item.episodes}</p>
                                </div>

                                <div className="flex gap-2">
                                    <button className="w-7 h-7 flex items-center justify-center bg-white/20 rounded-xl backdrop-blur-md hover:bg-white/30 transition-colors">
                                        <Plus size={14} className="text-white" />
                                    </button>
                                    <button className="flex-1 bg-teal-400 text-black text-[10px] py-1.5 rounded-xl font-bold hover:bg-teal-500 transition-colors">
                                        Watch
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-white">Genres</h3>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-bold cursor-pointer hover:text-white">
                        See More <ChevronRight size={14} />
                    </div>
                </div>


                <div className='flex flex-col gap-4'>
                    <div className="flex overflow-hidden relative gap-4 pb-1">
                        {genres.map((item) => (
                            <div key={item.id} className="w-[150px] h-[100px] bg-[#2b2d38] rounded-3xl overflow-hidden relative shrink-0 group">
                                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute bottom-8 right-13 p-3 flex flex-col gap-2">
                                    <div>
                                        <h4 className="font-bold text-xs text-white">{item.title}</h4>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex overflow-hidden relative gap-4 pb-1">
                        {genres.map((item) => (
                            <div key={item.id} className="w-[150px] h-[100px] bg-[#2b2d38] rounded-3xl overflow-hidden relative shrink-0 group">
                                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute bottom-8 right-13 p-3 flex flex-col gap-2">
                                    <div>
                                        <h4 className="font-bold text-xs text-white">{item.title}</h4>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}