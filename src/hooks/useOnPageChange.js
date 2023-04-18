import { useLocation, useHistory } from 'react-router-dom'

// Use this hook in some top-level component
// which is inside a `<Router>` component    https://mtsknn.fi/blog/react-router-scroll-to-top/
function useOnPageChange() {
    const { action } = useHistory()
    const { pathname } = useLocation()
  
    useEffect(() => {
      // Do nothing when using the browser's back/forward buttons
      if (action === 'POP') return
  
      window.scrollTo(0, 0)
    }, [action, pathname])
  }