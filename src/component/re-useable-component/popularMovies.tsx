import Image from "next/image"
import { Star, Plus, } from "lucide-react"

interface PopularMoviesItem {
    id: number
    title: string
    episodes: string
    genre: string
    image: string
    rating: number
}



export default function PopularMovies() {

    const popularMovies: PopularMoviesItem[] = [
        {
            id: 1,
            title: "Loki",
            episodes: "6 Ep",
            genre: "Superhero",
            image: "/myPic.jpg",
            rating: 5,
        },
        {
            id: 2,
            title: "Chernobyl",
            episodes: "5 Ep",
            genre: "Mini Series",
            image: "/myPic.jpg",
            rating: 5,
        },
        {
            id: 3,
            title: "Rick and Morty",
            episodes: "49 Ep",
            genre: "Fantasy",
            image: "/myPic.jpg",
            rating: 5,
        },
    ]

    return (
        <div>
            {popularMovies.map((movie) => (
                <div key={movie.id} className="h-[250px] rounded-3xl overflow-hidden relative group cursor-pointer bg-[#21242D]">
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div>
                            <h3 className="text-white font-bold text-lg mb-1">{movie.title}</h3>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-teal-400 text-teal-400" />
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex flex-col text-xs text-gray-400">
                                <span>{movie.episodes}</span>
                                <span>{movie.genre}</span>
                            </div>

                            <div className="flex gap-2">
                                <button className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-md hover:bg-white/20 transition-colors">
                                    <Plus size={20} className="text-white" />
                                </button>
                                <button className="px-6 h-10 bg-teal-400 text-black text-xs rounded-xl font-bold hover:bg-teal-500 transition-colors">
                                    Watch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    )

}