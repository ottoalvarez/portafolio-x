import { useEffect, useRef } from 'react'

export const useInfiniteScroll = (callback: () => void) => {
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && callback(),
      { threshold: 0.1 },
    )

    const currentRef = observerRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [callback])

  return observerRef
}
