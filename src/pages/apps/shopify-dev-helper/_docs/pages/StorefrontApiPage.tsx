import type { NavContext } from '../DocsApp'

export function StorefrontApiPage({ nav: _ }: { nav: NavContext }) {
  return (
    <div className="docs-page">
      <h1 className="docs-page__title">Storefront API</h1>
      <p className="docs-page__lead">
        GraphQL queries sent directly from the extension service worker context. Shopify's Storefront API allows CORS
        from browser extensions — no tab injection needed. Requires a public Storefront Access Token.
      </p>

      <section className="docs-section">
        <h2 className="docs-section__title">Authentication</h2>
        <p className="docs-section__body">
          The Storefront API requires a <strong>public access token</strong> — not an Admin API key or private app secret.
          Configure it in the <strong>Config</strong> tab. Without a token, the Storefront section is disabled
          and shows a "Token required" overlay.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>Create a token:</strong> <a href="https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started">How to create a Storefront token → </a>
          </li>
          <li>
            <strong>Header:</strong> Sent as <code>X-Shopify-Storefront-Access-Token</code> on every request.
          </li>
          <li>
            <strong>Storage:</strong> Saved to <code>chrome.storage.local</code> — persists across browser restarts.
          </li>
          <li>
            <strong>API Version:</strong> Format <code>YYYY-MM</code> (e.g. <code>2026-04</code>). Determines the endpoint:
            <code> https://{'<store>'}/api/{'<version>'}/graphql.json</code>. Also configured in the Config tab.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Product & Collection</h2>
        <p className="docs-section__body">
          Fetch product and collection data with fine-grained field selection and metafield support.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>Get Product by handle</strong> — Returns title, description, priceRange, variants (with prices and options),
            and images. Handle is the URL slug (e.g. <code>my-product</code>).
          </li>
          <li>
            <strong>List Products</strong> — Returns the first N products. Configurable limit via the <em>First</em> field.
          </li>
          <li>
            <strong>Get Collection by handle</strong> — Returns collection info and its products (first N).
          </li>
          <li>
            <strong>List Collections</strong> — Returns the first N collections with basic info.
          </li>
          <li>
            <strong>GID inputs</strong> — When fetching by ID, the field shows the GID prefix (<code>gid://shopify/Product/</code>)
            as a visual label — only type the numeric suffix.
          </li>
          <li>
            <strong>Detect from page</strong> — Reads the product or collection handle from the active tab URL
            and pre-fills the handle field.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Metafields</h2>
        <p className="docs-section__body">
          Add metafield identifiers to product, collection, article, blog, page, or shop queries to fetch custom field values inline.
          Toggle the <strong>metafields</strong> pill in the Fields row to reveal the identifier inputs.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            Each identifier has an optional <strong>namespace</strong> and a required <strong>key</strong>.
            Omit the namespace to let Shopify search all namespaces for the key.
          </li>
          <li>
            The query fragment appended is:{' '}
            <code>{'metafields(identifiers: [{namespace: "ns", key: "key"}]) { value type }'}</code>
          </li>
          <li>
            Requires the <code>unauthenticated_read_metafields</code> storefront access scope on your app.
          </li>
          <li>
            <strong>Storefront API access must be enabled per field.</strong> For each metafield definition,
            go to Shopify Admin → Settings → Custom data → [Resource] → click the field definition →
            expand <em>Options</em> → enable <strong>Storefront API access</strong>.
            Fields without this toggle enabled will return <code>null</code> even when queried with valid identifiers.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Metaobjects</h2>
        <p className="docs-section__body">
          Query custom structured data you've defined in Shopify Admin → Custom data → Metaobjects.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>Get Metaobject by type + handle</strong> — Provide the metaobject type (e.g. <code>author</code>)
            and handle. Alternatively provide the GID numeric suffix directly.
          </li>
          <li>
            <strong>List Metaobjects</strong> — Returns the first N metaobjects of a given type.
          </li>
          <li>
            Requires the <code>unauthenticated_read_metaobjects</code> access scope.
          </li>
          <li>
            <strong>Storefronts API access must be enabled on the Metaobject definition.</strong> Go to
            Shopify Admin → Settings → Custom data → Metaobjects → click your metaobject type →
            expand <em>Metaobject options</em> → enable <strong>Storefronts API access</strong>.
            Without this, all queries for that type will return empty results or an error.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Blog, Article & Page</h2>
        <p className="docs-section__body">
          Query content resources from your store's online store channel.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>Get Blog</strong> — By handle or by GID (numeric suffix). Returns blog info and a list of its articles (title, excerpt, published date).
          </li>
          <li>
            <strong>Get Article by GID</strong> — Fetches a single article by its numeric Storefront ID.
          </li>
          <li>
            <strong>Get Article by handle</strong> — Requires both the blog handle and the article handle.
          </li>
          <li>
            <strong>Get Page</strong> — By handle or by GID (numeric suffix). Returns a static page's title, body HTML, and SEO fields.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Menu</h2>
        <p className="docs-section__body">
          Query navigation menus defined in your Online Store → Navigation settings.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>Get Menu</strong> — Provide the menu handle (e.g. <code>main-menu</code>).
            Returns <code>id</code>, <code>title</code>, <code>handle</code>, <code>items</code> (with nested title, url, and sub-items),
            and <code>itemsCount</code>.
          </li>
          <li>
            Requires a valid Storefront Access Token with the <code>unauthenticated_read_content</code> access scope.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Shop</h2>
        <p className="docs-section__body">
          Fetch store-level metadata from the Storefront API. Useful for reading payment methods, currencies,
          and primary domain without needing Admin API access.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>Shop Info</strong> — Selectable fields include: <code>id</code>, <code>name</code>, <code>description</code>,{' '}
            <code>primaryDomain</code>, <code>paymentSettings</code>, <code>shipsToCountries</code>, <code>currencyCode</code>,{' '}
            <code>moneyFormat</code>, and more (18 fields total).
          </li>
          <li>
            <strong>Metafields</strong> are supported — toggle the metafields pill and add namespace + key identifiers
            to fetch custom shop-level metafield values inline.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Custom Query</h2>
        <p className="docs-section__body">
          Write any valid Storefront API GraphQL query directly. The token and version from Config are used automatically.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>The <strong>Format</strong> button reformats your query with consistent indentation.</li>
          <li>The response is shown in the JSON viewer below, with search and expand/collapse controls.</li>
          <li>
            The query runs against{' '}
            <code>https://{'<shop>'}/api/{'<version>'}/graphql.json</code> — the same endpoint as all other Storefront tabs.
          </li>
        </ul>
      </section>
    </div>
  )
}
