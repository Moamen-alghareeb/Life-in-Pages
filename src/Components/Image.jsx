import React from 'react';
import { IKImage } from 'imagekitio-react';

export default function Image({ src, alt, className, w, h }) {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      alt={alt}
      className={className}
      lqip={{ active: true, quality: 20 }}
      loading="lazy"
      width={w}
      height={h}
    />
  );
}
