"use client"
import React, { useState, useRef } from 'react'
import { Bell, ChevronDown, Plus, X } from 'lucide-react'
import Image from 'next/image'
import ContinueWatching, { ContinueWatchingRef } from '../re-useable-component/continueWatching'
import TopRatedComponent, { TopRatedRef } from '../re-useable-component/topRatedComponent'
import Genres, { GenresRef } from '../re-useable-component/genres'
import SectionHeader from '../re-useable-component/SectionHeader'
import Card from '../re-useable-component/card'

export default function RightBar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const continueWatchingRef = useRef<ContinueWatchingRef>(null)
    const topRatedRef = useRef<TopRatedRef>(null)
    const genresRef = useRef<GenresRef>(null)

    return (
        <div className="w-[300px] bg-[#2b2d38] h-full flex flex-col  p-5 border-l border-white/5 overflow-y-auto no-scrollbar">

            {/* {isProfileOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-[#1a1c22] w-[400px] p-8 rounded-3xl border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Edit Profile</h2>
                            <button onClick={() => setIsProfileOpen(false)} className="p-2 hover:bg-white/5 rounded-xl text-gray-400">
                                <X size={20} />
                            </button>
                        </div>
                        <form className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">Name</label>
                                <input type="text" defaultValue="Samantha" className="w-full bg-[#2b2d38] border border-white/5 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-teal-400/20" />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-400 mb-1.5 block uppercase tracking-wider">Email</label>
                                <input type="email" defaultValue="samantha@example.com" className="w-full bg-[#2b2d38] border border-white/5 rounded-xl px-4 py-3 text-white outline-none focus:ring-2 focus:ring-teal-400/20" />
                            </div>
                            <button type="button" className="w-full bg-teal-400 text-black font-bold py-3.5 rounded-xl mt-4 hover:bg-teal-500 transition-colors">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )} */}

            <Card />
            <div className="flex items-center justify-between mb-8">
                <button className="p-3 rounded-2xl bg-[#4c4f56] text-gray-400 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-3 right-3 w-2 h-2 bg-blue-500 rounded-full border border-[#2b2d38]" />
                </button>
                <div className="flex items-center gap-3">
                    <div className='flex items-center gap-1 cursor-pointer text-white' onClick={() => setIsProfileOpen(true)}>
                        <span className="text-sm font-medium">Samantha</span>
                        <ChevronDown size={16} />
                    </div>
                    <div
                        className="w-7 h-7  bg-yellow-500 overflow-hidden relative border-2 border-[#2b2d38] cursor-pointer hover:border-white transition-colors"
                        onClick={() => <Card />}
                    >
                        <div className="w-full h-full  bg-gray-800 overflow-hidden relative">
                            <Image src="/myPic.jpg" alt="pic" width={100} height={100} className="bg-gray-700" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <SectionHeader
                    title="Continue"
                    onPrev={() => continueWatchingRef.current?.scrollPrev()}
                    onNext={() => continueWatchingRef.current?.scrollNext()}
                />

                <ContinueWatching ref={continueWatchingRef} />
            </div>

            <div className="mb-6 mt-4">
                <SectionHeader
                    title="Top Rated"
                    onPrev={() => topRatedRef.current?.scrollPrev()}
                    onNext={() => topRatedRef.current?.scrollNext()}
                />

                <TopRatedComponent ref={topRatedRef} />
            </div>

            <div className="mb-6 mt-4">
                <SectionHeader
                    title="Genres"
                    onPrev={() => genresRef.current?.scrollPrev()}
                    onNext={() => genresRef.current?.scrollNext()}
                />

                <Genres ref={genresRef} />
            </div>
        </div>
    )
}
