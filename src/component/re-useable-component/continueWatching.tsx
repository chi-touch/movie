import Image from 'next/image'

interface ContinueWatchingItem {
    id: number
    title: string
    episode: string
    progress: number
    image: string
}

export default function ContinueWatching() {
    const continueWatching: ContinueWatchingItem[] = [
        {
            id: 1,
            title: 'WandaVision',
            episode: '1 Episode left',
            progress: 70,
            image: '/myPic.jpg'
        },
        {
            id: 2,
            title: 'Rick and Morty',
            episode: '2 Episode left',
            progress: 40,
            image: '/myPic.jpg'
        },
    ]

    return (
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
    )
}