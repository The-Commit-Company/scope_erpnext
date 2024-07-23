import { useState } from 'react'
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '@/components/ui/input'
import { Filter, useSearch } from 'frappe-react-sdk'

type Props = {
    doctype: string,
    value?: string,
    onChange: (value: string) => void,
    filters?: Filter[]
}

const LinkField = ({ value, onChange, doctype, filters }: Props) => {

    const [open, setOpen] = useState(false)

    const [searchValue, setSearchValue] = useState('')

    const { data } = useSearch(doctype, searchValue, filters)


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {value ? value : `Select ${doctype}`}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-full'>
                <Input
                    value={searchValue}
                    placeholder='Search...'
                    onChange={(e) => setSearchValue(e.target.value)}
                    className={cn(
                        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                    )}

                />
                {data?.message.length === 0 && <span className="py-6 text-center text-sm">No {doctype} found.</span>}

                <div className='max-h-[300px] overflow-y-auto overflow-x-hidden pt-2'>
                    {data?.message?.map((item) => (
                        <div
                            className='relative flex cursor-default select-none items-center rounded-sm px-2 py-2 text-sm outline-none aria-selected:bg-accent hover:bg-slate-50 aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
                            key={item.value}
                            onClick={() => {
                                onChange(item.value)
                                setOpen(false)
                            }}
                        >
                            {value === item.value && <CheckIcon className="absolute left-2 h-4 w-4" />}
                            <span className='pl-6'>{item.value}</span>

                        </div>
                    ))}

                </div>
            </PopoverContent>
        </Popover>
    )
}

export default LinkField