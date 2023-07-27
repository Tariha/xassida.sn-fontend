import { useCallback, useEffect, useMemo, useRef } from "react"

import useThrottle from "./useThrottle"

const DEFAULT_THROTTLING_WAIT_TIME_MS = 80

/**
 * A hook that detects scrolling and determines whether
 * the user is scrolling up and down and passes it to the
 * callback.
 *
 * @param {direction: ScrollDirection, position: number) => void} onDirectionChange
 * @param {number} throttlingWaitTime The number of milliseconds to throttle callback invocations to.
 */
const useScrollDirection = (
  onDirectionChange,
  throttlingWaitTime = DEFAULT_THROTTLING_WAIT_TIME_MS
) => {
  // useRef is used instead of useState to avoid having to re-render on every scroll.
  const lastYPosition = useRef(0)

  /*
    When the window scrolls, we check the new Y position against the
    old value:
    - If it's higher, it means the user is scrolling down.
    - If not, the user is scrolling up.
  */
  const onScroll = useCallback(() => {
    const newYPosition = window.pageYOffset
    onDirectionChange(
      lastYPosition.current < newYPosition
        ? "down"
        : "up",
      newYPosition
    )
    lastYPosition.current = newYPosition
  }, [onDirectionChange])

  const { throttledFn } = useThrottle({
    callbackFn: onScroll,
    throttleMs: throttlingWaitTime,
  })

  // bind the scroll listener on mount and un-bind it on un-mounting.
  useEffect(() => {
    window.addEventListener("scroll", throttledFn)
    return () => {
      window.removeEventListener("scroll", throttledFn)
    }
  }, [throttledFn])
}

export default useScrollDirection
