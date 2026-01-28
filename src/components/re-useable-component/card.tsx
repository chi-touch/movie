import { useState } from "react"
import { Plus } from "lucide-react"

const Card = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    return (
        <div className="w-full h-full">
            {isProfileOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-[#1a1c22] w-[400px] p-8 rounded-3xl border border-white/10 shadow-2xl animate-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Edit Profile</h2>
                            <button onClick={() => setIsProfileOpen(false)} className="p-2 hover:bg-white/5 rounded-xl text-gray-400">
                                <Plus size={20} />
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
            )}
        </div>
    )
}
export default Card;