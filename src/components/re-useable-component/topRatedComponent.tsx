import Image from 'next/image'
import { Plus } from 'lucide-react'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

interface TopRatedItem {
    id: number
    title: string
    poster_path: string
    vote_average: number
    release_date: string
    genre_ids: number[]
}

export interface TopRatedRef {
    scrollNext: () => void;
    scrollPrev: () => void;
}

const TopRatedComponent = forwardRef<TopRatedRef>((props, ref) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [movies, setMovies] = useState<TopRatedItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
  
    useEffect(() => {
            const fetchMovies = async () => {
                try {
                    setLoading(true)
                    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
                    
                    const response = await fetch(
                        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
                    )
                    
                    if (!response.ok) {
                        throw new Error(`Failed to fetch: ${response.status}`)
                    }
                    
                    const data = await response.json()
                    setMovies(data.results)
                } catch (err) {
                    setError(err instanceof Error ? err.message : "Failed to fetch movies")
                } finally {
                    setLoading(false)
                }
            }
            
            fetchMovies()
        }, [])



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
        <div>
            {loading ? (
                <p className='text-white text-[18px]'>Loading...</p>
            ) : error ? (
                <p>Error:{error}</p>
            ) :(

                <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto no-scrollbar relative gap-4 pb-1 scroll-smooth"
            >
                {movies.map((item: any) => (
                    <div key={item.id} className="w-[150px] h-[120px] bg-[#2b2d38] rounded-3xl overflow-hidden relative shrink-0 group">
                        <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
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

            
            )}
            
            
            
        </div>
    )
})

TopRatedComponent.displayName = 'TopRatedComponent';

export default TopRatedComponent;