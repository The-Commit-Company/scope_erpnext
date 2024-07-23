export function getUserDefault(key: string) {
    return window.frappe?.boot?.user?.defaults?.[key]
}