import { useState, useEffect, useRef } from 'react'
import { Home } from './pages/Home'
import { AjaxApiPage } from './pages/AjaxApiPage'
import { StorefrontApiPage } from './pages/StorefrontApiPage'
import { ThemeAdminPage } from './pages/ThemeAdminPage'
import { ConfigPage } from './pages/ConfigPage'
import { SessionCachePage } from './pages/SessionCachePage'
import { ChangelogPage } from './pages/ChangelogPage'

export type DocPageId = 'home' | 'ajax' | 'storefront' | 'theme' | 'config' | 'session-cache' | 'changelog'

export interface NavContext {
  navigate: (page: DocPageId) => void
  current: DocPageId
}

export function DocsApp() {
  const [page, setPage] = useState<DocPageId>('home')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [page])

  const ctx: NavContext = { navigate: setPage, current: page }

  return (
    <div className="docs shopify-dev-helper" ref={containerRef}>
      <main className="docs__main">
        {page !== 'home' && (
          <button className="docs__back-inline" onClick={() => setPage('home')}>← Back</button>
        )}
        {page === 'home'       && <Home nav={ctx} />}
        {page === 'ajax'       && <AjaxApiPage nav={ctx} />}
        {page === 'storefront' && <StorefrontApiPage nav={ctx} />}
        {page === 'theme'      && <ThemeAdminPage nav={ctx} />}
        {page === 'config'        && <ConfigPage nav={ctx} />}
        {page === 'session-cache' && <SessionCachePage nav={ctx} />}
        {page === 'changelog'     && <ChangelogPage nav={ctx} />}
      </main>
    </div>
  )
}
