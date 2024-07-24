import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Task } from "@/types/Projects/Task"
import PriorityIcon from "./PriorityIcon"
import { forwardRef } from "react"
import { useFrappeUpdateDoc, useSWRConfig } from "frappe-react-sdk"

type Props = {
    priority: Task['priority'],
    taskID: Task['name']
}

const PrioritySelector = ({ priority, taskID }: Props) => {

    const { mutate } = useSWRConfig()
    const { updateDoc } = useFrappeUpdateDoc<Task>()

    const onPriorityChange = (p: Task['priority']) => {

        const promise = updateDoc('Task', taskID, {
            priority: p
        })
        mutate(
            // SWR Key 
            (key) => Array.isArray(key) && key[0] === 'task_list',
            // Updater function
            async (existingTasks?: Task[]) => {
                return promise.then((doc) => {
                    return existingTasks?.map((task) => {
                        if (task.name === doc.name) {
                            return {
                                ...task,
                                ...doc
                            }
                        }
                        return task
                    })
                })
            },
            // Mutate options
            {
                revalidate: false,
                optimisticData: (currentTasks?: Task[]) => {
                    return currentTasks?.map((task) => {
                        if (task.name === taskID) {
                            return {
                                ...task,
                                priority: p
                            }
                        }
                        return task
                    }) ?? []
                }
            })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <PriorityIcon priority={priority} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <PriorityOptionItem
                    priority="Urgent"
                    selected={priority}
                    onClick={onPriorityChange}
                />
                <PriorityOptionItem
                    priority="High"
                    selected={priority}
                    onClick={onPriorityChange}
                />

                <PriorityOptionItem
                    priority="Medium"
                    selected={priority}
                    onClick={onPriorityChange}
                />

                <PriorityOptionItem
                    priority="Low"
                    selected={priority}
                    onClick={onPriorityChange}
                />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

interface PriorityOptionItemProps {
    priority: Task['priority'],
    selected: Task['priority'],
    onClick: (p: Task['priority']) => void
}
const PriorityOptionItem = forwardRef<any, PriorityOptionItemProps>(({ priority, selected, onClick }, ref) => {

    return <DropdownMenuCheckboxItem ref={ref} checked={priority === selected} onCheckedChange={() => onClick(priority)}>
        <div className="flex space-x-1.5 items-center justify-between w-32">
            <span>{priority}</span>
            <span className='text-right'>
                <PriorityIcon priority={priority} />
            </span>
        </div>
    </DropdownMenuCheckboxItem>
})

export default PrioritySelector