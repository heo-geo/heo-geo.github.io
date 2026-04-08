import type { NavContext } from '../DocsApp'

export function SessionCachePage({ nav: _ }: { nav: NavContext }) {
  return (
    <div className="docs-page">
      <h1 className="docs-page__title">Session Cache</h1>
      <p className="docs-page__lead">
        The extension stays fully functional even when you navigate away from a Shopify store tab —
        as long as that tab is still open somewhere in your browser.
      </p>

      <section className="docs-section">
        <h2 className="docs-section__title">How it works</h2>
        <p className="docs-section__body">
          Every time you activate a Shopify store tab, the extension saves the store domain and tab ID
          to <code>chrome.storage.session</code>. This cache persists for the lifetime of the browser session.
          When you switch to a non-Shopify page (e.g. Google, a localhost app, or the browser settings),
          the extension checks whether the cached Shopify tab is still open. If it is, the full UI is shown
          using the cached store data and a <strong>cached</strong> badge appears next to the shop domain in the header.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">CORS & request routing</h2>
        <p className="docs-section__body">
          Shopify AJAX API requests (<code>/cart.js</code>, <code>/products/*.js</code>, etc.) are injected
          into the target tab via <code>chrome.scripting.executeScript</code> — they run inside the tab's
          JavaScript context, so they use the Shopify origin. When the cache is active, requests are routed
          to the cached Shopify tab instead of the currently active tab. This avoids CORS issues that would
          occur if requests were injected into a non-Shopify page.
        </p>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          Storefront API (GraphQL) calls are made directly from the extension service worker context —
          Shopify's Storefront API allows CORS from browser extensions, so no tab injection is needed there.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Multi-tab behaviour</h2>
        <p className="docs-section__body">
          If you have multiple Shopify store tabs open, the cache always reflects the <em>most recently
          activated</em> store. Switching between Shopify tabs updates the cache to the new store instantly.
          The cached badge disappears whenever the active tab is a confirmed Shopify store.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">When the cache clears</h2>
        <p className="docs-section__body">
          The cache is cleared automatically in these cases:
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <li>The cached Shopify tab is closed</li>
          <li>The browser session ends (all windows closed)</li>
          <li>You navigate back to a Shopify store tab — the cache is refreshed to the new live data</li>
        </ul>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          If the cache clears while you are on a non-Shopify page, the error screen will appear.
          Open any Shopify store tab to restore full functionality.
        </p>
      </section>
    </div>
  )
}
