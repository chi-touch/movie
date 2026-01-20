import Link from "next/link";

import {
    Home,
    Compass,
    Award,
    Users,
    Clock,
    Star,
    Download,
    PlaySquare,
    PlusSquare,
    CheckCircle,
    Settings,
    LogOut
} from "lucide-react"

export default function SideBar() {

    const menuItem = [
        { icon: Home, label: 'Home', href: '/', active: true },
        { icon: Compass, label: 'Discover', href: '/discover', active: false },
        { icon: Award, label: 'Awards', href: '/awards', active: false },
        { icon: Users, label: 'Celebrities', href: '/celebrities', active: false },
    ]

    const libraryItem = [
        { icon: Clock, label: 'Recent', href: '/recent', active: false },
        { icon: Star, label: 'Top Rated', href: '/top-rated', active: false },
        { icon: Download, label: 'Downloaded', href: '/downloaded', active: false },
        { icon: PlaySquare, label: 'Playlist', href: '/playlist', active: false },
        { icon: PlaySquare, label: 'Watchlist', href: '/watchlist', active: false },
        { icon: PlaySquare, label: 'Completed', href: '/completed', active: false },
    ]

    const generalItem = [
        { icon: Settings, label: 'Settings', href: '/settings', active: false },
        { icon: LogOut, label: 'Logout', href: '/logout', active: false },
    ]
    return (
        <div className="flex flex-col w-[300px] h-full  bg-[#21242D]" >
            <div className="mb-5">
                <h1 className="text-2xl font-black tracking-tighter text-white">TINY<br />
                    <span className="text-white text-lg font-bold">MOVIEZ</span> </h1>
            </div>

            <div className="flex-1 space-y-8  ml-[30px]">
                <div className="w-[210px] h-[218px] mt-5px ">
                    <h3 className="text-white text-sm font-semibold mb-4 px-2">Menu</h3>
                    <nav className="space-y-1">{menuItem.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex item-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active
                                ? 'text-[#00B9AF]'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    ))}</nav>
                </div>
                <div>
                    <h3 className="text-white text-sm font-semibold mb-4 px-2">Library</h3>
                    <nav className="space-y-1">{libraryItem.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex item-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active
                                ? 'text-accent'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    ))}</nav>
                </div>
                <div>
                    <h3 className="text-white text-sm font-semibold mb-4 px-1">General</h3>
                    <nav className="space-y-1">{generalItem.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex item-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active
                                ? 'text-accent'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <item.icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    ))}</nav>
                </div>

            </div>
        </div>
    );
}