import {
  useCallback,
  useRef,
  useState
} from 'react'
import useBrowserLayoutEffect from './useBrowserLayoutEffect';

export const useObserveElement = (
  onElementVisible,
  options = {
    root: null,
    rootMargin: "10%",
    threshold: 0.1
  },
  once = true) => {

  const [node, setNode] = useState(null)

  const updateEntry = useCallback(
    ([entry]) => {
      if (entry.isIntersecting) {
        onElementVisible()
        if (once) setNode(null)
      }
    },
    [onElementVisible, once],
  );

  const observer = useRef(
    new window.IntersectionObserver(updateEntry), options)

  useBrowserLayoutEffect(() => {
    const {
      current: currentObserver
    } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return setNode;
}
