import type { NavContext } from '../DocsApp'

type ChangelogItem = { label: string; sub?: string[] }

type ChangelogEntry = {
  version: string
  date: string
  items: ChangelogItem[]
  pending?: boolean
}

const ENTRIES: ChangelogEntry[] = [
  {
    version: 'v1.3.2',
    date: 'April 19, 2026',
    pending: true,
    items: [
      {
        label: 'Added Request History:',
        sub: [
          'Automatic log of the last 15 API requests across all tabs (Cart, Product, Recommendations, Search, Storefront API), persisted in localStorage'
        ],
      },
      {
        label: 'Cart — multi-item Add to Cart:',
        sub: [
          'Add multiple variant rows in a single /cart/add.js request via { items: [...] }'
        ],
      },
      { label: 'Cart — "Detect from page" button in each item row auto-fills the Variant ID from the active tab' },
      { label: 'Response viewer — "Copy" button in the toolbar copies the full JSON response to clipboard' },
      {
        label: 'Theme tab — Themes Viewed History:',
        sub: [
          'Records each theme visited (name, theme ID, store domain, preview URL)',
          'Entries can be pinned; unpinned history is capped at 10 items',
          'Full details documented in the Cache & History section',
        ],
      },
      { label: 'Fixed "Detect from page" buttons (Product, Recommendations, Storefront API) not detecting anything when in cached mode' },
      { label: 'Fixed Theme & Admin buttons failing with errors when the extension was in cached mode' },
    ],
  },
  {
    version: 'v1.3',
    date: 'April 4, 2026',
    items: [
      { label: 'Added Storefront API tab — query Shopify\'s Storefront GraphQL API directly from the panel' },
      { label: 'Added session caching — the panel stays functional when switching to non-store tabs' },
    ],
  },
  {
    version: 'v1.2',
    date: 'March 28, 2026',
    items: [
      { label: 'Added Theme & Admin tab: Open Customizer, Code Editor, and Open Page in Customizer' },
      { label: 'Open current page directly in Shopify Admin' },
      { label: 'Show/hide theme preview banner (pb=1 / pb=0)' },
      { label: 'Copy preview URL with preview_theme_id' },
      { label: 'Page context inspector (reads ShopifyAnalytics and Shopify globals)' },
      { label: 'Quick navigation links to common Admin sections' },
    ],
  },
  {
    version: 'v1.1',
    date: 'March 15, 2026',
    items: [
      { label: 'Added Predictive Search tab' },
      { label: 'Added Product Recommendations tab' },
      { label: 'Added Product tab — fetch product JSON by handle' },
      { label: 'Added cart attribute clearing' },
      { label: 'Form state now persists while the browser is open' },
    ],
  },
  {
    version: 'v1.0',
    date: 'March 13, 2026',
    items: [
      { label: 'Initial release' },
      { label: 'Cart tab: get cart, add item, update quantities, remove item, update note and attributes' },
      { label: 'Response viewer with search and expand/collapse' },
    ],
  },
]

export function ChangelogPage({ nav: _ }: { nav: NavContext }) {
  return (
    <div className="docs-page">
      <h1 className="docs-page__title">Changelog</h1>
      <p className="docs-page__lead">Release history for Shopify Dev Helper.</p>
      <div className="docs-changelog">
        {ENTRIES.map(entry => (
          <div key={entry.version} className="docs-changelog__entry">
            <div className="docs-changelog__header">
              <span className="docs-changelog__version">{entry.version}</span>
              <span className="docs-changelog__date">{entry.date}</span>
              {entry.pending && <span className="docs-changelog__pending">under review · not published</span>}
            </div>
            <ul className="docs-changelog__list">
              {entry.items.map((item, i) => (
                <li key={i}>
                  {item.label}
                  {item.sub && (
                    <ul className="docs-changelog__sublist">
                      {item.sub.map((s, j) => <li key={j}>{s}</li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
