import Image from 'next/image'
import { Plus } from 'lucide-react'

export default function TopRatedComponent() {


    const topRated = [
        { id: 1, title: 'Supernatural', episodes: '320 Ep', genre: 'Horror, Fantasy', image: '/myPic.jpg' },
        { id: 2, title: 'Rick and Morty', episodes: '49 Ep', genre: 'Sci-Fi', image: '/myPic.jpg' },
    ]

    return (

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

    )

}