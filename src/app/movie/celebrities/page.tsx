export default function CelebritiesPage() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-white">Celebrities</h1>
            <p className="text-gray-400">Discover your favorite actors and directors.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-[#21242D] rounded-full border border-white/5 flex items-center justify-center">
                        <span className="text-gray-600">Celeb {i}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
