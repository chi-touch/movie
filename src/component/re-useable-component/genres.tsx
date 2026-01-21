import Image from 'next/image'

interface GenresItem {
    id: number
    title: string
    image: string
}

export default function Genres() {
    const genres: GenresItem[] = [
        { id: 1, title: 'Drama', image: '/myPic.jpg' },
        { id: 2, title: 'Sitcom', image: '/myPic.jpg' },
        { id: 3, title: 'Suspense', image: '/myPic.jpg' },
    ]

    return (
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
    )
}





