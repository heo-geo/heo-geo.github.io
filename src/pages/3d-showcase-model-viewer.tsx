import {useState, useEffect} from 'react';
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
// @ts-ignore — @site alias resolved by Docusaurus at build time
import ModelViewer from '@site/src/components/ModelViewer';

interface ModelViewerElement extends HTMLElement {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  play: Function;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  pause: Function;
  cameraTarget: string;
  currentTime: string;
  variantName: string;
  model: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    getMaterialByName: Function;
  };
}

function setupPodsInteraction(element: ModelViewerElement) {
  const podsActiveBtn = element.querySelector('.js-pods__btn--active');
  const podsRightBtn = element.querySelector('.js-pods__btn--right');
  const podsLeftBtn = element.querySelector('.js-pods__btn--left');
  const podsBackBtn = element.querySelector('.js-pods__btn--back');
  let animationBack = false;

  if (!podsActiveBtn || !podsRightBtn || !podsLeftBtn) return;

  podsActiveBtn.addEventListener('click', () => {
    if (!animationBack) {
      element.play();
      podsActiveBtn.classList.add('pods__btn--hide');
      setTimeout(() => {
        element.pause();
        podsRightBtn.classList.add('js-pods__btn--right--active');
        podsLeftBtn.classList.add('js-pods__btn--left--active');
        animationBack = true;
        podsActiveBtn.children[0]?.children[1]?.classList.remove('js-pods__text--hide');
        podsActiveBtn.children[0]?.children[0]?.classList.add('js-pods__text--hide');
        podsActiveBtn.classList.remove('pods__btn--hide');
      }, 3000);
    } else {
      element.play();
      podsRightBtn.classList.remove('js-pods__btn--right--active');
      podsLeftBtn.classList.remove('js-pods__btn--left--active');
      podsActiveBtn.classList.add('pods__btn--hide');
      setTimeout(() => {
        element.pause();
        element.currentTime = '0';
        animationBack = false;
        podsActiveBtn.children[0]?.children[1]?.classList.add('js-pods__text--hide');
        podsActiveBtn.children[0]?.children[0]?.classList.remove('js-pods__text--hide');
        podsActiveBtn.classList.remove('pods__btn--hide');
      }, 3000);
    }
  });

  podsRightBtn.addEventListener('click', () => {
    element.cameraTarget = '5m 17m auto';
    element.setAttribute('camera-orbit', '0deg 75deg 80%');
    podsBackBtn?.classList.add('js-pods__btn--back--active');
  });

  podsLeftBtn.addEventListener('click', () => {
    element.cameraTarget = '-5m 17m auto';
    element.setAttribute('camera-orbit', '0deg 75deg 80%');
    podsBackBtn?.classList.add('js-pods__btn--back--active');
  });

  podsBackBtn?.addEventListener('click', () => {
    element.cameraTarget = 'auto auto auto';
    element.setAttribute('camera-orbit', '0deg 75deg 150%');
    podsBackBtn.classList.remove('js-pods__btn--back--active');
  });
}

function setupGuitarInteraction(
  element: ModelViewerElement,
  setContent: (c: string | null) => void,
) {
  const describeBtnTop = element.querySelector('.js-describe__btn--top');
  const describeBtnMiddle = element.querySelector('.js-describe__btn--middle');
  const describeBtnBottom = element.querySelector('.js-describe__btn--bottom');
  // one level up (no ModelViewerCard wrapper div here)
  const describeBackBtn = element.parentElement?.querySelector('.js-describe-back__btn');

  const locales = {
    machineHeads: `<strong>Machine Heads.</strong><br>Guitar machine heads, or tuning pegs, are key components located on the headstock that adjust string tension to tune the instrument. They consist of gears and pegs, allowing for precise pitch control. Locking tuners provide extra stability for aggressive playing, while traditional tuners are commonly found on vintage-style guitars.`,
    bridge: `<strong>Bridge</strong><br>The guitar bridge anchors the strings to the body and transfers their vibrations to the instrument, playing a key role in tone and sustain. Fixed bridges provide stability; tremolo bridges allow pitch manipulation. The bridge also affects string action and intonation, crucial for playability and tuning accuracy.`,
    frets: `<strong>Frets</strong><br>Frets are metal strips embedded along the guitar's fretboard, dividing it into sections that represent different musical notes. Pressing a string against a fret changes its vibrating length, altering the pitch. The size, material, and placement of frets impact playability, tone, and tuning precision.`,
  };

  if (!describeBtnTop || !describeBtnMiddle || !describeBtnBottom || !describeBackBtn) return;

  describeBackBtn.addEventListener('click', () => {
    element.cameraTarget = 'auto auto auto';
    element.setAttribute('camera-orbit', '0deg 75deg 105%');
    describeBackBtn.classList.remove('js-describe-back__btn--active');
    setContent(null);
  });

  describeBtnBottom.addEventListener('click', () => {
    element.cameraTarget = 'auto 3m auto';
    element.setAttribute('camera-orbit', '-20deg 65deg 0%');
    describeBackBtn.classList.add('js-describe-back__btn--active');
    setContent(locales.bridge);
  });

  describeBtnTop.addEventListener('click', () => {
    element.cameraTarget = 'auto 13m auto';
    element.setAttribute('camera-orbit', '-20deg 65deg 0%');
    describeBackBtn.classList.add('js-describe-back__btn--active');
    setContent(locales.machineHeads);
  });

  describeBtnMiddle.addEventListener('click', () => {
    element.cameraTarget = 'auto 8m auto';
    element.setAttribute('camera-orbit', '-20deg 65deg 0%');
    describeBackBtn.classList.add('js-describe-back__btn--active');
    setContent(locales.frets);
  });
}

