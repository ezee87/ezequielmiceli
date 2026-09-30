import styles from './DarkChapter.module.css';

/** Capítulo oscuro: un cambio de superficie limpio, sin degradados de transición. */
export default function DarkChapter({ as: Tag = 'div', children, ...rest }) {
  return (
    <Tag className={styles.chapter} data-atmosphere="dark" {...rest}>
      {children}
    </Tag>
  );
}
