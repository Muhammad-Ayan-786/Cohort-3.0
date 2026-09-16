import { useContext, useEffect, useState } from "react"
import { UrlContext } from "../context/urlProvider"
import { fetchAllLinksAPI, deleteLinkAPI } from "../api/urlApis"

export const useLinkLedger = () => {

  const { newURL } = useContext(UrlContext)

  const [links, setLinks] = useState([])
  const [isLoadingLinks, setIsLoadingLinks] = useState(true)

  const [activeView, setActiveView] = useState('empty')
  const [viewNotice, setViewNotice] = useState(null)

  const showEmptyState = activeView === 'empty' && links.length === 0


  // Handle Empty & List view change
  const handleViewChange = (view) => {
    if (view === 'empty' && links.length > 0) {
      setViewNotice('Delete all active links before switching to the Empty view.')
      return
    }

    if (view === 'list' && links.length === 0) {
      setViewNotice('Create your first link before switching to the List view.')
      return
    }

    setViewNotice(null)
    setActiveView(view)
  }


  // Fetch all links function from API
  const loadLinks = async () => {
    try {
      const linksData = await fetchAllLinksAPI()
      setLinks(linksData)

    } catch (error) {
      console.log('Error in fetching links', error)
    } finally {
      setIsLoadingLinks(false)
    }
  }


  // Delete link function
  const deleteLink = async (linkId) => {
    try {
      await deleteLinkAPI(linkId)
      await loadLinks()
    } catch (error) {
      console.log('Error in deleting link', error)
    }
  }


  // Fetch links on mount and when newURL or links changes
  useEffect(() => {
    const handleWindowFocus = () => loadLinks()

    loadLinks()
    window.addEventListener('focus', handleWindowFocus)

    return () => {
      window.removeEventListener('focus', handleWindowFocus)
    }

  }, [newURL])


  // If viewNotice is set, hide it after 2.5 seconds
  useEffect(() => {
    if (!viewNotice) return

    const timeoutId = setTimeout(() => setViewNotice(null), 2500)
    return () => clearTimeout(timeoutId)
  }, [viewNotice])


  return {
    links,
    isLoadingLinks,
    showEmptyState,
    activeView,
    viewNotice,
    handleViewChange,
    deleteLink
  }
}