import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Project } from "@/types/Projects/Project"
import { Filter, useFrappeDocTypeEventListener, useFrappeGetDocList } from "frappe-react-sdk"
import { useMemo, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Pagination from "@/components/common/Pagination/Pagination"
import CreateProjectButton from "@/components/features/Projects/CreateProjectButton"
import { ErrorBanner } from "@/components/common/ErrorBanner/ErrorBanner"


const Projects = () => {

    const [status, setStatus] = useState('')

    const [pageLimitStart, setPageLimitStart] = useState(0)

    const filters = useMemo(() => {

        const f: Filter[] = []

        if (status) {
            f.push(['status', '=', status])
        }
        return f

    }, [status])

    const { data, mutate, error } = useFrappeGetDocList<Project>('Project', {
        fields: ['name', 'project_name', 'status', 'expected_start_date', 'expected_end_date', 'percent_complete', 'priority'],
        filters: filters,
        limit: 20,
        limit_start: pageLimitStart,
    })

    useFrappeDocTypeEventListener('Project', () => {
        mutate()
    })


    return (
        <div className="p-2">
            <div className="flex justify-between items-center mb-4">
                <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
                    Projects
                </h1>
                <CreateProjectButton />
            </div>

            <div className="flex gap-2 justify-between items-center mb-4">
                <Select
                    onValueChange={setStatus}
                    value={status}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Open">Open</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectContent>
                </Select>
                <Pagination
                    doctype="Project"
                    pageLimitStart={pageLimitStart}
                    filters={filters}
                    setPageLimitStart={setPageLimitStart}
                />
            </div>
            <ErrorBanner error={error} />
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                        <TableHead className="text-right">% Complete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map(project => {
                        return <TableRow key={project.name}>
                            <TableCell className="font-medium">{project.name}</TableCell>
                            <TableCell>{project.project_name}</TableCell>
                            <TableCell>{project.status}</TableCell>
                            <TableCell>{project.priority}</TableCell>
                            <TableCell>{project.expected_start_date}</TableCell>
                            <TableCell>{project.expected_end_date}</TableCell>
                            <TableCell className="text-right">{project.percent_complete}%</TableCell>
                        </TableRow>
                    })}

                </TableBody>
            </Table>
        </div>

    )
}

export default Projects