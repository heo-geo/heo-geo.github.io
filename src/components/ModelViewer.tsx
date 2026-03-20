import React from 'react';

interface ModelViewerProps {
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
  children?: React.ReactNode;
}

/**
 * Typed wrapper for the <model-viewer> custom element (Google Model Viewer).
 * Uses React.createElement to avoid JSX custom-element type issues.
 */
export default function ModelViewer({children, ...props}: ModelViewerProps) {
  return React.createElement('model-viewer', props as object, children);
}
