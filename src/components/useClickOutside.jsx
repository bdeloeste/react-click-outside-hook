import { useState, useRef, useEffect } from 'react'

export function useClickOutside() {
  const ref = useRef()
  const [state, setState] = useState({
    hasClickedOutside: false,
  })

  function handleClick(e) {
    if (ref && ref.current) {
      if (ref.current.contains(e.target)) {
        setState({ hasClickedOutside: false })
      } else {
        setState({ hasClickedOutside: true })
      }
    }
  }

  useEffect(() => {
    if (!ref) {
      return
    }
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return [ref, state.hasClickedOutside]
}
