import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'

type Props = {
    previous: () => void,
    next: () => void,
    currentPage: number,
    totalPages: number
}

const PageSelector = ({ previous, next, currentPage, totalPages }: Props) => {
    return (
        <div className='flex gap-2 items-center'>
            <Button variant="outline" size="icon"
                disabled={currentPage === 0}>
                <ChevronLeftIcon className="h-4 w-4" onClick={previous}
                />
            </Button>
            <span className='text-slate-700'>{currentPage + 1} of {totalPages}</span>
            <Button variant="outline" size="icon"
                disabled={currentPage === totalPages - 1}>
                <ChevronRightIcon className="h-4 w-4" onClick={next} />
            </Button>
        </div>
    )
}

export default PageSelector