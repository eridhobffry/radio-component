// import { nanoid } from 'nanoid'

export const fetchRequestBuilder = (apiEndpoint, method = 'GET', payload = {}, useApiKey = true, absolute = false, omitToken = false) => {
    const url = apiEndpoint
    // const apiKey = 'rollianFrontEnd29'
    // const applicationKey = 'radioComponentRollian'
    let data = {
        method,
        // headers: { 
        //     'Content-Type': 'application/json',
        //     'Accept-Language': 'de',
        //     'X-Application-Key': applicationKey,
        //     'X-API-Key': apiKey,
        //     'Authorization': `Rollians Token ${nanoid()}`,
        // },
        // mode: 'cors'
    }

    return {
        data,
        url
    }
}

export default fetchRequestBuilder