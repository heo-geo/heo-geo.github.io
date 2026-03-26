import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// @ts-ignore — @site alias resolved by Docusaurus at build time
import ModelViewer from '@site/src/components/ModelViewer';

export default function Home(): ReactNode {
  return (
    <Layout
      title="Heorhii Terentiev — Digital Garden"
      description="A personal corner of the web where I plant ideas, collect resources, and let thoughts grow over time.">
      <Head>
        <link rel="preload" as="fetch" href="/model-viewer/shopify.glb" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/model-viewer/shopify-poster.png" />
      </Head>
      <main style={{maxWidth: '760px', margin: '0 auto', padding: '3rem 1.5rem'}}>

        <img
          src="/personal/M_photo.jpeg"
          alt="Heorhii Terentiev"
          loading="lazy"
          style={{width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', border: '8px solid #888', display: 'block', margin: '0 auto 1.5rem'}}
        />

        <h1>Hey, I'm Heorhii 👋</h1>

        <p>
          <strong>Heorhii (George) Terentiev</strong> — this is my 🌱 <strong>digital garden</strong>, a personal corner of the web where I plant ideas, collect resources, and let thoughts grow over time.
        </p>

        <p>
          Unlike a blog, where everything is polished and chronological, this space is <strong>alive</strong>, a bit <strong>messy</strong>, and always <strong>evolving</strong>.
        </p>

        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', margin: '1.25rem 0'}}>
          <a
            href="https://www.linkedin.com/in/heorhii-terentiev/"
            target="_blank"
            rel="noopener nofollow"
            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '6px', background: '#0077B5', color: '#fff', fontWeight: 500, textDecoration: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/heo-geo"
            target="_blank"
            rel="noopener nofollow"
            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '6px', background: '#24292e', color: '#fff', fontWeight: 500, textDecoration: 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            GitHub
          </a>
          <a
            href="/personal/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '6px', border: '1px solid var(--ifm-color-emphasis-400)', color: 'inherit', fontWeight: 500, textDecoration: 'none'}}>
            📄 CV
          </a>
        </div>

        <p>Here, you'll find:</p>
        <ul>
          <li>✍️ Notes and ideas I'm exploring</li>
          <li>📚 Useful resources I don't want to forget</li>
          <li>🔧 Tools, frameworks, and code snippets</li>
          <li>💭 Musings about tech, learning, creativity, and more</li>
        </ul>

        <p>Some notes are fresh sprouts 🌱 — unpolished and raw. Others have matured 🍃 — expanded and refined.</p>

        <h2>🤔 Why a Digital Garden?</h2>
        <p>
          Because learning isn't linear, thoughts deserve sunlight, and sharing is better than hoarding.
          This isn't a place for perfection. It's a space for <strong>connection</strong> — between ideas, people, and curiosity.
        </p>

        <h2>📍 What's Inside</h2>
        <p>There's no single path. Wander. Click. Backtrack. Revisit.</p>

        <div className="nav-cards">
          <Link to="/contact" className="nav-card nav-card--contact">
            <div className="nav-card-icon">📬</div>
            <div className="nav-card-title">Contact</div>
            <div className="nav-card-desc">Send me a note</div>
          </Link>
          <Link to="/docs/shopify" className="nav-card">
            <div className="nav-card-icon">🛍️</div>
            <div className="nav-card-title">Shopify</div>
            <div className="nav-card-desc">Bookmarks, articles & interview prep</div>
          </Link>
          <Link to="/docs/front-end" className="nav-card">
            <div className="nav-card-icon">🔖</div>
            <div className="nav-card-title">General Bookmarks</div>
            <div className="nav-card-desc">Front-end, back-end & 3D in web</div>
          </Link>
          <Link to="/blog" className="nav-card">
            <div className="nav-card-icon">🎤</div>
            <div className="nav-card-title">Articles & Talks</div>
            <div className="nav-card-desc">Writing and presentations</div>
          </Link>
          <Link to="/about" className="nav-card">
            <div className="nav-card-icon">👤</div>
            <div className="nav-card-title">About</div>
            <div className="nav-card-desc">My story and background</div>
          </Link>
          <div className="nav-card nav-card--model">
            <ModelViewer
              src="/model-viewer/shopify.glb"
              poster="/model-viewer/shopify-poster.png"
              alt="3D model preview"
              camera-orbit="210deg 80deg 105%"
              shadow-intensity="1"
              camera-controls
              auto-rotate
            />
            <Link to="/3d-showcase-model-viewer" className="nav-card__overlay">
              <div className="nav-card-title">3D in Web Showcase using Google Model Viewer</div>
              <div className="nav-card-desc">Interactive 3D models &amp; AR demos</div>
            </Link>
          </div>
           <Link to="/apps/shopify-dev-helper" className="nav-card nav-card--centered">
            <div className="nav-card-icon"><img src="/img/shopify-dev-helper-icon.png" alt="Shopify Dev Helper" style={{width: '40px', height: '40px'}} /></div>
            <div className="nav-card-title">Shopify Dev Helper</div>
            <div className="nav-card-desc">Chrome extension for Shopify theme developers</div>
          </Link>
        </div>

      </main>
    </Layout>
  );
}
