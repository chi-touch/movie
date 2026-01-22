export default function AwardsPage() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-white">Awards</h1>
            <p className="text-gray-400">This page will showcase movie awards and nominations.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="h-40 bg-[#21242D] rounded-3xl p-6 border border-white/5">
                    <h2 className="text-teal-400 font-bold mb-2">Oscars 2025</h2>
                    <p className="text-sm text-gray-500">Coming soon...</p>
                </div>
            </div>
        </div>
    );
}
