import type { NavContext } from '../DocsApp'

export function ConfigPage({ nav: _ }: { nav: NavContext }) {
  return (
    <div className="docs-page">
      <h1 className="docs-page__title">Config & Settings</h1>
      <p className="docs-page__lead">
        Permanent settings stored in <code>chrome.storage.local</code> — they persist across browser sessions
        and extension reloads. Changes take effect immediately without restarting the extension.
      </p>

      <section className="docs-section">
        <h2 className="docs-section__title">Auto-close on non-Shopify pages</h2>
        <p className="docs-section__body">
          When enabled, the extension panel closes automatically after 3 seconds whenever you navigate to a page
          that is not a Shopify store <em>and</em> there is no active session cache.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>Default: <strong>On</strong></li>
          <li>
            The countdown is shown in the panel ("Closing in 3s…"). Click <em>Close now</em> to dismiss immediately,
            or open a Shopify tab to cancel the countdown.
          </li>
          <li>
            Turn this <strong>Off</strong> if you want the panel to stay open while you switch between Shopify
            and non-Shopify tabs.
          </li>
          <li>
            This setting has no effect when a session cache is active — the panel always stays open if a
            Shopify tab is still open in the background.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Storefront Access Token</h2>
        <p className="docs-section__body">
          A public Storefront API token used to authenticate all Storefront API (GraphQL) requests.
          Without this token the entire Storefront section is disabled and shows a "Token required" overlay.
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>
            <strong>How to create:</strong> <a href="https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/getting-started">How to create a Storefront token → </a>
          </li>
          <li>
            This is a <strong>public</strong> token — not an Admin API key or private app secret.
            It is safe to use client-side.
          </li>
          <li>
            <strong>Header sent:</strong> <code>X-Shopify-Storefront-Access-Token: {'<your-token>'}</code>
          </li>
          <li>
            Stored in <code>chrome.storage.local</code> — survives browser restarts and extension updates.
          </li>
          <li>
            Use the <em>Show / Hide</em> button to reveal the token for verification.
          </li>
        </ul>
      </section>

      <section className="docs-section">
        <h2 className="docs-section__title">Storefront API Version</h2>
        <p className="docs-section__body">
          Determines which Shopify Storefront API release is used for all GraphQL requests.
          Format: <code>YYYY-MM</code> (e.g. <code>2026-04</code>).
        </p>
        <ul style={{ marginTop: '8px', paddingLeft: '20px', fontSize: '13px', color: 'var(--text-muted)', lineHeight: '2' }}>
          <li>Default: <strong>2026-04</strong></li>
          <li>
            The version is inserted into the endpoint URL:{' '}
            <code>https://{'<shop>'}/api/{'<version>'}/graphql.json</code>
          </li>
          <li>
            Shopify releases a new API version quarterly. Update this value to access new fields and features,
            or pin it to an older version for backward compatibility.
          </li>
          <li>
            Shopify supports the last 12 months of releases. Versions older than that return a deprecation warning
            and are eventually removed.
          </li>
        </ul>
      </section>
    </div>
  )
}
