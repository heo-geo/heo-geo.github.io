import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import { DocsApp } from './_docs/DocsApp';
import './_docs/docs.scss';

export default function ShopifyDevHelper(): ReactNode {
  return (
    <Layout
      title="Shopify Dev Helper — Chrome Extension"
      description="A Chrome side panel extension for Shopify theme developers. Make live AJAX requests, navigate the Theme Editor, and inspect page context without leaving your tab.">

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        <h1>Shopify Dev Helper — Chrome Extension</h1>
        <p>
          A Chrome side panel extension for Shopify theme developers. Think Postman, but built
          specifically for the Shopify AJAX API — living right next to your browser tab.
        </p>
        <p>
          No console. No custom scripts. No copy-pasting URLs. Just open the panel, navigate to any
          Shopify store, and start making requests.
        </p>
        <p>
          <a href="https://chromewebstore.google.com/detail/shopify-dev-helper/obanbkfddfjcgnpdgdnnefdkbcpgloho">
            Install on Chrome Web Store
          </a>
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <DocsApp />
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <hr />

        <h2>Why developers use it</h2>
        <p>
          Requests run inside the active tab, so they behave exactly like real storefront requests
          — no CORS errors, no authentication workarounds. Form values and responses are saved for
          the duration of your session, so you can switch tabs and come back without losing your
          work.
        </p>
        <p>
          It works on any Shopify online store, including development, staging, and
          password-protected preview themes.
        </p>

        <hr />

        <h2>Permissions</h2>
        <p>The extension requests only the permissions it needs:</p>
        <ul>
          <li>
            <strong>Active tab and scripting</strong> — to inject fetch requests into the current
            Shopify tab (required to bypass CORS for AJAX endpoints)
          </li>
          <li>
            <strong>Side panel</strong> — to display the extension UI
          </li>
          <li>
            <strong>Storage</strong> — to save form state in session storage and persist settings
            (Storefront token, API version, auto-close preference) across browser restarts
          </li>
          <li>
            <strong>Tabs</strong> — to detect store changes and open admin or documentation links
          </li>
        </ul>
        <p>No data is ever collected, transmitted, or stored beyond your local browser.</p>

        <hr />

        <h2>Contact</h2>
        <p>
          Questions, bugs, or ideas? <strong><a href="mailto:h.terentiev@gmail.com">h.terentiev@gmail.com</a></strong>
        </p>

        <hr />

        <p>
          <a href="/apps/shopify-dev-helper/privacy">Privacy Policy</a>
        </p>
      </div>
    </Layout>
  );
}
