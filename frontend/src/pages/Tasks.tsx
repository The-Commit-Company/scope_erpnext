import TaskRow from "@/components/features/Tasks/TaskRow"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import useDebounce from "@/hooks/useDebounce"
import { Task } from "@/types/Projects/Task"
import { useFrappeGetDocList } from "frappe-react-sdk"

const Tasks = () => {

    const [subject, setSubject] = useDebounce('')

    const { data } = useFrappeGetDocList<Task>('Task', {
        fields: ['name', 'subject', 'status', 'exp_start_date', 'exp_end_date', 'progress', 'priority', '_assign'],
        filters: [['subject', 'like', `%${subject}%`]],
    }, ['task_list', subject])

    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-4">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                    Tasks
                </h1>
            </div>

            <div className="flex gap-2 justify-between items-center mb-4">
                <Input onChange={(e) => setSubject(e.target.value)} placeholder="Search" />
                {/* <Select
                // onValueChange={setStatus}
                // value={status}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Open">Open</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                </Select> */}
            </div>
            <div>
                {data?.map((task) => (<TaskRow task={task} key={task.name} />))}
            </div>
        </div>
    )
}

export default Tasks