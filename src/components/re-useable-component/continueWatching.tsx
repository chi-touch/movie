'use client'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import Image from 'next/image'

interface ContinueWatchingItem {
    id: number
    title: string
    poster_path: string
    vote_average: number
    release_date: string
    genre_ids: number[]
    episode: string
    progress: number
    image: string
}

export interface ContinueWatchingRef {
    scrollNext: () => void;
    scrollPrev: () => void;
}

const ContinueWatching = forwardRef<ContinueWatchingRef>((props, ref) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // const continueWatching: ContinueWatchingItem[] = [
    //     {
    //         id: 1,
    //         title: 'WandaVision',
    //         episode: '1 Episode left',
    //         progress: 70,
    //         image: '/myPic.jpg'
    //     },
    //     {
    //         id: 2,
    //         title: 'Rick and Morty',
    //         episode: '2 Episode left',
    //         progress: 40,
    //         image: '/myPic.jpg'
    //     },
    // ]

    const [movies, setMovies] = useState<ContinueWatchingItem[]>([])
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
                scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
            }
        },
        scrollPrev: () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
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
                        className="flex overflow-x-auto no-scrollbar relative gap-4 pb-1 scroll-smooth"
                    >
                        {movies.map((movie: any) => (

                            <div key={movie.id} className="w-[150px] h-[120px] bg-[#16181e] border-[1px_solid_#F9F9F91A] rounded-3xl p-3 group hover:bg-[#343744] transition-colors shrink-0 flex flex-col justify-between">
                                <div className="flex gap-3">
                                    <div className="w-14 h-12 bg-gray-700 rounded-2xl relative shrink-0 overflow-hidden">
                                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                        alt={movie.title} 
                                        fill 
                                        className="object-cover" />
                                    </div>
                                    <div className='flex-1 min-w-0 flex flex-col justify-center gap-1'>
                                        <h4 className="font-bold text-xs truncate text-white">{movie.title}</h4>
                                        <p className="text-[9px] text-gray-400">{movie.episode}</p>
                                        <div className="h-1 bg-gray-700 rounded-full w-full mt-0.5">
                                            <div className="h-full bg-teal-400 rounded-full" style={{ width: `${movie.progress}%` }} />
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
            )}
            
        </div>
    )
})

ContinueWatching.displayName = 'ContinueWatching';

export default ContinueWatching;
