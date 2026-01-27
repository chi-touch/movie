import Image from 'next/image'
import { forwardRef, useImperativeHandle, useRef } from 'react'

interface GenresItem {
    id: number
    title: string
    image: string
}

export interface GenresRef {
    scrollNext: () => void;
    scrollPrev: () => void;
}

const Genres = forwardRef<GenresRef>((props, ref) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const genres: GenresItem[] = [
        { id: 1, title: 'Drama', image: '/myPic.jpg' },
        { id: 2, title: 'Comedy', image: '/myPic.jpg' },
        { id: 3, title: 'Action', image: '/myPic.jpg' },
        { id: 4, title: 'Horror', image: '/myPic.jpg' },
        { id: 5, title: 'Suspense', image: '/myPic.jpg' },
        { id: 6, title: 'Sitcom', image: '/myPic.jpg' },
        { id: 7, title: 'Supernatural', image: '/myPic.jpg' },
        { id: 8, title: 'Anime', image: '/myPic.jpg' },
        { id: 9, title: 'Sci-Fi', image: '/myPic.jpg' },
        { id: 10, title: 'Science', image: '/myPic.jpg' },
    ]

    useImperativeHandle(ref, () => ({
        scrollNext: () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
            }
        },
        scrollPrev: () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
            }
        }
    }));

    return (
        <div
            ref={scrollContainerRef}
            className="grid grid-rows-2 grid-flow-col overflow-x-auto no-scrollbar relative gap-4 pb-1 scroll-smooth"
        >
            {genres.map((item) => (
                <div key={item.id} className="w-[150px] h-[120px] bg-[#2b2d38] rounded-3xl overflow-hidden relative shrink-0 group">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="font-bold text-sm text-white drop-shadow-lg">{item.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
})

Genres.displayName = 'Genres';

export default Genres;
