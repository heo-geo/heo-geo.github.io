import type { NavContext, DocPageId } from '../DocsApp'

interface Card {
  id: DocPageId
  title: string
  icon: string
  desc: string
  tags?: string[]
}

const CARDS: Card[] = [
  {
    id: 'ajax',
    icon: '🛒',
    title: 'AJAX API',
    desc: 'Cart, product, recommendations, and predictive search endpoints. Covers adding/updating cart items, fetching product data, and more.'
    // tags: ['Cart', 'Product', 'Recommendations', 'Predictive Search'],
  },
  {
    id: 'storefront',
    icon: '⚡',
    title: 'Storefront API',
    desc: 'GraphQL queries for products, collections, articles, blogs, pages, menus, metaobjects, and shop data.'
    // tags: ['GraphQL', 'Products', 'Metafields', 'Collections'],
  },
  {
    id: 'theme',
    icon: '🎨',
    title: 'Theme & Admin',
    desc: 'Theme preview utilities, page context inspector, quick navigation to Shopify Admin sections, and customizer links.'
    // tags: ['Preview Banner', 'Page Context', 'Admin Nav', 'Customizer']
  },
  {
    id: 'config',
    icon: '⚙️',
    title: 'Config & Settings',
    desc: 'App-wide settings stored permanently. Control auto-close behaviour and other preferences.'
    // tags: ['Auto-close', 'Storefront Token', 'API Version'],
  },
  {
    id: 'session-cache',
    icon: '🔄',
    title: 'Cache & History',
    desc: 'Session caching keeps the panel functional when you navigate away from a store. Also covers request history (last 15 API calls) and themes viewed history.',
  },
  {
    id: 'changelog',
    icon: '📋',
    title: 'Changelog',
    desc: 'Release history — what was added, fixed, or changed in each version.',
  },
]

export function Home({ nav }: { nav: NavContext }) {
  return (
    <div className="docs-home">
      <div className="docs-home__intro">
        <h1 className="docs-home__title">Documentation</h1>
        <p className="docs-home__subtitle">
          A developer tool for Shopify theme development. Select a section to learn how each feature works.
        </p>
      </div>
      <div className="docs-home__grid">
        {CARDS.map(card => (
          <button
            key={card.id}
            className="docs-card"
            onClick={() => nav.navigate(card.id)}
          >
            <span className="docs-card__icon">{card.icon}</span>
            <h2 className="docs-card__title">{card.title}</h2>
            <p className="docs-card__desc">{card.desc}</p>
            <div className="docs-card__tags">
              {card.tags?.map(tag => (
                <span key={tag} className="docs-card__tag">{tag}</span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
