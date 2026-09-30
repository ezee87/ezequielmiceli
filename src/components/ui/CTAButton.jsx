import { motion } from 'motion/react';
import { resolveCta } from '../../utils/cta.js';
import styles from './CTAButton.module.css';

const arrow = {
  rest: { x: 0 },
  hover: { x: 5, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Botón de acción. `cta` es la configuración de conversión de la propuesta;
 * `href` permite apuntar a un ancla interna (p. ej. "#inversion").
 * variant: 'solid' | 'outline' | 'text'
 */
export default function CTAButton({ cta, href, label, variant = 'solid', size = 'md', className = '', ...rest }) {
  const target = href ? { href, external: false } : resolveCta(cta);
  const text = label ?? cta?.label;
  const external = target.external;

  return (
    <motion.a
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      href={target.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ scale: 0.985 }}
      {...rest}
    >
      <span>{text}</span>
      <motion.svg className={styles.arrow} variants={arrow} width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M2 9h13M10 4l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </motion.svg>
      {external && <span className="sr-only"> (se abre en una pestaña nueva)</span>}
    </motion.a>
  );
}
