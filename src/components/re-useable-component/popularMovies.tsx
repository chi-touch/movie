'use client'
import Image from "next/image"
import { Star } from "lucide-react"
import ReUseableButton from "@/components/re-useable-component/ReUseableButton"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Movie {
    id: number
    title: string
    poster_path: string
    vote_average: number
    release_date: string
    genre_ids: number[]
}

export default function PopularMovies() {
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

    
   

    return (
        <div >

            
            {loading ? (
                <p className="text-white text-[18px]">Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies.map((movie: any) => (
                        <Link key={movie.id} href={`/movie/${movie.id}`} className="block">
                            <div className="h-[298px] w-[237px] rounded-3xl overflow-hidden relative group cursor-pointer bg-[#21242D]">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{movie.title}</h3>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className={i < Math.round(movie.vote_average / 2) ? "fill-teal-400 text-teal-400" : "fill-transparent text-gray-500"}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-25 mt-30 text-xs text-gray-400">
                                        <span>{movie.release_date?.split('-')[0]}</span>
                                    </div>
                                    <ReUseableButton />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

        </div>

    )

}