import { useLayoutEffect, useRef, useState } from 'react';
import styles from './LivePreview.module.css';

/**
 * Vista previa real de la demo dentro de un marco de dispositivo: un iframe con el viewport del dispositivo
 * (así las media queries responden como en un equipo real) escalado al ancho del marco. No es una captura.
 */
export default function LivePreview({ src, width, height, kind, title }) {
  const box = useRef(null);
  const [scale, setScale] = useState(0);

  useLayoutEffect(() => {
    const el = box.current;
    const update = () => setScale(el.clientWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div className={`${styles.device} ${styles[kind]}`} data-device={kind}>
      <div className={styles.bezel}>
        <div className={styles.screen} ref={box} style={{ aspectRatio: `${width} / ${height}` }}>
          <iframe
            className={styles.frame}
            src={src}
            title={title}
            loading="lazy"
            tabIndex={-1}
            scrolling="no"
            aria-hidden="true"
            style={{ width, height, transform: `scale(${scale})`, visibility: scale ? 'visible' : 'hidden' }}
          />
        </div>
      </div>
      {kind === 'desktop' && <div className={styles.base} aria-hidden="true" />}
    </div>
  );
}
