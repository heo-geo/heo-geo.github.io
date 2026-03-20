// Declare <model-viewer> as a known JSX element.
// We augment both the global JSX namespace (classic transform / Docusaurus)
// and React.JSX namespace (new JSX transform / React 19).

export {};

// React.JSX.IntrinsicElements — used by React 19 new JSX transform
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerAttributes;
    }
  }
}

// Global JSX.IntrinsicElements — used by some TypeScript / Docusaurus configurations
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerAttributes;
    }
  }

  interface ModelViewerAttributes {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    src?: string;
    poster?: string;
    alt?: string;
    'camera-orbit'?: string;
    'max-camera-orbit'?: string;
    'shadow-intensity'?: string;
    'camera-controls'?: boolean | '';
    'auto-rotate'?: boolean | '';
    ar?: boolean | '';
    'ar-placement'?: string;
    'ar-scale'?: string;
    exposure?: string;
    slot?: string;
    'data-position'?: string;
    'data-normal'?: string;
    'data-surface'?: string;
    'data-visibility-attribute'?: string;
    ref?: React.Ref<HTMLElement>;
    key?: React.Key;
    children?: React.ReactNode;
    [key: string]: unknown;
  }
}
