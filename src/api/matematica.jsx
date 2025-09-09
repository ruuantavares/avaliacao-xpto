import api from "./api"

export const getMatematica = async () => {
    const response = await api.get('/random/math')

    if(response.status !== 200) {
        return []
    }

    return response.data.results
}