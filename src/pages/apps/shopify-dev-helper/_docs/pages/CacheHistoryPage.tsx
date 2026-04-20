import type { NavContext } from '../DocsApp'

export function CacheHistoryPage({ nav: _ }: { nav: NavContext }) {
  return (
    <div className="docs-page">
      <h1 className="docs-page__title">Cache &amp; History</h1>
      <p className="docs-page__lead">
        Covers three persistence features: session caching (keeps the panel functional across non-store tabs),
        request history (automatic log of API calls), and themes viewed history (log of visited Shopify themes).
      </p>

      <section className="docs-section">
        <h2 className="docs-section__title">How session cache works</h2>
        <p className="docs-section__body">
          Every time you activate a Shopify store tab, the extension saves the store domain and tab ID
          to <code>chrome.storage.session</code>. This cache persists for the lifetime of the browser session.
          When you switch to a non-Shopify page (e.g. Google, a localhost app, or the browser settings),
          the extension checks whether the cached Shopify tab is still open. If it is, the full UI is shown
          using the cached store data and a <strong>cached</strong> badge appears next to the shop domain in the header.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">CORS &amp; request routing</h2>
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

      <section className="docs-section">
        <h2 className="docs-section__title">Request History</h2>
        <p className="docs-section__body">
          Every API request made from any tab (Cart, Product, Recommendations, Search, Storefront API) is
          automatically logged to a persistent history. Entries survive page reloads and browser restarts
          within the same profile.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            Up to <strong>15 entries</strong> are kept in <code>localStorage</code> under <code>request.history</code>;
            the oldest entry is dropped automatically when the cap is reached.
          </li>
          <li>
            The active store's domain is tracked in context — every logged entry records which Shopify store
            the request was made against.
          </li>
          <li>
            Each entry shows: <strong>HTTP method badge</strong>, <strong>endpoint path</strong>,{' '}
            <strong>store domain</strong>, <strong>HTTP status code</strong>, <strong>response time</strong> (ms),
            and a <strong>relative timestamp</strong> (e.g. "3m ago").
          </li>
          <li>Clicking an entry expands the full JSON response inline.</li>
          <li><strong>Clear all</strong> wipes the entire history.</li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Themes Viewed History</h2>
        <p className="docs-section__body">
          On each tab load the extension reads <code>window.Shopify.theme</code> via script injection and
          automatically records the active theme. The history is displayed in the Theme &amp; Admin tab.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            Each entry shows the <strong>theme name</strong>, <strong>theme ID</strong>,{' '}
            <strong>store domain</strong>, and a clickable <strong>preview URL</strong>{' '}
            (<code>?preview_theme_id=</code> appended).
          </li>
          <li>The <strong>currently active theme</strong> is visually highlighted in the list.</li>
          <li>Unpinned history is <strong>capped at 10 items</strong>; oldest entries are dropped automatically.</li>
          <li>
            Entries can be <strong>pinned</strong> — pinned items survive the Clear action and have no cap.
          </li>
          <li>An <strong>empty state</strong> is shown when no themes have been visited yet.</li>
          <li>
            The <strong>Clear</strong> button removes all unpinned entries while leaving pinned ones intact.
          </li>
        </ul>
      </section>
    </div>
  )
}
