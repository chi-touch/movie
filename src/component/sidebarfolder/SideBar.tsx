"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();

    // Pages where SideBar should be hidden
    const hideOnRoutes = ['/movie/awards'];
    if (hideOnRoutes.includes(pathname)) return null;

    const menuItem = [
        { icon: Home, label: 'Home', href: '/movie/home' },
        { icon: Compass, label: 'Discover', href: '/movie/discover' },
        { icon: Award, label: 'Awards', href: '/movie/awards' },
        { icon: Users, label: 'Celebrities', href: '/movie/celebrities' },
    ]

    const libraryItem = [
        { icon: Clock, label: 'Recent', href: '/movie/recent' },
        { icon: Star, label: 'Top Rated', href: '/movie/top-rated' },
        { icon: Download, label: 'Downloaded', href: '/movie/downloaded' },
        { icon: PlaySquare, label: 'Playlist', href: '/movie/playlist' },
        { icon: PlaySquare, label: 'Watchlist', href: '/movie/watchlist' },
        { icon: PlaySquare, label: 'Completed', href: '/movie/completed' },
    ]

    const generalItem = [
        { icon: Settings, label: 'Settings', href: '/movie/settings' },
        { icon: LogOut, label: 'Logout', href: '/movie/logout' },
    ]
    return (
        <div className="flex flex-col w-[300px] h-full bg-[#21242D] overflow-y-auto scrollbar-hide" >
            <div className="mb-5 ml-10">
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
                            className={`flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
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
                            className={`flex item-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                                ? 'text-[#00B9AF]'
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
                            className={`flex item-center gap-3 px-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                                ? 'text-[#00B9AF]'
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