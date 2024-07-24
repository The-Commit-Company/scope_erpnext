import { Task } from "@/types/Projects/Task"
import { AlertCircle, CircleDashed, SignalHigh, SignalLow, SignalMedium } from "lucide-react"

const PriorityIcon = ({ priority, size = 18 }: { priority?: Task['priority'], size?: number }) => {

    if (priority === "Urgent") {
        return <AlertCircle size={size} className="fill-red-400 text-white" />
    }
    if (priority === "High") {
        return <SignalHigh size={size} strokeWidth={3} className="text-gray-700" />
    } else if (priority === "Medium") {
        return <SignalMedium size={size} strokeWidth={3} className="text-gray-700" />
    } else if (priority === "Low") {
        return <SignalLow size={size} strokeWidth={3} className="text-gray-700" />
    } else {
        return <CircleDashed size={size - 2} strokeWidth={1} className="text-gray-700" />
    }
}

export default PriorityIcon