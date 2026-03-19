import { useLocation, useRoutes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { PageTransition } from './components/PageTransition'
import { SmoothScroll } from './components/SmoothScroll'
import { Home } from './pages/Home'
import { ProductsPage } from './pages/Products'
import { Dazfin } from './pages/Dazfin'
import { DaResume } from './pages/DaResume'
import { Services } from './pages/Services'
import { Work } from './pages/Work'
import { Contact } from './pages/Contact'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/products/dazfin', element: <Dazfin /> },
  { path: '/products/daresume', element: <DaResume /> },
  { path: '/services', element: <Services /> },
  { path: '/work', element: <Work /> },
  { path: '/contact', element: <Contact /> },
]

function App() {
  const location = useLocation()
  const element = useRoutes(routes)

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {element && (
          <PageTransition key={location.pathname}>
            {element}
          </PageTransition>
        )}
      </AnimatePresence>
    </SmoothScroll>
  )
}

export default App
