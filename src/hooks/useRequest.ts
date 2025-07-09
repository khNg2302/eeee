import { wait } from "@/utils/wait"
import { useState } from "react"

type UseRequest<Response> = {
    service: () => Promise<Response>
}

type UseRequestReturn<Response> = {
    loading: boolean
    request: (props: UseRequest<Response>) => Promise<Response>
}

export const useRequest = <Response>(): UseRequestReturn<Response> => {
    const [loading, setLoading] = useState<boolean>(false)
    const request = async ({ service }: UseRequest<Response>) => {
        const start = new Date()
        setLoading(true)
        const res = await service()
        const end = new Date()
        const timDone = end.getMilliseconds() - start.getMilliseconds()
        if (timDone < 200) await wait(200 - timDone)
        setLoading(false)
        return res
    }
    return {
        loading,
        request
    }
}

