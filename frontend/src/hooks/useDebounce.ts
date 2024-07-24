import { useEffect, useState } from 'react'

const useDebounce = <T>(initValue: T, delay: number = 250) => {

    const [value, setValue] = useState<T>(initValue)

    const [debouncedValue, setDebouncedValue] = useState<T>(initValue)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return [debouncedValue, setValue] as const

}

export default useDebounce