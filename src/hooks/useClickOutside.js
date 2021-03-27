import { useEffect } from 'react'

export const useClickOutside = (ref, displayDropdown, selectItem) => {
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            displayDropdown(false)
            selectItem(null)
        }
    }
}

