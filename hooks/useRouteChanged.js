'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const useRouteChanged = (change) =>  {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    change()
  }, [pathname, searchParams])
}

export default useRouteChanged
