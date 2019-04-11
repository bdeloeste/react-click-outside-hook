import { useState, useRef, useEffect } from 'react'

export function useClickOutside() {
  const ref = useRef()
  const [state, setState] = useState({
    hasClickedOutside: false,
  })

  function handleEvent(e) {
    /* istanbul ignore else  */
    if (ref && ref.current) {
      if (ref.current.contains(e.target)) {
        setState({ hasClickedOutside: false })
      } else {
        setState({ hasClickedOutside: true })
      }
    }
  }

  useEffect(() => {
    if (window.PointerEvent) {
      document.addEventListener('pointerdown', handleEvent)
    } else {
      document.addEventListener('mousedown', handleEvent)
      document.addEventListener('touchstart', handleEvent)
    }

    return () => {
      if (window.PointerEvent) {
        document.addEventListener('pointerdown', handleEvent)
      } else {
        document.removeEventListener('mousedown', handleEvent)
        document.removeEventListener('touchstart', handleEvent)
      }
    }
  }, [])

  return [ref, state.hasClickedOutside]
}
