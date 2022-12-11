export function isEmptyString(value?: string) {
    return value === undefined || value === null || value.trim() === ''
}