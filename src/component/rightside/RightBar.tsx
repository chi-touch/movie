// import { Bell, ChevronRight, ChevronLeft, ChevronDown, Plus } from 'lucide-react'
// import Image from 'next/image'

// export default function RightBar() {
//     const continueWatching = [
//         { id: 1, title: 'WandaVision', episode: '1 Episode left', progress: 70, image: '/wandavision.jpg' },
//         { id: 2, title: 'Rick and Morty', episode: '2 Episode left', progress: 40, image: '/rickandmorty.jpg' },
//     ]

//     const topRated = [
//         { id: 1, title: 'Supernatural', episodes: '320 Episodes', genre: 'Horror, Fantasy', image: '/supernatural.jpg' },
//     ]

//     const genres = [
//         { id: 1, title: 'Drama', image: '/drama.jpg' },
//         { id: 2, title: 'Sitcom', image: '/sitcom.jpg' },
//     ]

//     return (
//         <div className="w-[300px] bg-sidebar h-full flex flex-col p-6 border-l border-white/5 overflow-y-auto no-scrollbar bg-[#21242D]">
//             {/* Header with notification and profile */}
//             <div className="flex items-center justify-between mb-8">
//                 <button className="p-3 rounded-2xl bg-[#2b2d38] text-gray-400 hover:text-white transition-colors relative">
//                     <Bell size={20} />
//                     <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border border-[#2b2d38]" />
//                 </button>
//                 <div className="flex items-center gap-3">
//                     <div className='flex items-center gap-1 cursor-pointer hover:text-gray-300'>
//                         <span className="text-sm font-medium">Samantha</span>
//                         <ChevronDown size={16} />
//                     </div>
//                     <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-[#2b2d38]">
//                         <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative">
//                             <Image 
//                                 src="/myPic.jpg" 
//                                 alt="profile picture" 
//                                 width={40} 
//                                 height={40} 
//                                 className="object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>


//             <div className='mb-8'>
//                 <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2">
//                         <h3 className="font-bold text-lg text-white">Continue</h3>
//                         <div className='flex items-center gap-1 text-gray-400'>
//                             <ChevronLeft size={16} className="cursor-pointer hover:text-white" />
//                             <ChevronRight size={16} className="cursor-pointer hover:text-white" />
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-1 text-gray-400 text-xs font-bold cursor-pointer hover:text-white">
//                         See More <ChevronRight size={14} />
//                     </div>
//                 </div>

//                 <div className="space-y-4">
//                     {continueWatching.map((item) => (
//                         <div key={item.id} className="bg-[#2b2d38] rounded-2xl p-4 relative group transition-colors">
//                             <div className="flex gap-4 mb-4">
//                                 <div className="w-16 h-16 bg-gray-700 rounded-xl overflow-hidden relative shrink-0">
//                                     <div className='absolute inset-0 bg-gray-600' />
//                                 </div>
//                                 <div className='flex-1'>
//                                     <h4 className="font-bold text-sm mb-1 text-white">{item.title}</h4>
//                                     <p className="text-xs text-gray-400 mb-3">{item.episode}</p>
//                                     <div className="h-1.5 bg-gray-700 rounded-full w-full overflow-hidden">
//                                         <div 
//                                             className="h-full bg-teal-400 rounded-full" 
//                                             style={{ width: `${item.progress}%` }} 
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='flex gap-2 w-full'>
//                                 <button className="flex-1 bg-[#21242D] text-gray-300 text-xs py-3 rounded-xl font-medium hover:bg-gray-700 transition-colors">
//                                     Drop
//                                 </button>
//                                 <button className="flex-1 bg-teal-500 text-black text-xs py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors">
//                                     Watch
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="mb-8">
//                 <div className="flex items-center justify-between mb-4">
//                     <h3 className="font-bold text-lg text-white">Top Rated</h3>
//                     <div className="flex items-center gap-1 text-gray-400 text-xs font-bold cursor-pointer hover:text-white">
//                         See More <ChevronRight size={14} />
//                     </div>
//                 </div>

//                 <div className="bg-[#2b2d38] rounded-xl overflow-hidden relative group">
//                     <div className="h-40 bg-gradient-to-t from-black/80 to-transparent relative">
//                 </div>

//             <div className="absolute inset-0 bg-gray-600" />
//                         <div className="absolute bottom-0 left-0 right-0 p-4">
//                             <h4 className="font-bold text-sm text-white mb-1">Supernatural</h4>
//                             <p className="text-xs text-gray-400 mb-3">320 Episodes</p>
//                             <div className="flex gap-2">
//                                 <button className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors">
//                                     <Plus size={14} className="text-white" />
//                                 </button>
//                                 <button className="flex-1 bg-teal-500 text-black text-xs py-2 rounded-lg font-bold hover:bg-teal-400 transition-colors">
//                                     Watch
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div>
//                 <div className="flex items-center justify-between mb-4">
//                     <h3 className="font-bold text-lg text-white">Genres</h3>
//                     <div className="flex items-center gap-1 text-gray-400 text-xs font-bold cursor-pointer hover:text-white">
//                         See More <ChevronRight size={14} />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-3">
//                     {genres.map((genre) => (
//                         <div 
//                             key={genre.id} 
//                             className="h-16 rounded-xl flex items-center justify-center font-bold text-sm relative overflow-hidden group cursor-pointer"
//                         >
//                             <div className={`absolute inset-0 ${
//                                 genre.title === 'Drama' ? 'bg-blue-900/30' : 'bg-red-900/30'
//                             } group-hover:opacity-80 transition-opacity`} />

