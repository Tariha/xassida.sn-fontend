import { useCallback, useEffect, useRef } from "react"

const getRemainingTime = (lastTriggeredTime, throttleMs) => {
  const elapsedTime = Date.now() - lastTriggeredTime
  const remainingTime = throttleMs - elapsedTime

  return remainingTime < 0 ? 0 : remainingTime
}

const useThrottle = ({ callbackFn, throttleMs }) => {
  const lastTriggered = useRef(Date.now())
  const timeoutRef = useRef(null)

  const cancel = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [timeoutRef])

  const throttledFn = useCallback(
    (args) => {
      let remainingTime = getRemainingTime(lastTriggered.current, throttleMs)

      if (remainingTime === 0) {
        lastTriggered.current = Date.now()
        callbackFn(args)
        cancel()
      } else if (!timeoutRef.current) {
        timeoutRef.current = setTimeout(() => {
          remainingTime = getRemainingTime(lastTriggered.current, throttleMs)

          if (remainingTime === 0) {
            lastTriggered.current = Date.now()
            callbackFn(args)
            cancel()
          }
        }, remainingTime)
      }
    },
    [callbackFn, cancel, lastTriggered, throttleMs, timeoutRef]
  )

  useEffect(() => cancel, [cancel])

  return { cancel, throttledFn }
}

export default useThrottle
