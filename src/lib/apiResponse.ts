type ApiResponse<Data> = {
    success: boolean
    message: string
    data: Data
    code: string
}

export const apiResponse = <Data>(response: ApiResponse<Data>): ApiResponse<Data> => {
    return response
}

export const apiSuccessResponse = <Data>(response: Omit<ApiResponse<Data>, 'success'>): ApiResponse<Data> => {
    return {
        ...response,
        success: true,
    }
}

export const apiFailedResponse = <Data>(response: Omit<ApiResponse<Data>, 'success'>): ApiResponse<Data> => {
    return {
        ...response,
        success: false,
    }
}

export const apiFailedValidateResponse = <Data>(response: Omit<ApiResponse<Data>, 'success'>): ApiResponse<Data> => {
    return {
        ...response,
        success: false,
    }
}