import { useRef, useState } from 'react'

export const useCopyToClipboard = () => {
  const [copiedId, setCopiedId] = useState(null)
  const timeoutRef = useRef(null)

  const copyToClipboard = async (url, id) => {
    if (!url) return

    await navigator.clipboard.writeText(url)
    setCopiedId(id)

    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopiedId(null), 2000)
  }

  return { copiedId, copyToClipboard }
}