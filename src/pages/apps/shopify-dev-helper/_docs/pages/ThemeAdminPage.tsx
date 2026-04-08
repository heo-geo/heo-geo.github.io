import type { NavContext } from '../DocsApp'

export function ThemeAdminPage({ nav: _ }: { nav: NavContext }) {
  return (
    <div className="docs-page">
      <h1 className="docs-page__title">Theme & Admin</h1>
      <p className="docs-page__lead">
        Utilities for theme preview, page context inspection, quick navigation to Admin sections,
        and direct links to the theme customizer. All actions require an active Shopify store tab
        (or a valid session cache).
      </p>

      <section className="docs-section">
        <h2 className="docs-section__title">Customizer</h2>
        <p className="docs-section__body">
          Three buttons that open the Shopify theme editor in a new tab. Each reads <code>window.Shopify.theme.id</code>{' '}
          from the active tab via script injection to resolve the current theme ID.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>Open Customizer</strong> — Opens{' '}
            <code>admin.shopify.com/store/{'<slug>'}/themes/{'<id>'}/editor</code>.
          </li>
          <li>
            <strong>Code Editor</strong> — Opens{' '}
            <code>admin.shopify.com/store/{'<slug>'}/themes/{'<id>'}</code>{' '}
            (the online code editor for Liquid, CSS, and JS files).
          </li>
          <li>
            <strong>Open Page in Customizer</strong> — Same as Open Customizer, but appends{' '}
            <code>?previewPath={'{current pathname}'}</code> so the customizer opens directly on the page you are viewing.
          </li>
        </ul>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          If <code>Shopify.theme.id</code> cannot be read (e.g. on a non-Shopify page), an error is shown below the buttons.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Current Page</h2>
        <p className="docs-section__body">
          <strong>Open in Admin</strong> reads <code>ShopifyAnalytics.meta.page.pageType</code> and{' '}
          <code>resourceId</code> from the active tab, then resolves the matching Shopify Admin URL:
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li><code>product</code> → <code>/admin/products/{'<resourceId>'}</code></li>
          <li><code>collection</code> → <code>/admin/collections/{'<resourceId>'}</code></li>
          <li><code>page</code> → <code>/admin/pages/{'<resourceId>'}</code></li>
          <li>
            <code>article</code> → fetches <code>{'<pathname>'}.js</code> to get the <code>blog_id</code>, then opens{' '}
            <code>/admin/blogs/{'<blog_id>'}/articles/{'<id>'}</code>
          </li>
          <li><code>blog</code> → <code>/admin/blogs/{'<resourceId>'}</code></li>
          <li>Homepage (<code>home</code> / <code>frontPage</code>) → opens the Customizer (no direct Admin page)</li>
        </ul>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          Unsupported page types (search, cart, 404) will show an error. Navigate to a product, collection, article,
          blog, or page first.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Preview Banner</h2>
        <p className="docs-section__body">
          Adds or removes the <code>pb</code> query parameter on the current tab's URL and reloads the page.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li><strong>Show Banner (pb=1)</strong> — Makes the Shopify storefront preview bar visible.</li>
          <li><strong>Hide Banner (pb=0)</strong> — Hides the preview bar.</li>
        </ul>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          The preview bar appears when you're browsing a store using a theme preview link. Use this to toggle it
          without manually editing the URL.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Copy Preview URL</h2>
        <p className="docs-section__body">
          Reads <code>window.Shopify.theme.id</code> from the active tab and appends <code>?preview_theme_id=</code>{' '}
          to the current page URL, then copies the result to the clipboard.
        </p>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          Use this to share a preview link of an unpublished theme with clients or stakeholders —
          they can browse the store using your theme without needing Admin access. The link works for anyone
          and does not expire until the theme is published or deleted.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Page Context Inspector</h2>
        <p className="docs-section__body">
          Injects a script into the active tab's MAIN world and reads Shopify global objects. Useful for
          debugging theme templates and understanding what data Shopify exposes on each page type.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>ShopifyAnalytics.meta.page</strong> — <code>pageType</code>, <code>resourceId</code>, and other
            analytics metadata set by Shopify on each page load.
          </li>
          <li>
            <strong>ShopifyAnalytics.meta.product</strong> — Product-specific analytics data, available on product pages.
          </li>
          <li>
            <strong>Shopify.theme</strong> — Current theme <code>id</code>, <code>name</code>, and <code>role</code>{' '}
            (published, unpublished, development).
          </li>
          <li>
            <strong>Shopify.currency</strong> — Active currency code and exchange rate.
          </li>
          <li>
            <strong>Shopify.locale</strong> — Active locale string (e.g. <code>en-CA</code>).
          </li>
        </ul>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          Results are displayed in a collapsible key-value table. Arrays show an item count and can be expanded
          to reveal nested values.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Quick Navigation</h2>
        <p className="docs-section__body">
          One-click buttons that open common Shopify Admin sections for the current store in a new tab.
          The store slug is read from the detected <code>myshopify_domain</code>.
        </p>
        <p className="docs-section__body" style={{ marginTop: '8px' }}>
          Available links: Dashboard, Products, Collections, Orders, Customers, Themes, Pages, Blog Posts,
          Files, Metafields & Metaobjects.
        </p>
      </section>
    </div>
  )
}
