import api from "./api"

export const getAno = async () => {
    const response = await api.get('/random/year')

    if(response.status !== 200) {
        return []
    }

    return response.data.results
}