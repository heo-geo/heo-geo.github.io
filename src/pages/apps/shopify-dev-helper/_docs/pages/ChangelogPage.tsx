import type { NavContext } from '../DocsApp'

interface ChangelogEntry {
  version: string
  date: string
  items: string[]
  pending?: boolean
}

const ENTRIES: ChangelogEntry[] = [
  {
    version: 'v1.3.1',
    date: 'April 10, 2026',
    pending: true,
    items: [
      'Fixed "Detect from page" buttons (Product, Recommendations, Storefront API) not detecting anything when in cached mode',
      'Fixed Theme & Admin buttons failing with errors when the extension was in cached mode',
    ],
  },
  {
    version: 'v1.3',
    date: 'April 4, 2026',
    items: [
      'Added Storefront API tab — query Shopify\'s Storefront GraphQL API directly from the panel',
      'Added session caching — the panel stays functional when switching to non-store tabs',
    ],
  },
  {
    version: 'v1.2',
    date: 'March 28, 2026',
    items: [
      'Added Theme & Admin tab: Open Customizer, Code Editor, and Open Page in Customizer',
      'Open current page directly in Shopify Admin',
      'Show/hide theme preview banner (pb=1 / pb=0)',
      'Copy preview URL with preview_theme_id',
      'Page context inspector (reads ShopifyAnalytics and Shopify globals)',
      'Quick navigation links to common Admin sections',
    ],
  },
  {
    version: 'v1.1',
    date: 'March 15, 2026',
    items: [
      'Added Predictive Search tab',
      'Added Product Recommendations tab',
      'Added Product tab — fetch product JSON by handle',
      'Added cart attribute clearing',
      'Form state now persists while the browser is open',
    ],
  },
  {
    version: 'v1.0',
    date: 'March 13, 2026',
    items: [
      'Initial release',
      'Cart tab: get cart, add item, update quantities, remove item, update note and attributes',
      'Response viewer with search and expand/collapse',
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
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
