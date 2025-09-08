import api from "./api"

export const getCuriosidades = async () => {
    const response = await api.get('/random/date')

    if(response.status !== 200) {
        return []
    }

    return response.data.results
}