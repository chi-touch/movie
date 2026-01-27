import { Plus } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface ReUseableButtonProps {
    className?: string
}

const ReUseableButton = ({ className }: ReUseableButtonProps) => {
    return (
        <div className={cn("flex gap-15", className)}>
            <Button className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl backdrop-blur-md hover:bg-white/20 transition-colors">
                <Plus size={20} className="text-white" />
            </Button>
            <Button className="px-6 h-10 bg-teal-400 text-black text-xs rounded-xl font-bold hover:bg-teal-500 transition-colors">
                Watch
            </Button>
        </div>
    )
}
export default ReUseableButton;