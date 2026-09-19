import { useContext, useEffect, useState } from "react"
import { UrlContext } from "../context/urlProvider"
import { fetchAllLinksAPI, deleteLinkAPI } from "../api/urlApis"

export const useLinkLedger = () => {

  const { newURL, setNewURL, links, setLinks } = useContext(UrlContext)

  const [isLoadingLinks, setIsLoadingLinks] = useState(true)
  const [deletingLinks, setDeletingLinks] = useState({})

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

      if (newURL && !linksData.some((link) => link.shortCode === newURL.shortCode)) {
        setNewURL(null)
      }

    } catch (error) {
      console.log('Error in fetching links', error)
    } finally {
      setIsLoadingLinks(false)
    }
  }


  // Delete link function
  const deleteLink = async (linkId) => {
    setDeletingLinks(prev => ({ ...prev, [linkId]: true }))
    try {
      await deleteLinkAPI(linkId)
      await loadLinks()
    } catch (error) {
      console.log('Error in deleting link', error)
    } finally {
      setDeletingLinks(prev => ({ ...prev, [linkId]: false }))
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
    deletingLinks,
    showEmptyState,
    activeView,
    viewNotice,
    handleViewChange,
    deleteLink
  }
}