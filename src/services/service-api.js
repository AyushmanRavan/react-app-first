import httpAxios from "../common/http-common"

export const getAll = async (requestedUrl) => httpAxios.get(`/${requestedUrl}`)

export const getById = async (requestedUrl,requestedId) => httpAxios.get(`/${requestedUrl}/${requestedId}`)

export const create = async (requestedUrl,requestedData) => httpAxios.post(`/${requestedUrl}`, requestedData)

export const updateById = async (requestedUrl,requestedData) => httpAxios.put(`/${requestedUrl}/${requestedData.id}`, requestedData)

export const deleteById = async (requestedUrl,requestedId) => httpAxios.delete(`/${requestedUrl}/${requestedId}`)