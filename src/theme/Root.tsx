import {useEffect} from 'react';
import type {ReactNode} from 'react';

const MODELS_TO_PREFETCH = [
  '/model-viewer/pods.glb',
  '/model-viewer/guitar.glb',
  '/model-viewer/dron.glb',
  '/model-viewer/sneakers.glb',
  '/model-viewer/sign.glb',
  '/model-viewer/piano.glb',
  '/model-viewer/shopify.glb',
];

function ModelPrefetcher() {
  useEffect(() => {
    const prefetch = () => {
      MODELS_TO_PREFETCH.forEach((url) => {
        fetch(url, {cache: 'force-cache'}).catch(() => {});
      });
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(prefetch, {timeout: 3000});
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(prefetch, 2000);
      return () => clearTimeout(id);
    }
  }, []);

  return null;
}

export default function Root({children}: {children: ReactNode}): ReactNode {
  return (
    <>
      <ModelPrefetcher />
      {children}
    </>
  );
}
