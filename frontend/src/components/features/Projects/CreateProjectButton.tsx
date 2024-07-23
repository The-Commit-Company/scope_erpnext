import { Button } from "@/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Project } from "@/types/Projects/Project"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import LinkField from "@/components/common/FormFields/LinkField"
import { useFrappeCreateDoc } from "frappe-react-sdk"
import { useState } from "react"
import { getUserDefault } from "@/lib/defaults"

const CreateProjectButton = () => {

    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default">
                    <PlusCircledIcon className="h-4 w-4 mr-2" />
                    New</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New Project</DialogTitle>
                    <DialogDescription>
                        Create a new project
                    </DialogDescription>
                </DialogHeader>
                <ProjectForm onClose={() => setOpen(false)} />
            </DialogContent>
        </Dialog>

    )
}

export default CreateProjectButton

const ProjectForm = ({ onClose }: { onClose: VoidFunction }) => {

    const form = useForm<Project>({
        defaultValues: {
            company: getUserDefault('company')
        }
    })

    const { createDoc, loading } = useFrappeCreateDoc<Project>()

    const onSubmit = (data: Project) => {

        createDoc('Project', data)
            .then(() => {
                onClose()
            })
    }


    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
                <FormField
                    control={form.control}
                    name="project_name"
                    rules={{
                        required: 'Project Name is required',
                        maxLength: {
                            value: 140,
                            message: 'Project Name should not exceed 140 characters'
                        }
                    }}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="company"
                    rules={{
                        required: 'Company is required'
                    }}
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Company</FormLabel>
                            <LinkField doctype='Company'
                                value={field.value}
                                filters={[['is_group', '=', 0]]}
                                onChange={field.onChange} />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="project_template"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Template</FormLabel>
                            <LinkField doctype='Project Template' value={field.value} onChange={field.onChange} />
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <DialogFooter>
                <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save changes"}</Button>
            </DialogFooter>
        </form>
    </Form>


}