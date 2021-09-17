import { fetchHandler, fetchRequestBuilder, HTTP_METHOD, limiter } from 'application/api/request_builders'
import { handleApiResponse } from 'application/api/response_handlers'

export const getRadiosData = () => {
    const request = fetchRequestBuilder(`https://teclead.de/recruiting/radios`, HTTP_METHOD.GET)

    return limiter.schedule(() => fetchHandler(request.url, request.data))
        .then(handleApiResponse)
}