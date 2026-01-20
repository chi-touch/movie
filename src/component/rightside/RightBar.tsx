import { Bell, ChevronRight, ChevronLeft } from 'lucide-react'
import Image from 'next/image'


export default function RightBar() {
    return (
        <div className="w-[300px] bg-sidebar h-full flex flex-col p-6 border-l border-white/5 overflow-y-auto no-scrollbar bg-[#21242D]">
            <div className="flex items-center justify-between mb-10">
                <button className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <Bell size={20} />
                </button>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium">Samantha</span>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accent to-purple-500 p-[2px]">
                        <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden relative">
                            <Image src="/myPic.jpg" alt="myPic" width={100} height={100} className="bg-gray-700" />

                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-8'>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg text-white flex items-center gap-4">Continue
                        <div className='flex items-center'>
                            <ChevronLeft size={16} className="text-white cursor-pointer" />
                            <ChevronRight size={16} className="text-white hover:text-white cursor-pointer" />
                        </div>
                    </h3>
                    <div className="flex items-center gap-2 text-white text-xs font-bold cursor-pointer hover:text-white">
                        See More<ChevronRight size={16} className="text-white hover:text-white cursor-pointer" />
                    </div>
                </div>
                {/* <div>
                    <ChevronLeft size={16} className="text-text-muted hover:text-white cursor-pointer" />
                    <ChevronRight size={16} className="text-white cursor-pointer" />
                </div> */}
            </div>

            <div className="space-y-4">
                <div className="bg-card rounded-xl p-3 relative group">
                    <div className="h-24 bg-gray-700 rounded-lg mb-3 w-full relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 h-1 bg-accent w-[70%]" />
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className="font-bold text-sm">WonderVision</h4>
                        <p className="text-xs text-text-muted">1 Episode left</p>
                    </div>
                    <div className='mt-3 flex gap-2'>
                        <button className="flex-1 bg-white/5 text-xs py-1.5 rounded-lg hover:bg-white/10">Drop</button>
                        <button className="flex-1 bg-accent text-black text-xs py-1.5 rounded-lg font-bold hover:bg-accent/80">Watch</button>
                    </div>
                </div>

            </div>

        </div>
    )
}