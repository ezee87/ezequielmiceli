import { usePrivateDocument } from '../utils/usePrivateDocument.js';
import styles from './NotFoundPage.module.css';

// No confirma ni insinúa qué propuestas existen.
export default function NotFoundPage() {
  usePrivateDocument('Propuesta — Ezequiel Miceli');

  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>Acceso privado</p>
      <h1 className={styles.title}>Esta propuesta no está disponible.</h1>
      <p className={styles.text}>
        Las propuestas se comparten mediante un enlace personal. Si recibiste uno, revisá que esté completo o
        pedí que te lo envíen de nuevo.
      </p>
      <p className={styles.signature}>Ezequiel Miceli — Diseño y desarrollo web</p>
    </main>
  );
}
