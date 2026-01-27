import Image from 'next/image'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

interface Movie {
    id: number
    title: string
    poster_path: string
    vote_average: number
    release_date: string
    genre_ids: number[]
    image:string
}

export interface GenresRef {
    scrollNext: () => void;
    scrollPrev: () => void;
}

const Genres = forwardRef<GenresRef>((props, ref) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY
                
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
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
                <p className="text-white text-[18px]">Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
            <div
            ref={scrollContainerRef}
            className="grid grid-rows-2 grid-flow-col overflow-x-auto no-scrollbar relative gap-4 pb-1 scroll-smooth"
        >
            {movies.map((item: any) => (
                <div key={item.id} className="w-[150px] h-[120px] bg-[#2b2d38] rounded-3xl overflow-hidden relative shrink-0 group">
                    <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} fill className="object-cover transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="font-bold text-sm text-white drop-shadow-lg">{item.title}</h4>
                    </div>
                </div>
            ))}
        </div>
            )}
            
        </div>
    )
})

Genres.displayName = 'Genres';

export default Genres;