//                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

//                             <span className="relative z-10 text-white">{genre.title}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }







import { Bell, ChevronRight, ChevronLeft, ChevronDown, Plus } from 'lucide-react'
import Image from 'next/image'

export default function RightBar() {
    const continueWatching = [
        { id: 1, title: 'WandaVision', episode: '1 Episode left', progress: 70, image: '/wandavision.jpg' },
        { id: 2, title: 'Rick and Morty', episode: '2 Episode left', progress: 40, image: '/rickandmorty.jpg' },
    ]

    const topRated = [
        { id: 1, title: 'Supernatural', episodes: '320 Ep', genre: 'Horror, Fantasy', image: '/supernatural.jpg' },
        { id: 2, title: 'Rick and Morty', episodes: '49 Ep', genre: 'Sci-Fi', image: '/rickandmorty.jpg' },
    ]

    const genres = [
        { id: 1, title: 'Drama', image: '/drama.jpg' },
        { id: 2, title: 'Sitcom', image: '/sitcom.jpg' },
        { id: 3, title: 'Suspense', image: '/suspense.jpg' },
    ]

    return (
        <div className="w-[300px] bg-sidebar h-full flex flex-col p-6 border-l border-white/5 overflow-y-auto no-scrollbar bg-[#21242D]">
            <div className="flex items-center justify-between mb-8">
                <button className="p-3 rounded-2xl bg-[#2b2d38] text-gray-400 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border border-[#2b2d38]" />
                </button>
                <div className="flex items-center gap-3">
                    <div className='flex items-center gap-1 cursor-pointer hover:text-gray-300'>
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

            <div className='mb-4'>
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

            </div>


            <div className="flex overflow-hidden relativegap-4 pb-4 mb-4">
                {continueWatching.map((item) => (
                    <div key={item.id} className=" bg-[#2b2d38] rounded-2xl p-3 relative group hover:bg-[#343744] transition-colors shrink-0">
                        <div className="flex gap-3 mb-3 w-[150px] h-[150px]">
                            <div className="w-16 h-16 bg-gray-700 rounded-xl relative">
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h4 className="font-bold text-sm mb-1 truncate text-white">{item.title}</h4>
                                <p className="text-xs text-gray-400 mb-2">{item.episode}</p>

                                <div className="h-1 bg-gray-700 rounded-full w-full">
                                    <div className="h-full bg-teal-400 rounded-full" style={{ width: `${item.progress}%` }} />

                                </div>
                            </div>
                        </div>

                        <div className='mt-3 flex gap-2 w-full'>
                            <button className="flex-1 bg-[#373a48] text-gray-300 text-xs py-2 rounded-xl font-medium hover:bg-gray-600 transition-colors">Drop</button>
                            <button className="flex-1 bg-teal-400 text-black text-xs py-2 rounded-xl font-bold hover:bg-teal-500 transition-colors">Watch</button>
                        </div>
                    </div>
                ))}

            </div>

            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Top Rated</h3>
                    <div className="flex items-center gap-2 text-text-muted text-xs font-bold cursor-pointer hover:text-white">
                        See More <ChevronRight size={14} />
                    </div>

                    <div className="bg-card rounded-xl overflow-hidden relative group h-32 flex items-end p-3"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent), #333' }}>
                        <div className="w-full">
                            <h4 className="font-bold text-sm">Supernatural</h4>
                            <p className="text-xs text-text-muted mb-2">320 Episodes</p>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20">
                                    <Plus size={14} />
                                </button>
                                <button className="flex-1 bg-accent/90 backdrop-blur-sm text-black text-xs rounded-lg font-bold hover:bg-accent">
                                    Watch
                                </button>

                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-white">Genres</h3>
                        <div className='flex items-center gap-1 text-gray-400'>
                            <ChevronLeft size={16} className="cursor-pointer hover:text-white" />
                            <ChevronRight size={16} className="cursor-pointer hover:text-white" />
                        </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs font-bold cursor-pointer hover:text-white">
                        See More <ChevronRight size={14} />
                    </div>
                </div>

                <div className="flex overflow-hidden no-scrollbar gap-3 pb-2">
                    {genres.map((item) => (
                        <div key={item.id} className="min-w-[140px] h-20 rounded-xl flex items-center justify-center font-bold text-sm relative overflow-hidden shrink-0 group cursor-pointer">
                            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-110" />
                            <div className={`absolute inset-0 ${item.id === 1 ? 'bg-blue-900/60' : item.id === 2 ? 'bg-red-900/60' : 'bg-purple-900/60'} backdrop-blur-[1px]`} />
                            <span className="relative z-10 text-white">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}