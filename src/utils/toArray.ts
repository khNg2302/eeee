type ToArrayProps<Type> = {
    value: Type | Type[] | undefined | null
}

export const toArray = <Type,>({ value }: ToArrayProps<Type>): Type[] => {
    if (!value) return []
    return Array.isArray(value) ? value : [value];
}