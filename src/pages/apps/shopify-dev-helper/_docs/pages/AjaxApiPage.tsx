import type { NavContext } from '../DocsApp'

export function AjaxApiPage({ nav: _ }: { nav: NavContext }) {
  return (
    <div className="docs-page">
      <h1 className="docs-page__title">AJAX API</h1>
      <p className="docs-page__lead">
        Shopify's AJAX API lets you interact with cart, product, recommendations, and search — all without page reloads.
        Requests are injected into the active Shopify tab via <code>chrome.scripting.executeScript</code> to bypass CORS.
        When the session cache is active, requests are routed to the cached Shopify tab instead.
      </p>

      <section className="docs-section">
        <h2 className="docs-section__title">Cart</h2>
        <p className="docs-section__body">
          All cart operations target the current store's session. The cart is identified by a token stored in a cookie —
          no authentication is needed.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>GET /cart.js</strong> — Returns the full cart object: <code>items</code>, <code>token</code>,{' '}
            <code>total_price</code>, <code>attributes</code>, <code>note</code>, <code>discount_codes</code> etc.
          </li>
          <li>
            <strong>POST /cart/add.js</strong> — Adds one item. Body:{' '}
            <code>{'{ items: [{ id, quantity, properties?, selling_plan? }] }'}</code>.
            The <code>id</code> field is a variant ID (integer).
          </li>
          <li>
            <strong>POST /cart/update.js</strong> — Bulk-updates quantities by variant ID.
            Body: <code>{'{ updates: { "variantId": qty } }'}</code>. Also accepts <code>note</code> and <code>attributes</code>.
            Set a quantity to <code>0</code> to remove that item.
          </li>
          <li>
            <strong>POST /cart/change.js</strong> — Changes a single item by variant ID or line number.
            Body: <code>{'{ id|line, quantity, properties? }'}</code>.
            Use <code>id</code> for variant ID or <code>line</code> for 1-based line index.
          </li>
          <li>
            <strong>POST /cart/clear.js</strong> — Removes all line items. Does <em>not</em> clear the cart note or attributes.
          </li>
          <li>
            <strong>Clear Attributes</strong> — Two-step operation: GET cart to discover existing attribute keys, then POST{' '}
            <code>/cart/update.js</code> with each key set to <code>""</code>. Shopify only clears keys that are explicitly sent.
          </li>
          <li>
            <strong>Clear Note</strong> — POST <code>/cart/update.js</code> with <code>{'{ note: "" }'}</code>.
          </li>
          <li>
            <strong>Delete Item Properties</strong> — Two-step: GET cart to find the item's property keys, then POST{' '}
            <code>/cart/change.js</code> with each key set to <code>""</code>.
            Sending <code>properties: {'{}'}</code> is ignored by Shopify.
          </li>
          <li>
            <strong>Discount Codes</strong> — POST <code>/cart/update.js</code> with <code>{'{ discount: "CODE" }'}</code>.
            Multiple codes are joined with a comma. Clear all codes by sending <code>{'{ discount: "" }'}</code>.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Product</h2>
        <p className="docs-section__body">
          Fetch product data by handle. The response includes all variants, options, images, pricing, and metafields
          exposed via the AJAX API.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>GET /products/{'{handle}'}.js</strong> — Returns the product JSON.
            The handle is the URL-safe slug shown in the product URL (e.g. <code>my-blue-shirt</code>).
          </li>
          <li>
            <strong>Detect from page</strong> — Reads <code>location.pathname</code> from the active tab and extracts the handle
            using the pattern <code>/\/products\/([^/?#]+)/</code>. Works on any product page URL.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Recommendations</h2>
        <p className="docs-section__body">
          Fetches AI-powered product recommendations for a given product. Requires the product's numeric ID
          (not the handle or GID).
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>GET /recommendations/products.js</strong> — Params: <code>product_id</code> (integer),{' '}
            <code>limit</code> (1–10, default 10), <code>intent</code> (<code>related</code> or <code>complementary</code>).
          </li>
          <li>
            <strong>related</strong> — Products similar to the seed product (same type, tags, vendor).
          </li>
          <li>
            <strong>complementary</strong> — Products often bought together with the seed product.
            Requires configuring complementary products in Shopify Admin or via the Search & Discovery app.
          </li>
          <li>
            <strong>Detect from page</strong> — Two-step: reads the product handle from the URL,
            then calls <code>/products/{'{handle}'}.js</code> to resolve the numeric product ID.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Predictive Search</h2>
        <p className="docs-section__body">
          Returns autocomplete suggestions as the user types — ideal for live search dropdowns.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>GET /search/suggest.json</strong> — Params: <code>q</code> (search query),{' '}
            <code>resources[type]</code> (comma-joined resource types), <code>resources[limit]</code> (1–10),{' '}
            <code>resources[fields]</code> (comma-joined fields to search).
          </li>
          <li>
            <strong>Resource types:</strong> <code>product</code>, <code>article</code>, <code>page</code>,{' '}
            <code>collection</code>, <code>query</code>. Select multiple to search across all of them.
          </li>
          <li>
            <strong>Fields:</strong> <code>title</code>, <code>body</code>, <code>tag</code>, <code>product_type</code>,{' '}
            <code>vendor</code>, <code>author</code>, <code>variants.title</code>, <code>variants.sku</code>,{' '}
            <code>variants.barcode</code>. Leave all unselected to search all fields.
          </li>
        </ul>
      </section>
    </div>
  )
}
