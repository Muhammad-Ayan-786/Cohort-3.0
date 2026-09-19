import { useContext, useRef, useState } from "react"
import { UrlContext } from "../context/urlProvider"
import { postLinkAPI } from "../api/urlApis"

export const useURLForm = () => {
  const { setNewURL, isLoading, setIsLoading, error, setError } = useContext(UrlContext)

  const [activeState, setActiveState] = useState('Standard')

  const inputRef = useRef(null)
  const initialUrl = 'https://shorten.url/demo/dispatch?source=link-ledger'


  // Handle Segmented Control Switch
  const handleStateSwitch = (state) => {
    setActiveState(state)
    if (state === 'Standard') return setError(null)
  }


  // Post Link function
  const postLink = async (url) => {
    try {

      const postedData = await postLinkAPI(url)

      setNewURL(postedData)
      setError(null)
      return true

    } catch (error) {
      setError(error.message)
      return false

    } finally {
      setIsLoading(false)
    }
  }


  // Handle Submit button
  const handleSubmit = async () => {
    if (isLoading) return

    setIsLoading(true)
    setActiveState('Shortening...')
    const isSuccessful = await postLink(inputRef.current.value)
    setActiveState(isSuccessful ? 'Standard' : 'Error Trigger')
  }


  // Handle Input
  const handleInput = () => {
    if (activeState === 'Error Trigger') {
      setActiveState('Standard')
      setError(null)
    }
  }


  return {
    inputRef, initialUrl,
    activeState, setActiveState,
    handleStateSwitch, handleSubmit, handleInput,
    error
  }

}