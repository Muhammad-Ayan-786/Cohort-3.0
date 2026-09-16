import { api } from "../config/api"

// Fetch all links function from API
export const fetchAllLinksAPI = async () => {
  try {
    const res = await api.get('/urls/all')
    return res.data.data.urls
  } catch (error) {
    console.log('Error in fetching links', error)
  }
}


// Posting link function API
export const postLinkAPI = async (url) => {
  try {
    const res = await api.post('/urls', { url })
    return res.data.data
  } catch (error) {
    const message = error.response?.data?.error ?? error.message
    throw new Error(message)
  }
}


// Delete link function API
export const deleteLinkAPI = async (id) => {
  try {
    await api.delete(`/urls/${id}`)
  } catch (error) {
    console.log('Error in deleting link', error)
  }
}