export default function Showcase(): ReactNode {
  const [guitarContent, setGuitarContent] = useState<string | null>(null);
  const [dronButtonsLoading, setDronButtonsLoading] = useState(false);
  const [dronModelState, setDronModelState] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDesktop(window.matchMedia('(min-width: 1020px)').matches);

    const podsEl = document.querySelector('.js-model-pods') as ModelViewerElement | null;
    if (podsEl) setupPodsInteraction(podsEl);

    const guitarEl = document.querySelector('.js-model-guitar') as ModelViewerElement | null;
    if (guitarEl) setupGuitarInteraction(guitarEl, setGuitarContent);
  }, []);

  const handleDronFold = () => {
    const el = document.querySelector('.js-model-dron') as ModelViewerElement | null;
    if (!el || dronButtonsLoading) return;
    setDronButtonsLoading(true);
    el.play();
    setDronModelState(false);
    setTimeout(() => {
      el.pause();
      el.currentTime = '0';
      setDronButtonsLoading(false);
    }, 1180);
  };

  const handleDronUnfold = () => {
    const el = document.querySelector('.js-model-dron') as ModelViewerElement | null;
    if (!el || dronButtonsLoading) return;
    setDronButtonsLoading(true);
    el.play();
    setDronModelState(true);
    setTimeout(() => {
      el.pause();
      el.currentTime = '2.2';
      setDronButtonsLoading(false);
    }, 1200);
  };

  const handleSneakers = (buttonCode: string, type: string) => {
    const el = document.querySelector('.js-model-sneakers') as ModelViewerElement | null;
    if (!el) return;
    if (type === 'color') {
      el.variantName = buttonCode;
    } else if (type === 'view') {
      el.setAttribute('camera-orbit', buttonCode);
    } else if (type === 'configuration') {
      const textures = [
        el.model.getMaterialByName('laces_R'),
        el.model.getMaterialByName('laces_L'),
      ] as Array<{
        getAlphaMode: () => string;
        setAlphaMode: (m: string) => void;
        pbrMetallicRoughness: {baseColorFactor: number[]; setBaseColorFactor: (f: number[]) => void};
      }>;
      textures.forEach((texture) => {
        if (!texture) return;
        if (texture.getAlphaMode() === 'OPAQUE') {
          texture.setAlphaMode('BLEND');
          const pbr = texture.pbrMetallicRoughness;
          pbr.setBaseColorFactor([1, 1, 1, 0]);
        } else {
          texture.setAlphaMode('OPAQUE');
          const pbr = texture.pbrMetallicRoughness;
          const base = pbr.baseColorFactor;
          base[3] = 1;
          pbr.setBaseColorFactor(base);
        }
      });
    }
  };

  return (
    <Layout
      title="3D in Web Showcase using Google Model Viewer"
      description="Interactive 3D model demos using Google Model Viewer — annotations, AR, configuration, and animations.">
      <Head>
        <link rel="preload" as="fetch" href="/model-viewer/pods.glb" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/model-viewer/pods.webp" />
      </Head>
      <main style={{maxWidth: '900px', margin: '0 auto', padding: '3rem 1.5rem'}}>
        <h1>3D in Web Showcase using Google Model Viewer</h1>
        <p>
          Google's Model Viewer is a web component that lets you embed interactive 3D models directly
          into any webpage — no complex code or 3D expertise required. It supports augmented reality,
          camera controls, animations, model variants, and annotations out of the box.
        </p>

        <details className="showcase-details">
          <summary>Key Features</summary>
          <ul>
            <li>
              <strong>Simple Embedding</strong> — Model Viewer works like an HTML tag.
              With a few lines of code you get a fully interactive 3D experience.
            </li>
            <li>
              <strong>Augmented Reality (AR)</strong> — Users can view 3D models in their
              real-world environment through supported devices, perfect for e-commerce product previews.
            </li>
            <li>
              <strong>Interactive &amp; Responsive</strong> — Built-in camera controls (zoom,
              rotate, pan) that work across all modern devices and browsers.
            </li>
            <li>
              <strong>Customization</strong> — Add auto-rotation, custom camera angles,
              annotations, and material/variant switching to tailor the experience.
            </li>
          </ul>
        </details>

        <details className="showcase-details">
          <summary>Shopify Integration</summary>
          <p>
            Shopify uses Google Model Viewer by default to display 3D models on product pages.
            This allows merchants to provide an immersive shopping experience where customers
            can explore products in 3D directly in their browser, or place them in their own
            space via AR.
          </p>
          <p>
            Shopify's built-in support makes it easy for store owners to upload and showcase
            3D models, enhancing product visualization and customer engagement without any
            custom development.
          </p>
        </details>

        {/* ── Section 1: Pods — interaction via annotations ── */}
        <div className="showcase-section">
          <div className="showcase-section__info">
            <h2>Interaction via Annotations</h2>
            <p>Annotations are clickable. Click "Open" to animate the pods, then explore left and right views.</p>
          </div>
          <div className="showcase-section__model">
            <ModelViewer
              className="showcase-model-viewer js-model-pods"
              src="/model-viewer/pods.glb"
              poster="/model-viewer/pods.webp"
              camera-orbit="0deg 75deg 150%"
              max-camera-orbit="Infinity 157.5deg 150%"
              camera-controls
            >
              <button className="showcase-back-btn js-pods__btn--back">Main view</button>
              <button
                className="showcase-hotspot js-pods__btn--active"
                slot="hotspot-1"
                data-position="1.0741127892399491m 4.967074280834477m 3.621727305298912m"
                data-normal="-0.019456072837105216m 0.09727925570152511m 0.9950669362610309m"
                data-visibility-attribute="visible">
                <div className="showcase-hotspot-annotation js-pods__text-wrap">
                  <span className="js-pods__text--open">Open</span>
                  <span className="js-pods__text--close js-pods__text--hide">Close</span>
                </div>
              </button>
              <button
                className="showcase-hotspot js-pods__btn--right"
                slot="hotspot-2"
                data-surface="3 0 7627 7655 7628 0.114 0.196 0.690"
                data-visibility-attribute="visible">
                <div className="showcase-hotspot-annotation">Right</div>
              </button>
              <button
                className="showcase-hotspot js-pods__btn--left"
                slot="hotspot-3"
                data-surface="8 0 1366 1367 1394 0.383 0.398 0.219"
                data-visibility-attribute="visible">
                <div className="showcase-hotspot-annotation">Left</div>
              </button>
            </ModelViewer>
          </div>
        </div>

        {/* ── Section 2: Guitar — description via annotations ── */}
        <div className="showcase-section">
          <div className="showcase-section__info">
            <h2>Model Description with Annotations</h2>
            <p>Click an annotation to zoom in and read a description of that part of the guitar.</p>
            {guitarContent && (
              <div
                className="showcase-guitar-content"
                dangerouslySetInnerHTML={{__html: guitarContent}}
              />
            )}
          </div>
          <div className="showcase-section__model" style={{position: 'relative'}}>
            <button className="showcase-guitar-back-btn js-describe-back__btn">← Back</button>
            <ModelViewer
              className="showcase-model-viewer js-model-guitar"
              src="/model-viewer/guitar.glb"
              poster="/model-viewer/guitar-poster.webp"
              loading="lazy"
              camera-controls
            >
              <button
                className="showcase-hotspot js-describe__btn--bottom"
                slot="hotspot-2"
                data-position="0.856044208389817m 2.8378169888198297m 2.630858665218231m"
                data-normal="0.00004121655384856153m 0.000004162275009144271m 0.9999999991419356m"
                data-visibility-attribute="visible">
                <div className="showcase-hotspot-annotation">Bridge</div>
              </button>
              <button
                className="showcase-hotspot js-describe__btn--top"
                slot="hotspot-3"
                data-position="0.6288922406279799m 12.806647055236855m 1.7303095328720937m"
                data-normal="-0.01812223892569212m -0.16092031178940724m 0.986801012215695m"
                data-visibility-attribute="visible">
                <div className="showcase-hotspot-annotation">Machine heads</div>
              </button>
              <button
                className="showcase-hotspot js-describe__btn--middle"
                slot="hotspot-4"
                data-position="0.16505545055888193m 9.596945968591413m 2.3223655659194518m"
                data-normal="0.008155982130710593m 0.1286053810756102m 0.991662309414793m"
                data-visibility-attribute="visible">
                <div className="showcase-hotspot-annotation">Frets</div>
              </button>
            </ModelViewer>
          </div>
        </div>

        {/* ── Section 3: Drone — button controls ── */}
        <div className="showcase-section">
          <div className="showcase-section__info">
            <h2>Interaction via Buttons</h2>
            <p>Use the buttons to animate the drone folding and unfolding its arms.</p>
            <div className="showcase-controls">
              <button
                className="showcase-btn"
                disabled={dronButtonsLoading || !dronModelState}
                onClick={handleDronFold}>
                Fold
              </button>
              <button
                className="showcase-btn"
                disabled={dronButtonsLoading || dronModelState}
                onClick={handleDronUnfold}>
                Unfold
              </button>
            </div>
          </div>
          <div className="showcase-section__model">
            <ModelViewer
              className="showcase-model-viewer js-model-dron"
              src="/model-viewer/dron.glb"
              max-camera-orbit="auto auto 200%"
              camera-orbit="0deg 75deg 200%"
              shadow-intensity="0"
              loading="lazy"
              camera-controls
            />
          </div>
        </div>

        {/* ── Section 4: Sneakers — model configuration ── */}
        <div className="showcase-section">
          <div className="showcase-section__info">
            <h2>Model Configuration</h2>
            <p>Switch color variants, change camera views, and toggle laces visibility.</p>
            <div className="showcase-controls">
              <h4>Variants</h4>
              <button className="showcase-btn" onClick={() => handleSneakers('gray', 'color')}>
                White
              </button>
              <button className="showcase-btn" onClick={() => handleSneakers('white', 'color')}>
                Gray
              </button>

              <h4>View</h4>
              <button
                className="showcase-btn"
                onClick={() => handleSneakers('-90deg 85deg 80%', 'view')}>
                Front
              </button>
              <button
                className="showcase-btn"
                onClick={() => handleSneakers('90deg 85deg 80%', 'view')}>
                Back
              </button>
              <button
                className="showcase-btn"
                onClick={() => handleSneakers('10deg 85deg 80%', 'view')}>
                Side
              </button>
              <button
                className="showcase-btn"
                onClick={() => handleSneakers('90deg 20deg 90%', 'view')}>
                Top
              </button>

              <h4>Configuration</h4>
              <button className="showcase-btn" onClick={() => handleSneakers('', 'configuration')}>
                Toggle Laces
              </button>
            </div>
          </div>
          <div className="showcase-section__model">
            <ModelViewer
              className="showcase-model-viewer js-model-sneakers"
              src="/model-viewer/sneakers.glb"
              camera-orbit="-140deg 75deg 90%"
              shadow-intensity="1"
              exposure="0.46"
              camera-controls
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Section 5: AR ── */}
        <div className="showcase-section" style={{flexDirection: 'column'}}>
          <h2 style={{margin: 0}}>Augmented Reality (AR)</h2>
          <p style={{margin: 0, opacity: 0.75}}>
            View 3D models placed in your real-world environment. Works on mobile devices with ARCore
            or ARKit support.
          </p>

          {isDesktop && (
            <div className="showcase-ar-qr">
              <img
                src="/model-viewer/ar-qr.png"
                width={180}
                height={180}
                alt="QR code to open on mobile"
                loading="lazy"
              />
              <span>
                You're on desktop. Scan the QR code to open this page on your mobile device and
                experience the AR models.
              </span>
            </div>
          )}

          <div className="showcase-section" style={{padding: '1rem 0', borderBottom: 'none'}}>
            <div className="showcase-section__info">
              <h3>Wall Placement</h3>
              <p>Attach a 3D model to a wall surface in AR. Useful for artwork, signage, or wall decor.</p>
            </div>
            <div className="showcase-section__model">
              <ModelViewer
                className="showcase-model-viewer"
                src="/model-viewer/sign.glb"
                ar
                ar-placement="wall"
                ar-scale="fixed"
                camera-controls
                loading="lazy"
              />
            </div>
          </div>

          <div className="showcase-section" style={{padding: '1rem 0', borderBottom: 'none'}}>
            <div className="showcase-section__info">
              <h3>Floor Placement</h3>
              <p>
                Place a 3D model on the floor in AR. Useful for furniture, sculptures, or any
                floor-standing item.
              </p>
            </div>
            <div className="showcase-section__model">
              <ModelViewer
                className="showcase-model-viewer"
                src="/model-viewer/piano.glb"
                ar
                camera-controls
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
